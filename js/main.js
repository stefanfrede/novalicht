$(function() {
  switch ($("body").data("pagename")) {
    case "home":
      $.vegas({
        src:'/img/home01.jpg',
        fade:2000
      });
      break;
    case "gallery":
      $.vegas('slideshow', {
        backgrounds:[
          { src:'/img/gallery01.jpg', fade:2000 },
          { src:'/img/gallery02.jpg', fade:2000 },
          { src:'/img/gallery03.jpg', fade:2000 },
          { src:'/img/gallery04.jpg', fade:2000 },
          { src:'/img/gallery05.jpg', fade:2000 },
          { src:'/img/gallery06.jpg', fade:2000 }
        ],
        walk:function(step) {
          $('#js-slides li').css("color", "#ffffff");
          $('[data-slide="'+step+'"]').css("color", "#ffffcc");
        }
      })('overlay');
      $( "#js-slides li" ).click(function() {
        $.vegas('jump', $(this).data("slide"));
      });
      $( "#js-previous" ).click(function() {
        $.vegas('previous');
      });
      $( "#js-next" ).click(function() {
        $.vegas('next');
      });
      break;
    case "showroom":
      $.vegas('slideshow', {
        backgrounds:[
          { src:'/img/showroom01.jpg', fade:2000 },
          { src:'/img/showroom02.jpg', fade:2000 },
          { src:'/img/showroom03.jpg', fade:2000 },
          { src:'/img/showroom04.jpg', fade:2000 },
          { src:'/img/showroom05.jpg', fade:2000 },
          { src:'/img/showroom06.jpg', fade:2000 }
        ],
        walk:function(step) {
          $('#js-slides li').css("color", "#ffffff");
          $('[data-slide="'+step+'"]').css("color", "#ffffcc");
        }
      })('overlay');
      $( "#js-slides li" ).click(function() {
        $.vegas('jump', $(this).data("slide"));
      });
      $( "#js-previous" ).click(function() {
        $.vegas('previous');
      });
      $( "#js-next" ).click(function() {
        $.vegas('next');
      });
      break;
    case "contact":
      $.vegas({
        src:'/img/contact01.jpg',
        fade:2000
      });
      setTimeout($('.contact-box').equalHeights(), 200);
      break;
    default:
      $.vegas({
        src:'/img/default01.jpg',
        fade:2000
      });
      break;
  }
});
