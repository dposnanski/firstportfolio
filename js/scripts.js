var marker;

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: {lat: 45.522152, lng: 9.593093}
  });

  marker = new google.maps.Marker({
    map: map,
    draggable: false,
    title:"Somewhere Here",
    animation: google.maps.Animation.DROP,
    position: {lat: 45.522154, lng: 9.593090}
  });
  marker.addListener('click', toggleBounce);
}

function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}

// Facebook
(function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8&appId=1818132841733925";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

$(document).ready(function () {
  //Textarea border
  $(".message").css("background", "#F2F2F2");
      
  // Smooth scrolling
  var $root = $('html, body');
  $('.navbar-nav a').click(function () {
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
    });
  
  //Tooltips
  $(function () {
    $("#course").tooltip();
  });
  
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  
  //Button
  $("#button").on("click", function () {
    var validateData = function (id) {
      var field = $("#" + id).val();
      if (field === "") {
        $("#" + id).css("border", "1px solid #0DD6C7");
        $("#visible-" + id).html("This field needs to be completed").show();
        return false;
      } else {
        console.log(id + ": " + field);
        $("#visible-" + id).hide();
        return true;
      }
    };

    var name = validateData("name");
    var email = validateData("email");
    var message = validateData("message");
    var phone = $(".phone").val();
    if (!name || !email || !message) {
      $("#phone").css("border", "1px solid #CCC");
    } else {
      $(".message").hide();
      $(".email").hide();
      $(".phone").hide();
      $(".name").hide();
      $("#char-count").hide();
      $("#visible-message").html("Great! Thanks for sending me a message, I'll get back to you soon :-)").show();
    }
    return false;
  });
  
  //Character Count
  $(".message").on("keyup", function () {
    var charCount = $(".message").val().length;
    $("#char-count").html("You have typed " + charCount + " characters.");
    if (charCount > 50) {
      $("#char-count").css("color", "red");
    } else {
      $("#char-count").css("color", "#000");
    }
    console.log(charCount);
    });
  
  //Work
  var i = 0;
  while (works[i]) {
    $("#projects").append("\
      <div class='col-sm-6 col-lg-3 projects'>\
        <a href='" + works[i].web + "' class='work-img'>\
          <img class='img-responsive' src='" + works[i].pic + "' alt='" + works[i].alt + "'>\
          <span class='info'>\
            <h3 class='proj-title'>" + works[i].title + "</h3>\
            <p>" + works[i].description + "</p>\
          <span>\
        </a>\
      </div>\
    ");
    var images = $("#projects img");
    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
    i++;
  }
  $(".work-img").mouseenter(function() {
    $(".info", this).show();
  }).mouseleave(function() {
    $(".info", this).hide(); 
  });
    
  /*   
  //Work
  for(var i = 0; i < projectTitle.length; ++i ) {
    $("#projects").append("\
      <div class='col-sm-6 col-lg-3 projects'>\
        <h3>" + projectTitle[i] +"</h3>\
        <p>" + projectDescription[i] +"</p>\
        <img class='img-responsive' src='" + works[i] + "' alt='" + altText[i] + "'>\
      </div>\
    ");
    var images = $("#projects img");
    if (i%2 === 0) {
      $(images[i]).css("border", "2px solid DodgerBlue");
    } else {
      $(images[i]).css("border", "2px solid salmon");
    };
  };
  */
  
});