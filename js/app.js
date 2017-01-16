$(function() {
  $('a[href*=#]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
      if ($target) {
        var targetOffset = $target.offset().top;
        $(this).click(function() {
          $('#nav li a').removeClass('active');
          $(this).addClass('active');
          $('html, body').animate({scrollTop: targetOffset}, 1000);
          return false;
        });
      }
    }
  });
  $('.project').mouseover(function() {
    $(this).children().css('visibility', 'visible');
  }).mouseout(function() {
    $(this).children().css('visibility', 'hidden');
  });

  let projectTitle = null;

  function showInfo(project) {

    switch (project) {
      case 'p1': projectTitle = 'Battleships';
        break;
      case 'p2': projectTitle = 'Meet in the Middle';
        break;
      case 'p3': projectTitle = 'iTrack';
        break;
      case 'p4': projectTitle = 'myGarden';
        break;
    }

    $('.project').css('visibility', 'hidden');
    $('span').css('visibility', 'hidden');
    $('#projectsWindow').prepend(`<div class="infoWindow">
    <button id="close">X</button> <h2 id="pHeading">${projectTitle}</h2> </div>`);


  }




  $( '#p1Info' ).click(function() {
    showInfo('p1');
  });

  $( '#p2Info' ).click(function() {
    showInfo('p2');
  });

  $( '#p3Info' ).click(function() {
    showInfo('p3');
  });

  $( '#p4Info' ).click(function() {
    showInfo('p4');
  });


  $( '#portfolio' ).on( 'click', 'button', function() {
    $( '.infoWindow' ).remove();
    $('.project').css('visibility', 'visible');
  });


});
