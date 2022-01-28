$(() => {
  // Navigation Bar
  const $navbutton = $(".navbutton");

  $navbutton.hover(function () {
    $(this).css("cursor", "pointer");
  });

  // $navbutton.on("click", function() {
  //   window.open("https://www.youtube.com/watch?v=nhPaWIeULKk");
  // });

  $( ".navbutton" ).click(function() {
    $( "#about_section" ).slideDown( "slow", function() {
      // Animation complete.
    });
  });





});
