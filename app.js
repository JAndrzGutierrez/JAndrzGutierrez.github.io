$(() => {
  // Navigation Bar buttons
  const $navbutton = $(".navbutton");

  $navbutton.hover(function () {
    $(this).css("cursor", "pointer");
  });

  // $navbutton.on("click", function () {
  //   window.open("");
  // });
// Bars Menu
  const $faFabars = $(".fa-bars");

  $faFabars.on("click", function () {
    window.open("");
  });


});
