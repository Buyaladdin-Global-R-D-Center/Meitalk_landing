document.addEventListener("DOMContentLoaded", function () {
  // 스크롤 라이브러리 초기화
  AOS.init();

  // 카운트다운
  counter();

  // 로드 시 상단 애니메이션
  $(".topfaderight").animate({ opacity: "1", "margin-left": "0px" }, 1500);
  $(".topfadetop").animate({ opacity: "1", "margin-left": "0px" }, 1000);
});

// 카운트 다운
function counter() {
  var dday = new Date("Mar 02,2023,17:30:00").getTime(); //디데이 시간 설정

  const c_days = document.getElementById("days"),
    c_hours = document.getElementById("hours"),
    c_minutes = document.getElementById("minutes"),
    c_seconds = document.getElementById("seconds");

  x = setInterval(function () {
    var now = new Date(); //현재 날짜 가져오기
    var tz = now.getTime() + now.getTimezoneOffset() * 60000 + 9 * 3600000;
    now.setTime(tz);

    var distance = dday - now;
    var d = Math.floor(distance / (1000 * 60 * 60 * 24));
    var h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var s = Math.floor((distance % (1000 * 60)) / 1000);

    if (s < 10) {
      s = "0" + s;
    }
    if (distance < 0) {
      // 카운트 다운 종료 후 처리
      clearInterval(x);
      c_days.innerText = 0;
      c_hours.innerText = 0;
      c_minutes.innerText = 0;
      c_seconds.innerText = 0;

      $("#golink").addClass("end");
    } else {
      //카운트다운
      c_days.innerHTML = d;
      c_hours.innerHTML = h;
      c_minutes.innerHTML = m;
      c_seconds.innerHTML = s;
    }
  }, 0);
}

// 스크롤 상단 애니메이션
$(window).scroll(function () {
  var height = $(document).scrollTop();

  if (height === 0) {
    $(".topfaderight").css({
      opacity: "0",
      "margin-left": "-100px",
      transitionDuration: "3000",
      transitionTimingFunction: "ease",
    });
    $(".topfaderight").animate(
      { opacity: "1", "margin-left": "0px", transitionTimingFunction: "ease" },
      1500
    );

    $(".topfadetop").css({
      opacity: "0",
      "margin-left": "-100px",
      transitionDuration: "3000",
      transitionTimingFunction: "ease",
    });
    $(".topfadetop").animate(
      { opacity: "1", "margin-left": "0px", transitionTimingFunction: "ease" },
      1500
    );
  }
});

function togolink() {
  if ($("#golink").hasClass("end")) {
    window.open("https://meitalktv.com/");
  } else {
    $(".pop_opening, .pop_opening .bg").css({ display: "block" });
  }
}

function tosnslink(target) {
  // if ($("#golink").hasClass("end")) {
  if (target === "facebook") {
    window.open("https://www.facebook.com/meitalkTV");
    return false;
    ``;
  } else if (target === "youtube") {
    window.open("https://www.youtube.com/");
    return false;
  } else if (target === "instagram") {
    window.open("https://www.instagram.com/meitalktv/");
    return false;
  } else if (target === "twitter") {
    window.open("https://twitter.com/MeiTalkTV");
    return false;
  } else if (target === "tme") {
    window.open("https://t.me/meitalk");
    return false;
  } else if (target === "linkedin") {
    window.open("https://www.linkedin.com/company/meitalk/");
    return false;
  }
  // } else {
  //   $(".pop_opening, .pop_opening .bg").css({ display: "block" });
  // }
}

function popwrap_01_layer_open(el) {
  var temp = $("#" + el);
  var bg = temp.prev().hasClass("bg"); //dimmed 레이어를 감지하기 위한 boolean 변수

  if (bg) {
    $(".popwrap_01").fadeIn(); //'bg' 클래스가 존재하면 레이어가 나타나고 배경은 dimmed 된다.
  } else {
    temp.fadeIn();
  }

  // 화면의 중앙에 레이어를 띄운다.
  if (temp.outerHeight() < $(document).height())
    temp.css("margin-top", "-" + temp.outerHeight() / 2 + "px");
  else temp.css("top", "0px");
  if (temp.outerWidth() < $(document).width())
    temp.css("margin-left", "-" + temp.outerWidth() / 2 + "px");
  else temp.css("left", "0px");

  temp.find("a.cbtn").click(function (e) {
    if (bg) {
      $(".popwrap_01").fadeOut(); //'bg' 클래스가 존재하면 레이어를 사라지게 한다.
    } else {
      temp.fadeOut();
    }
    e.preventDefault();
  });
}
