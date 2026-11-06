/* ==========================================================================
   RLHUD site script — deliberately small.
   Only handles things CSS/HTML can't: the mobile menu toggle and
   highlighting the current section in the navigation.
   ========================================================================== */
(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.getElementById("site-menu");

  /* ------------------------------------------------------------------
     1. Mobile navigation toggle
     ------------------------------------------------------------------ */
  function setMenu(open) {
    if (!header || !toggle) return;
    header.classList.toggle("menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  function menuIsOpen() {
    return header && header.classList.contains("menu-open");
  }

  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!menuIsOpen());
    });
  }

  // Close the menu with Escape.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && menuIsOpen()) {
      setMenu(false);
      if (toggle) toggle.focus();
    }
  });

  // Close the menu after choosing an in-page link.
  if (menu) {
    menu.addEventListener("click", function (event) {
      var link = event.target.closest("a");
      if (link && menuIsOpen()) setMenu(false);
    });
  }

  // Reset menu state when returning to the desktop layout.
  var mobileQuery = window.matchMedia("(min-width: 721px)");
  function onLayoutChange(event) {
    if (event.matches) setMenu(false);
  }
  if (mobileQuery.addEventListener) {
    mobileQuery.addEventListener("change", onLayoutChange);
  } else if (mobileQuery.addListener) {
    mobileQuery.addListener(onLayoutChange); // older Safari
  }

  /* ------------------------------------------------------------------
     2. Scrollspy — mark the section currently in view in the nav
     ------------------------------------------------------------------ */
  var navLinks = Array.prototype.slice.call(
    document.querySelectorAll('.site-nav a[href^="#"]')
  );

  var sections = navLinks
    .map(function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var visible = new Map(); // section id -> true while intersecting

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, true);
          } else {
            visible.delete(entry.target.id);
          }
        });

        // Prefer the first nav section that is on screen; fall back to Home.
        var currentId = "home";
        for (var i = 0; i < sections.length; i++) {
          if (visible.has(sections[i].id)) {
            currentId = sections[i].id;
            break;
          }
        }

        navLinks.forEach(function (link) {
          if (link.getAttribute("href") === "#" + currentId) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
