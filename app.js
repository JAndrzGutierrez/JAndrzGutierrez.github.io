$(() => {
 
    const $navbutton = $(".navbutton");
   
  
    $navbutton.hover(
      function () {
        $(this).css("cursor", "pointer");
      }
    );
  });