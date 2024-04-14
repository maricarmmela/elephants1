function handle() {
    alert('Форма отправлена!');
    let inputs = document.querySelectorAll("input");
    let input_values = [];
    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }
    console.log(input_values)
}





let condition = true;
let start = 0;
let end = 0;
function forward() {
  anime({
    targets: ".menu-small",
    translateX: ["100%", "0"],
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  anime({
    targets: '.menu_small_icon',
    rotate: 90,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
});
anime({
    targets: '.stick',
    rotate: 180,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
});
  condition = false;
}
function backward() {
  anime({
    targets: ".menu-small",
    translateX: ["0", "100%"],
    easing: "easeInOutQuad",
    direction: "alternate",
    duration: 1000,
    loop: false,
  });
  anime({
    targets: '.menu_small_icon',
    rotate: 0,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
});
anime({
    targets: '.stick',
    rotate: 0,
    easing: 'easeInOutQuad',
    direction: 'alternate',
    duration: 1000,
    loop: false
});
  condition = true;
}
$(".menu_small_icon").click(function () {
  if (condition) {
    forward();
  } else {
    backward();
  }
});
$(".container").on("touchstart", function (event) {
    start = event.originalEvent.touches[0].pageX;
  });
$(".container").on("touchend", function (event) {
    end = event.originalEvent.changedTouches[0].pageX;
    if (end - start >= 100 && condition) {
        forward();
    }
    else if (start - end >= 100 && !condition) {
        backward();
    }
  });

  $(document).ready(function () {
    $('.slider').bxSlider({
        pagerCustom: '.slider-nav',
        infiniteLoop: false,
        hideControlOnEnd: true,
    });
});

$('html').on('mousemove', function (e) {
  let bubble = $('<div class="bubble"></div>');
  bubble.css({'left': e.clientX - 5, 'top': e.clientY - 5});
  $('.bubble').fadeOut(1000, "linear");
  $('body').append(bubble);
  let timer = setInterval(function () {
      bubble.remove()
  }, 1000);
});

