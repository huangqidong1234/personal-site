/* 黄奇东 · 个人品牌网页
   仅做两件事：滚动淡入；无其他依赖 */

(function () {
  "use strict";

  // 给各区块加淡入效果
  var targets = document.querySelectorAll(
    ".section-label, .section h2, .about-grid, .timeline-item, " +
    ".case-numbers, .case-note, .case-detail, .skill-card, " +
    ".collab-item, .closing"
  );

  targets.forEach(function (el) {
    el.classList.add("reveal");
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) {
      el.classList.add("is-visible");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
