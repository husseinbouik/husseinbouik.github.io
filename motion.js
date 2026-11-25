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
