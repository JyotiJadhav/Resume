   // $().ready(function(){
   //      $('[rel="tooltip"]').tooltip();

   //  });

   //  function rotateCard(btn){
   //      var $card = $(btn).closest('.card-container');
   //      console.log($card);
   //      if($card.hasClass('hover')){
   //          $card.removeClass('hover');
   //      } else {
   //          $card.addClass('hover');
   //      }
   //  }
(function($) {

$('.page-scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

 $('.page-scroll').click(function(){
    $('a').removeClass("active");
    $(this).addClass("active");
});

 $(".card").click(function() {
  $(".card").toggleClass("flipped");
});


})(jQuery);


