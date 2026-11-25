(function () {
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("mainNav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
})();

/* Click-to-load live demo embeds (Zoning Studio). Nothing is fetched
   until a Play button is clicked; Close fully unloads the iframe. */
(function () {
  var DEMO_URL = "https://husseinbouik.github.io/zoning-studio/";
  var stages = document.querySelectorAll("[data-demo-stage]");
  Array.prototype.forEach.call(stages, function (stage) {
    var playBtn = stage.querySelector("[data-demo-play]");
    if (!playBtn) return;
    var iframe = null;
    var closeBtn = null;

    function activate() {
      if (iframe) return;
      iframe = document.createElement("iframe");
      iframe.src = DEMO_URL;
      iframe.title = "Zoning Studio — interactive 3D partition configurator (live demo)";
      iframe.setAttribute("allow", "fullscreen");
      iframe.allowFullscreen = true;
      iframe.addEventListener("load", function () {
        stage.classList.remove("is-loading");
      });
      closeBtn = document.createElement("button");
      closeBtn.type = "button";
      closeBtn.className = "demo-close";
      closeBtn.textContent = "✕ Close demo";
      closeBtn.setAttribute("aria-label", "Close the live demo and restore the preview image");
      closeBtn.addEventListener("click", deactivate);
      stage.classList.add("is-live", "is-loading");
      stage.appendChild(iframe);
      stage.appendChild(closeBtn);
      playBtn.hidden = true;
      closeBtn.focus();
    }

    function deactivate() {
      if (iframe) { iframe.remove(); iframe = null; }
      if (closeBtn) { closeBtn.remove(); closeBtn = null; }
      stage.classList.remove("is-live", "is-loading");
      playBtn.hidden = false;
      playBtn.focus();
    }

    playBtn.addEventListener("click", activate);
  });
})();
