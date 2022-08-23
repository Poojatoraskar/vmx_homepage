$('.owl_country').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


$('.owl-an-opreting-system').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
})

$('.owl-opreting-system').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        800:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})

$('.your_server-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        400:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
})


$('.plan-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})






// Show the first tab and hide the rest
$('#tabs-nav-one li:first-child').addClass('active');
$('.tab-content-one').hide();
$('.tab-content-one:first').show();

// Click function
$('#tabs-nav-one li').click(function(){
  $('#tabs-nav-one li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content-one').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



// Show the first tab and hide the rest
$('#tabs-nav-two li:first-child').addClass('active');
$('.tab-content-two').hide();
$('.tab-content-two:first').show();

// Click function
$('#tabs-nav-two li').click(function(){
  $('#tabs-nav-two li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content-two').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



// Show the first tab and hide the rest
$('#tabs-nav-three li:first-child').addClass('active');
$('.tab-content-three').hide();
$('.tab-content-three:first').show();

// Click function
$('#tabs-nav-three li').click(function(){
  $('#tabs-nav-three li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content-three').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});




  

// responsive navbar

function toggleNavBar(){

    console.log("hii")
    var headerRight =  document.getElementById('headerRightformobile');

    console.log(headerRight.style.display,'headerRight.style.display')

    headerRight.classList.toggle("header-for-mobile");
}



(function($) { 
    $(function() { 
  
      //  open and close nav 
      $('#navbar-toggle').click(function() {
        $('nav ul').slideToggle();
      });
  
  
      // Hamburger toggle
      $('#navbar-toggle').on('click', function() {
        this.classList.toggle('active');
      });
  
  
      // If a link has a dropdown, add sub menu toggle.
      $('nav ul li a:not(:only-child)').click(function(e) {
        $(this).siblings('.navbar-dropdown').slideToggle("slow");
  
        // Close dropdown when select another dropdown
        $('.navbar-dropdown').not($(this).siblings()).hide("slow");
        e.stopPropagation();
      });
  
  
      // Click outside the dropdown will remove the dropdown class
      $('html').click(function() {
        $('.navbar-dropdown').hide();
      });
    }); 
  })(jQuery); 