$(() => {
  // Navigation Bar
  const $navbutton = $(".navbutton");

  $navbutton.hover(function () {
    $(this).css("cursor", "pointer");
  });

  $navbutton.on("click", function () {
    window.open("https://www.youtube.com/watch?v=nhPaWIeULKk");
  });

  const $faFabars = $(".fa-bars");

  $faFabars.on("click", function () {
    window.open("https://www.youtube.com/watch?v=vX9msKu75qs");
  });
});
