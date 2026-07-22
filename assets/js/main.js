document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.querySelector(".mobile-nav");
  var closeBtn = document.querySelector(".mobile-nav-close");

  function openNav() {
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeNav() {
    drawer.classList.remove("open");
    document.body.style.overflow = "";
  }

  if (toggle && drawer) {
    toggle.addEventListener("click", openNav);
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", closeNav);
  }
  if (drawer) {
    drawer.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", closeNav);
    });
  }

  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = new FormData(contactForm);
      var name = data.get("name") || "";
      var company = data.get("company") || "";
      var email = data.get("email") || "";
      var tel = data.get("tel") || "";
      var type = data.get("type") || "";
      var message = data.get("message") || "";
      var body =
        "お名前：" + name + "\n" +
        "会社名：" + company + "\n" +
        "メールアドレス：" + email + "\n" +
        "電話番号：" + tel + "\n" +
        "お問い合わせ種別：" + type + "\n\n" +
        "内容：\n" + message;
      var subject = "【WEBサイトより】お問い合わせ（" + type + "）";
      var mailto = "mailto:e_hanno@yahoo.co.jp" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      window.location.href = mailto;
    });
  }

  var header = document.querySelector(".site-header");
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 8) {
        header.style.boxShadow = "0 4px 20px rgba(15,27,51,0.08)";
      } else {
        header.style.boxShadow = "none";
      }
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
