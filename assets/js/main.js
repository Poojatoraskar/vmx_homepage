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


$('.owl_yos').owlCarousel({
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



function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }








  function openCity(evt, cityNamee) {
    var i, tabcontentt, tablinkss;
    tabcontentt = document.getElementsByClassName("tabcontentt");
    for (i = 0; i < tabcontentt.length; i++) {
      tabcontentt[i].style.display = "none";
    }
    tablinkss = document.getElementsByClassName("tablinkss");
    for (i = 0; i < tablinkss.length; i++) {
      tablinkss[i].className = tablinkss[i].className.replace(" active", "");
    }
    document.getElementById(cityNamee).style.display = "flex";
    evt.currentTarget.className += " active";
  }



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
            items:3,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:false
        }
    }
})




// Add active class to the current button (highlight it)
var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}


// responsive navbar

function toggleNavBar(){

    console.log("hii")
    var headerRight =  document.getElementById('headerRightformobile');

    console.log(headerRight.style.display,'headerRight.style.display')

    headerRight.classList.toggle("header-for-mobile");
}

AOS.init({
    offset: 300, 
    duration:2500,
  });