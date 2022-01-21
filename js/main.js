const defaultSelect = () => {
  const element = document.querySelector(".currency");
  const choices = new Choices(element, {
    searchEnabled: false,
    placeholder: false,
    itemSelectText: "",
  });
};
defaultSelect();
$(".products__slider").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  adaptiveHeight: true,
  variableWidth: true,
  prevArrow:
    '<button type="button" class="slick-prev"><i class="icon-left"></i></button>',
  nextArrow:
    '<button type="button" class="slick-next"><i class="icon-right"></i></button>',
});
$(function () {
  $(".products__item-rateyo").rateYo({
    normalFill: "#ffffff",
    ratedFill: "#FFC600",
    readOnly: true,
    rating: 4.5,
  });
});

//timer
document.addEventListener("DOMContentLoaded", () => {
  const newYear = new Date("Jan 1 2023 00:00:00");

  const daysVal = document.querySelector(".time-count__days .time-count__val");
  const hoursVal = document.querySelector(
    ".time-count__hours .time-count__val"
  );
  const minutesVal = document.querySelector(
    ".time-count__minutes .time-count__val"
  );
  const secondsVal = document.querySelector(
    ".time-count__seconds .time-count__val"
  );
  const daysText = document.querySelector(
    ".time-count__days .time-count__text"
  );
  const hoursText = document.querySelector(
    ".time-count__hours .time-count__text"
  );
  const minutesText = document.querySelector(
    ".time-count__minutes .time-count__text"
  );
  const secondsText = document.querySelector(
    ".time-count__seconds .time-count__text"
  );
  function declOfNum(number, titles) {
    let cases = [2, 0, 1, 1, 1, 2];
    return titles[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : cases[number % 10 < 5 ? number % 10 : 5]
    ];
  }

  const timeCount = () => {
    let now = new Date();
    let leftUntil = newYear - now;

    let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
    let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(leftUntil / 1000 / 60) % 60;
    let seconds = Math.floor(leftUntil / 1000) % 60;

    daysVal.textContent = days;
    hoursVal.textContent = hours;
    minutesVal.textContent = minutes;
    secondsVal.textContent = seconds;
    daysText.textContent = declOfNum(days, ["день", "дня", "дней"]);
    hoursText.textContent = declOfNum(hours, ["час", "часа", "часов"]);
    minutesText.textContent = declOfNum(minutes, ["минута", "минуты", "минут"]);
    secondsText.textContent = declOfNum(seconds, [
      "секунда",
      "секунды",
      "секунд",
    ]);
  };

  timeCount();
  setInterval(timeCount, 1000);
});
//end timer
//tabs
$("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
  $(this)
    .addClass("catalog__tab_active")
    .siblings()
    .removeClass("catalog__tab_active")
    .closest("div.container")
    .find("div.catalog__content")
    .removeClass("catalog__content_active")
    .eq($(this).index())
    .addClass("catalog__content_active");
});
