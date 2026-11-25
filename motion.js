/* Motion layer — Cursor A (dot + trailing ring) + CTA magnetic/press.
   Progressive enhancement: with JS disabled the site is unchanged.
   Ported from the verified motion demo (cursor A + CTA motion system). */
(function () {
  "use strict";

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(pointer: fine)").matches;

  /* ---------- Wrap trailing arrows so CSS can slide them ---------- */
  function wrapArrow(el) {
    if (!el) return;
    for (var i = el.childNodes.length - 1; i >= 0; i--) {
      var n = el.childNodes[i];
      if (n.nodeType !== 3) continue;
      var m = n.nodeValue.match(/^(.*?)(\s*)([→↗])(\s*)$/);
      if (!m) continue;
      var span = document.createElement("span");
      span.className = "marr";
      span.textContent = m[3];
      var frag = document.createDocumentFragment();
      if (m[1] || m[2]) frag.appendChild(document.createTextNode(m[1] + m[2]));
      frag.appendChild(span);
      if (m[4]) frag.appendChild(document.createTextNode(m[4]));
      el.replaceChild(frag, n);
      return;
    }
  }
  if (!reduced) {
    wrapArrow(document.querySelector(".hero-btns .btn-solid"));
    wrapArrow(document.querySelector(".badge2"));
  }

  /* ---------- Magnetic hover pull + press (mouse only) ---------- */
  if (!reduced && finePointer) {
    document.querySelectorAll(".btn-talk, .btn, .demo-play").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var rect = el.getBoundingClientRect();
        var dx = e.clientX - (rect.left + rect.width / 2);
        var dy = e.clientY - (rect.top + rect.height / 2);
        el.style.transform = "translate(" + dx * 0.22 + "px," + dy * 0.28 + "px)";
      });
      el.addEventListener("mouseleave", function () {
        el.style.transform = "";
      });
      // keep the press feedback from fighting the magnetic transform
      el.addEventListener("mousedown", function () {
        el.style.transform += " scale(.96)";
      });
      el.addEventListener("mouseup", function () {
        el.style.transform = el.style.transform.replace(" scale(.96)", "");
      });
    });
  }

  /* ---------- Cursor A — dot + trailing ring ---------- */
  if (reduced || !finePointer) return; // touch + reduced motion: native experience

  var dot = document.createElement("div");
  dot.className = "cur";
  dot.id = "curDot";
  var ring = document.createElement("div");
  ring.className = "cur";
  ring.id = "curRing";
  document.body.appendChild(dot);
  document.body.appendChild(ring);

  var mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
  var ringPos = { x: mouse.x, y: mouse.y };
  var engaged = false;
  var inside = true;

  // Engage only on the first real mouse move.
  window.addEventListener("mousemove", function engage(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    ringPos.x = e.clientX;
    ringPos.y = e.clientY;
    engaged = true;
    document.body.classList.add("cursor-on");
    window.removeEventListener("mousemove", engage);
    requestAnimationFrame(frame);
  }, { passive: true });

  window.addEventListener("mousemove", function (e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    inside = true;
  }, { passive: true });

  document.documentElement.addEventListener("mouseleave", function () {
    inside = false;
  });

  // Grow / turn blue over interactive elements (event delegation).
  var INTERACTIVE = "a, button, input, select, textarea, label, [role='button']";
  document.addEventListener("mouseover", function (e) {
    ring.classList.toggle("big", !!e.target.closest(INTERACTIVE));
  }, { passive: true });

  function place(el, x, y) {
    el.style.transform = "translate(" + (x - el.offsetWidth / 2) + "px," + (y - el.offsetHeight / 2) + "px)";
  }

  function frame() {
    var show = engaged && inside;
    dot.style.opacity = show ? "" : "0";
    ring.style.opacity = show ? "" : "0";
    // Dot tracks instantly; the ring trails with easing.
    place(dot, mouse.x, mouse.y);
    ringPos.x += (mouse.x - ringPos.x) * 0.16;
    ringPos.y += (mouse.y - ringPos.y) * 0.16;
    place(ring, ringPos.x, ringPos.y);
    requestAnimationFrame(frame);
  }
})();

/* ---------- More Projects — hover preview card ----------
   One fixed card follows the cursor (damped lerp, same feel as the
   trailing cursor ring) and crossfades between project slides.
   Trigger: the project title only, so the card never covers the
   description text while it is being read. Desktop hover only;
   on small screens the rows carry fixed thumbnails instead and
   this stays inert. */
(function () {
  "use strict";
  var pv = document.getElementById("pv");
  var more = document.querySelector(".more");
  if (!pv || !more) return;
  var rows = Array.prototype.slice.call(more.querySelectorAll(".row"));
  var slides = {};
  pv.querySelectorAll(".slide").forEach(function (s) { slides[s.dataset.slug] = s; });
  var canHover = window.matchMedia("(hover: hover) and (min-width: 861px)").matches;
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function activate(row) {
    rows.forEach(function (r) { r.classList.toggle("hovering", r === row); });
    Object.keys(slides).forEach(function (k) { slides[k].classList.toggle("act", k === row.dataset.slug); });
    pv.classList.add("on");
  }
  function deactivate() {
    rows.forEach(function (r) { r.classList.remove("hovering"); });
    pv.classList.remove("on");
  }

  if (!canHover) return;

  /* damped follow — same lerp feel as the site's trailing cursor ring */
  var targetY = window.innerHeight / 2, curY = targetY, running = false;
  function loop() {
    curY += (targetY - curY) * (reduced ? 1 : 0.12);
    var h = pv.offsetHeight;
    var y = Math.min(Math.max(curY - h / 2, 10), window.innerHeight - h - 10);
    pv.style.top = y + "px";
    if (Math.abs(targetY - curY) > 0.4) { requestAnimationFrame(loop); }
    else { running = false; }
  }
  function kick() { if (!running) { running = true; requestAnimationFrame(loop); } }

  /* Trigger is the project title (.nm) only — hovering the
     description or links must not cover the text being read.
     Leaving a title defers the hide by one frame so moving
     directly to the next title keeps the card up and crossfades. */
  var pendingHide = 0;
  rows.forEach(function (row) {
    var nm = row.querySelector(".nm");
    if (!nm) return;
    nm.addEventListener("mouseenter", function (e) {
      if (pendingHide) { cancelAnimationFrame(pendingHide); pendingHide = 0; }
      targetY = e.clientY; activate(row); kick();
    });
    nm.addEventListener("mousemove", function (e) {
      targetY = e.clientY; kick();
    });
    nm.addEventListener("mouseleave", function () {
      if (pendingHide) cancelAnimationFrame(pendingHide);
      pendingHide = requestAnimationFrame(function () {
        pendingHide = 0; deactivate();
      });
    });
  });
})();
