/* Rasin's Lightweight HUD — minimal progressive enhancement.
   Only job: toggle the mobile navigation menu. Everything else works without JS. */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (!toggle || !nav) return;

  function setOpen(isOpen) {
    toggle.setAttribute("aria-expanded", String(isOpen));
    nav.classList.toggle("is-open", isOpen);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Close the menu after choosing a link (mobile).
  nav.addEventListener("click", function (event) {
    if (event.target.closest("a")) {
      setOpen(false);
    }
  });

  // Close on Escape and return focus to the toggle.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset the menu if the viewport grows past the mobile breakpoint.
  var mq = window.matchMedia("(min-width: 761px)");
  mq.addEventListener("change", function (event) {
    if (event.matches) {
      setOpen(false);
    }
  });
})();
