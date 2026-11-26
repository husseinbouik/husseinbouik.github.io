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

/* ---------- Scroll motion — progress bar · reveals · counters · timeline ----------
   Ported from the verified motion demo (ideas 03/04/05 + the frame bar).
   Progressive enhancement: with JS disabled — or under
   prefers-reduced-motion — nothing here runs and the page is exactly
   the static design (final values already in the markup, timeline
   undimmed, no bar). All animation is transform/opacity only. */
(function () {
  "use strict";
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  /* ---------- Scroll-progress bar (JS-created) ---------- */
  var bar = document.createElement("div");
  bar.id = "pbar";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  /* ---------- Experience timeline: fill + lit steps ---------- */
  var proc = document.querySelector(".process");
  var fill = null;
  var steps = [];
  if (proc) {
    fill = document.createElement("div");
    fill.className = "process-fill";
    fill.setAttribute("aria-hidden", "true");
    proc.insertBefore(fill, proc.firstChild);
    proc.classList.add("tl-on");
    steps = Array.prototype.slice.call(proc.querySelectorAll(".step"));
  }

  /* ---------- Hero parallax (idea 01): circle + portrait drift at
     different rates while the hero scrolls out. Uses the independent
     CSS `translate` property so it composes with the circle's CSS
     breathing (a `transform` animation) instead of fighting it.
     Progress is clamped to the hero's own height, the drift is 0 at
     the top of the page, and updates stop once the hero has left the
     viewport — nothing beyond the hero is affected. ---------- */
  var hero = document.querySelector(".hero");
  var heroCircle = hero ? hero.querySelector(".circle") : null;
  var heroPortrait = hero ? hero.querySelector(".portrait") : null;

  /* One rAF loop drives the bar, the hero parallax and the timeline fill. */
  var ticking = false;
  function frame() {
    ticking = false;
    var vh = window.innerHeight;
    var doc = document.documentElement;
    var max = doc.scrollHeight - vh;
    bar.style.transform = "scaleX(" + (max > 0 ? window.scrollY / max : 0) + ")";
    if (hero && heroCircle && heroPortrait) {
      var hr = hero.getBoundingClientRect();
      if (hr.bottom > 0 && hr.top < vh) {
        var hp = Math.max(0, Math.min(1, -hr.top / hr.height));
        heroCircle.style.translate = "0 " + (hp * 34).toFixed(1) + "px";
        heroPortrait.style.translate = "0 " + (hp * -16).toFixed(1) + "px";
      }
    }
    if (proc && fill) {
      var r = proc.getBoundingClientRect();
      var p = (vh * 0.72 - r.top) / r.height;
      p = Math.max(0, Math.min(1, p));
      fill.style.transform = "scaleY(" + p + ")";
      var fillPx = p * r.height;
      steps.forEach(function (s) {
        s.classList.toggle("lit", s.offsetTop + 8 <= fillPx);
      });
    }
  }
  function kick() { if (!ticking) { ticking = true; requestAnimationFrame(frame); } }
  window.addEventListener("scroll", kick, { passive: true });
  window.addEventListener("resize", kick);
  frame();

  /* ---------- Scroll reveal (IntersectionObserver, staggered) ---------- */
  var TARGETS = ".sec-head, .work, .uvp, .engine, .more h3, .more .row, " +
    ".impact-head, .irow, .pills, .skill, .ghost-title, .step, .ach, " +
    ".erow, .about-stats, .about-body, .cta h2, .cta p, .cta-btns";
  var targets = Array.prototype.slice.call(document.querySelectorAll(TARGETS));
  if (targets.length) {
    document.body.classList.add("motion-on");
    /* Stagger: delay grows per sibling within the same parent. */
    var byParent = new Map();
    targets.forEach(function (el) {
      el.classList.add("rv");
      var i = byParent.get(el.parentNode) || 0;
      byParent.set(el.parentNode, i + 1);
      el.style.setProperty("--d", Math.min(i * 0.07, 0.35).toFixed(2) + "s");
    });
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (el) { el.classList.add("in"); });
    } else {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.15 });
      targets.forEach(function (el) { io.observe(el); });
    }
  }

  /* ---------- Count-up numbers (run once, land on the exact value) ---------- */
  function animateTextInt(node, dur) {
    var orig = node.nodeValue;
    var m = orig.match(/\d+/);
    if (!m) return;
    var target = parseInt(m[0], 10);
    if (target <= 1) return; /* nothing to count — markup already final */
    var pre = orig.slice(0, m.index);
    var post = orig.slice(m.index + m[0].length);
    var t0 = null;
    function step(t) {
      if (!t0) t0 = t;
      var k = Math.min(1, (t - t0) / dur);
      var e = 1 - Math.pow(1 - k, 3);
      node.nodeValue = pre + Math.round(target * e) + post;
      if (k < 1) requestAnimationFrame(step);
      else node.nodeValue = orig; /* land on the exact original text */
    }
    requestAnimationFrame(step);
  }
  function animateIntsIn(el, dur) {
    if (!el) return;
    Array.prototype.forEach.call(el.childNodes, function (n) {
      if (n.nodeType === 3 && /\d/.test(n.nodeValue)) animateTextInt(n, dur);
    });
  }
  function runCounters(host) {
    if (host.classList.contains("astat")) {
      animateIntsIn(host.querySelector(".anum"), 1200);
    } else if (host.classList.contains("stat")) {
      var v = host.querySelector(".v");
      animateIntsIn(v, 1200);
      /* stat 04: the "~400 Records" metric lives in the key line */
      if (host.querySelector(".k") && /400/.test(host.querySelector(".k").textContent)) {
        animateIntsIn(host.querySelector(".k"), 1400);
      }
    }
  }
  var counterHosts = [];
  document.querySelectorAll(".about-stats .astat").forEach(function (el) { counterHosts.push(el); });
  document.querySelectorAll(".stats .stat").forEach(function (el, i) {
    if (i === 0 || i === 3) counterHosts.push(el); /* 3+ Years · the export metric (stat 03's "3D" stays static) */
  });
  if (counterHosts.length) {
    if (!("IntersectionObserver" in window)) {
      /* markup already shows the final values — nothing to do */
    } else {
      var io2 = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { runCounters(e.target); io2.unobserve(e.target); }
        });
      }, { threshold: 0.4 });
      counterHosts.forEach(function (el) { io2.observe(el); });
    }
  }
})();
