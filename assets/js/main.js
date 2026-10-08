/* Brian Fleuren - portfolio: tabs, scroll reveals and drawing lightbox. */

(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------------------------------------------------------
     Tabs. The panel id doubles as the URL hash, so every tab can be
     linked to directly and the back button behaves as expected.
     --------------------------------------------------------------- */

  var tabs = Array.prototype.slice.call(document.querySelectorAll("[role=tab]"));
  var panels = Array.prototype.slice.call(document.querySelectorAll("[role=tabpanel]"));

  function panelFor(tab) {
    return document.getElementById(tab.getAttribute("aria-controls"));
  }

  function activate(tab, opts) {
    if (!tab) return;
    var options = opts || {};

    tabs.forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.setAttribute("tabindex", on ? "0" : "-1");
    });

    panels.forEach(function (p) {
      p.classList.toggle("is-active", p === panelFor(tab));
    });

    if (options.focus) tab.focus();

    if (!options.silent) {
      var hash = "#" + tab.dataset.route;
      if (window.location.hash !== hash) {
        history.pushState(null, "", hash);
      }
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    }

    // Panels start hidden, so anything inside was never measured. Re-run
    // the reveal pass for the panel that just became visible.
    revealPass();

    // The scheduler lives on the contact panel; only fetch Calendly once
    // someone actually goes there.
    if (tab.dataset.route === "contact") loadCalendly();
  }

  // Bring an in-panel section into view after a tab switch, e.g. the
  // "schedule a call" buttons that land on the scheduler.
  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    window.setTimeout(function () {
      el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }, 60);
  }

  function tabByRoute(route) {
    for (var i = 0; i < tabs.length; i++) {
      if (tabs[i].dataset.route === route) return tabs[i];
    }
    return null;
  }

  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () { activate(tab); });

    tab.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(tab);
      var next = null;
      if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
      else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") next = tabs[0];
      else if (e.key === "End") next = tabs[tabs.length - 1];
      if (next) { e.preventDefault(); activate(next, { focus: true }); }
    });
  });

  // In-page links that point at a tab, e.g. the "get in touch" button.
  document.addEventListener("click", function (e) {
    var link = e.target.closest("[data-goto]");
    if (!link) return;
    var target = tabByRoute(link.dataset.goto);
    if (!target) return;
    e.preventDefault();
    activate(target);
    if (link.dataset.scroll) scrollToSection(link.dataset.scroll);
  });

  window.addEventListener("popstate", function () {
    // The project rail puts #p01-style hashes in the URL. Those are in-page
    // anchors, not routes — leave the current panel alone rather than
    // falling back to the first tab and yanking the reader to the top.
    var tab = tabByRoute(window.location.hash.replace("#", ""));
    if (tab) activate(tab, { silent: true });
  });

  /* ---------------------------------------------------------------
     Reveal on scroll
     --------------------------------------------------------------- */

  var observer = null;
  if (!reduceMotion && "IntersectionObserver" in window) {
    observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.06 });
  }

  function revealPass() {
    var items = document.querySelectorAll(".reveal:not(.is-in)");
    Array.prototype.forEach.call(items, function (el) {
      if (!observer) { el.classList.add("is-in"); return; }
      // Only observe what is inside the visible panel; hidden elements
      // have no box and would otherwise never fire.
      if (el.offsetParent === null) return;
      observer.observe(el);
    });
  }

  /* ---------------------------------------------------------------
     Lightbox for the drawings. Technical drawings are the point of
     this site, so they need to be readable at full size.
     --------------------------------------------------------------- */

  var box = document.querySelector(".lightbox");
  var boxImg = box.querySelector("img");
  var boxCap = box.querySelector(".lightbox__cap");
  var lastFocus = null;

  function openBox(img, caption) {
    lastFocus = document.activeElement;
    boxImg.src = img.currentSrc || img.src;
    boxImg.alt = img.alt;
    // The "click to enlarge" hint has done its job by this point.
    // Both languages, since the caption may have been swapped by i18n.js.
    boxCap.textContent = (caption || "")
      .replace(/\s*(Click to enlarge|Klik om te vergroten)\.?\s*$/i, "");
    box.classList.add("is-open");
    box.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    box.querySelector(".lightbox__close").focus();
  }

  function closeBox() {
    box.classList.remove("is-open");
    box.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    if (lastFocus) lastFocus.focus();
  }

  document.addEventListener("click", function (e) {
    var fig = e.target.closest(".fig--zoom");
    if (fig) {
      var img = fig.querySelector("img");
      var cap = fig.querySelector("figcaption");
      if (img) openBox(img, cap ? cap.textContent.trim() : "");
      return;
    }
    if (e.target.closest(".lightbox")) closeBox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && box.classList.contains("is-open")) closeBox();
  });

  /* Zoomable figures are interactive, so give them keyboard access. */
  Array.prototype.forEach.call(document.querySelectorAll(".fig--zoom"), function (fig) {
    var frame = fig.querySelector(".fig__frame");
    frame.setAttribute("tabindex", "0");
    frame.setAttribute("role", "button");
    var img = fig.querySelector("img");
    frame.setAttribute("aria-label", "Enlarge drawing: " + (img ? img.alt : ""));
    frame.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        var cap = fig.querySelector("figcaption");
        openBox(img, cap ? cap.textContent.trim() : "");
      }
    });
  });

  /* ---------------------------------------------------------------
     Software & tools disclosures. The panel animates open via a grid
     row, so there is no hidden attribute to toggle — the open state
     lives on the <li> and aria-expanded carries it to assistive tech.
     --------------------------------------------------------------- */

  Array.prototype.forEach.call(document.querySelectorAll(".skill__toggle"), function (btn) {
    btn.addEventListener("click", function () {
      var item = btn.closest(".skill");
      var open = item.classList.toggle("is-open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
      // Panels grow, so anything below may have just scrolled into view.
      revealPass();
    });
  });

  /* ---------------------------------------------------------------
     Calendly scheduler
     The scheduling link lives in one place: data-calendly on the frame.
     Calendly's script and iframe are only fetched the first time the
     contact tab opens, so the rest of the site never waits on them.
     --------------------------------------------------------------- */

  var calendlyStarted = false;

  function loadCalendly() {
    if (calendlyStarted) return;
    var frame = document.querySelector("[data-calendly]");
    if (!frame) return;
    calendlyStarted = true;

    var url = (frame.getAttribute("data-calendly") || "").trim();
    var direct = document.querySelector(".schedule__direct");

    function setState(state) {
      frame.classList.remove("is-loading", "is-loaded", "is-off");
      frame.classList.add("is-" + state);
    }

    // Placeholder still in place: show the email alternative instead of
    // pointing visitors at a Calendly page that does not exist. (When the
    // link is real but the embed fails, the direct link below stays.)
    if (!/^https:\/\/calendly\.com\/[^/\s]+/.test(url) || /JOUW-CALENDLY/i.test(url)) {
      setState("off");
      if (direct) direct.closest(".schedule__fallback").hidden = true;
      return;
    }

    if (direct) direct.href = url;
    setState("loading");

    // Brand colours apply on paid Calendly plans and are ignored otherwise.
    var themed = url + (url.indexOf("?") === -1 ? "?" : "&") +
      "background_color=f8f8f9&text_color=1c1f20&primary_color=416180";

    var widget = document.createElement("div");
    widget.className = "calendly-inline-widget";
    widget.setAttribute("data-url", themed);
    widget.setAttribute("data-resize", "true");
    frame.querySelector(".schedule__mount").appendChild(widget);

    // Calendly's iframe announces itself with postMessage events; the
    // first one means the calendar is on screen.
    window.addEventListener("message", function onMessage(e) {
      if (!/calendly\.com$/.test((e.origin || "").replace(/^https?:\/\//, "").split(":")[0])) return;
      if (e.data && typeof e.data.event === "string" && e.data.event.indexOf("calendly.") === 0) {
        setState("loaded");
        window.removeEventListener("message", onMessage);
      }
    });

    var script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.onerror = function () { setState("off"); };
    document.body.appendChild(script);

    // Blocked by an extension, offline, or Calendly down: fall back
    // rather than leaving a spinner up for ever.
    window.setTimeout(function () {
      if (frame.classList.contains("is-loading")) setState("off");
    }, 15000);
  }

  /* ---------------------------------------------------------------
     LinkedIn badge
     The wrapper reserves the iframe's footprint so the column does not
     jump when LinkedIn's async script lands. If it never lands — blocked,
     offline, or the profile vanity is still a placeholder — collapse the
     reserved space rather than leaving an empty box.
     --------------------------------------------------------------- */

  var badge = document.querySelector(".badge-base");
  if (badge) {
    window.setTimeout(function () {
      if (!badge.querySelector("iframe")) badge.style.minHeight = "0";
    }, 4000);
  }

  /* ---------------------------------------------------------------
     Boot
     --------------------------------------------------------------- */

  // #plan is a deep link straight to the scheduler on the contact tab,
  // so it can be shared on its own (e.g. in an email signature).
  var route = window.location.hash.replace("#", "");
  var initial = tabByRoute(route === "plan" ? "contact" : route) || tabs[0];
  activate(initial, { silent: true });
  if (route === "plan") scrollToSection("plan");

  document.getElementById("year").textContent = new Date().getFullYear();
})();
