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
  let projectDescription = null;
  let projectImg = null;
  let projectTech = null;

  function showInfo(project) {

    switch (project) {
      case 'p1': projectTitle = 'Battleships';
        projectTech = '<strong><em>CSS, HTML, JavaScript, jQuery</em></strong>';
        projectImg = '/images/battle.jpg';
        projectDescription = 'Tasked with crafting a JavaScript game for our first WDI project, I chose to recreate the classic naval strategy board game, Battleships. The user must battle against the computer in a race to sink each others fleet!';
        break;
      case 'p2': projectTitle = 'Meet in the Middle';
        projectTech = '<strong><em>Ajax, BCrypt, CSS, Express, Gulp, JavaScript, jQuery, Mongo, Mongoose, Node.js</em></strong>';
        projectImg = '/images/middle.jpg';
        projectDescription = 'In this collaborative project, we built a fully authenticated app using Express and MongoDB on the back-end with jQuery on the front-end. Users can find a range of venues in a location central to them and their friends. This application integrated the Google Maps and Google Places APIs in order to pull geolocations from users inputs and retrieve relevant venues to suggest to the user.';
        break;
      case 'p3': projectTitle = 'iTrack';
        projectTech = '<strong><em>AngularJS, Bcrypt, Bower, Express, Gulp, JavaScript, HTML5, MongoDB, Mongoose, Node.js, SCSS, Skeleton</em></strong>';
        projectImg = '/images/itrack.jpg';
        projectDescription = 'In this group project, we built a MEAN stack app capable of tracking a users diet based on their input of data to the site. By pulling information from the USDA\'s Nutrition API, users could track protein, calories, fat and carbohydrate intake through various graphs and meals could be stored in the database for future reference.';
        break;
      case 'p4': projectTitle = 'myGarden';
        projectTech = '<strong><em>AngularJS, Bcrypt, Bootstrap, Bower, Gulp, HTML5, JavaScript, PostgreSQL, Ruby, Ruby on Rails, SCSS</em></strong>';
        projectImg = '/images/myGarden.jpg';
        projectDescription = 'For my final project at WDI I used my previous career experience as inspiration and built a full stack  CRUD app for the garden design community. Users can upload a garden design project including images, descriptions, plant and material lists and even use an interactive grid to create and share their new design. I consumed the Amazon product search API on the front-end in order to source accurate plant and material items for users projects. This time I used Ruby-on-Rails and PostgreSQL on the back-end with AngularJS and JavaScript on the front-end.';
        break;
    }
    
    $('.project').css('visibility', 'hidden');
    $('span').css('visibility', 'hidden');
    $('#projectsWindow').prepend(`<div class="infoWindow">
    <button id="close">X</button> <h2 id="pHeading">${projectTitle}</h2> <p>${projectTech}</p> <img src="${projectImg}" alt="project image"/> <p>${projectDescription}</p> </div>`);
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
