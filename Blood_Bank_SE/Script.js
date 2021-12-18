$( document ).ready(function() {
    var w = window.innerWidth;

    if(w > 767){
        $('#menu-jk').scrollToFixed();
    }else{
        $('#menu-jk').scrollToFixed();
    }
    const galleeryLightbox = GLightbox({
        selector: '.galleery-lightbox'
      });
})
$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#table tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });

  // $("p").click(function(event) {
  //        alert("Thank you for subscribing!");
  //        $("p").css("color","purple");
  // });
  $(".newsb").click(function(event) {
    alert("Thank you for subscribing!");
});
// alert("Welcome");