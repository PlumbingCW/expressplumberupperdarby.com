(function () {
  document.documentElement.className += ' js';
  var t = document.getElementById("mob-toggle"), d = document.getElementById("mob-drawer"),
      o = document.getElementById("mob-overlay"), c = document.getElementById("drawer-close");
  function openDrawer() {
    d.classList.add("open"); o.classList.add("visible");
    t.setAttribute("aria-expanded", "true"); t.setAttribute("aria-label", "Close navigation menu");
    d.setAttribute("aria-hidden", "false");
    document.documentElement.style.overflow = "hidden";
  }
  function closeDrawer() {
    d.classList.remove("open"); o.classList.remove("visible");
    t.setAttribute("aria-expanded", "false"); t.setAttribute("aria-label", "Open navigation menu");
    d.setAttribute("aria-hidden", "true");
    document.documentElement.style.overflow = "";
  }
  if (t && d && o) {
    t.addEventListener("click", function () {
      if (t.getAttribute("aria-expanded") === "true") { closeDrawer(); } else { openDrawer(); }
    });
    if (c) { c.addEventListener("click", closeDrawer); }
    o.addEventListener("click", closeDrawer);
    var links = d.querySelectorAll("a");
    for (var i = 0; i < links.length; i++) { links[i].addEventListener("click", closeDrawer); }
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); } });
    window.addEventListener("resize", function () { if (window.innerWidth > 768) { closeDrawer(); } });
  }
  var qs = document.querySelectorAll(".faq-q");
  for (var j = 0; j < qs.length; j++) {
    qs[j].addEventListener("click", function () {
      var item = this.parentNode, open = item.classList.contains("open");
      if (open) { item.classList.remove("open"); this.setAttribute("aria-expanded", "false"); }
      else { item.classList.add("open"); this.setAttribute("aria-expanded", "true"); }
    });
  }
})();
