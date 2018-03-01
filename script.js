$(document).ready(function() {
  AOS.init({

    duration: 800,
    easing: 'ease-in-sine',
    disable: 'mobile'
  });

  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });


  setTimeout(function() {
    $('body').addClass('loaded');


    var options = {
      strings: ["Hello World;"],
      typeSpeed: 120,
      startDelay: 500,
      backDelay: 1000,
      backSpeed: 200,
      smartBackspace: true,
      showCursor: false,
      cursorChar: '|',
      // fadeOutClass: 'typed-fade-out'
      onComplete: (self) => {
        var typed2 = new Typed("#txt2", second)
        $(".navbar").fadeIn(1000).css("display", "flex")
      }
    }

    var second = {
      strings: ["I'm Irshad. ^1000", "A Developer. ^1000", "A Dreamer. ^1000", "A Programmer.", "I'm Irshad."],
      typeSpeed: 120,
      startDelay: 500,
      backDelay: 200,
      backSpeed: 200,
      smartBackspace: true,
      showCursor: true,
      cursorChar: '|',
      onComplete: (self) => {
        var typed3 = new Typed("#txt3", third)

      }
    }

    var third = {
      strings: ["Interactive front-end developer currently based in India. Focussed on creative Website designs."],
      typeSpeed: 10,
      backSpeed: 0,
      backDelay: 500,
      startDelay: 500,
      smartBackspace: false,
      showCursor: false,
      cursorChar: '|',

    }

    var typed = new Typed("#txt1", options);
  }, 500);


  $(".navbar-toggler").on("click", function(e) {
    e.preventDefault();
    $("button svg").toggleClass("fa-bars");
    $("button svg").toggleClass("fa-times");
  });

  $("[data-parent='#accordion']").on("click", function(e) {
    e.preventDefault();

    var active = $(this).attr("href");
    active = $(active);
    $(".collapse").each(function() {
      if (!$(this).is(active)) {
        $(this).collapse('hide');
      }
    });
  });



});



let emoji = ["😂🔫", "☕", "💻", "✋📱"];
let i = 0;
setInterval(function() {
  $("#madeWith").hide().html(emoji[i]).fadeIn(500);


  if (i === 3) {
    i = -1;

  }
  i++;

}, 2000);
