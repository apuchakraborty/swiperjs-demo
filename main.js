var $container = $(".projects-content");
$container.isotope({
  filter: "*",
  animationOptions: {
    duration: 750,
    easing: "linear",
    queue: false
  }
});

$(".projects-filter button").click(function () {
  $(".projects-filter .current").removeClass("current");
  $(this).addClass("current");

  var selector = $(this).attr("data-filter");

  $container.isotope({
    filter: selector == "*" ? "*" : "." + selector,
    animationOptions: {
      duration: 750,
      easing: "linear",
      queue: false
    }
  });
  return false;
});
