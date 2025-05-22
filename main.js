$(window).on("load", function () {
//preloader
  $(".preloader").fadeOut(600);


  //home section
    let slideIndex = $(".slide.active").index();
    const slideLen = $(".slide").length;

    function slideShow() {
        $(".slide").removeClass("active").eq(slideIndex).addClass("active");
        
        if (slideIndex === slideLen - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }

        setTimeout(slideShow, 5000);
    }

    slideShow();

  //audio
$(".fa-music").click(function(){
  if($(this).hasClass("pause")){
    $("#myAudio")[0].play();
   // console.log("play");
   
  }
  else{
    $("#myAudio")[0].pause();
     // console.log("pause");
  }
  $(this).toggleClass("pause");
})

})

// nav toggle
$(document).ready(function(){
  // Nav toggle
  $(".hamburger-btn").click(function(){
    $(".header .nav").slideToggle();
  });
  
  // Close menu when clicking menu items on mobile
  $(".header .nav a").click(function(){
    if($(window).width() < 768){
      $(".header .nav").slideToggle();
    }
  });
  
  // Fixed header on scroll
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $(".header").addClass("fixed");
    }
    else{
      $(".header").removeClass("fixed");
    }
  })

//scrollit
  $.scrollIt({
    topOffset: -50 
  });

    //people filter
    peopleFilter($(".filter-btn.active").attr("data-target"))
    $(".filter-btn").click(function(){
        if(!$(this).hasClass("active")){
            peopleFilter($(this).attr("data-target"))
        }
    })

    function peopleFilter(target){
        $(".filter-btn").removeClass("active");
        $(".filter-btn[data-target='"+target+"']").addClass("active");
        $(".people-item").hide();
        $(".people-item[data-category='"+target+"']").fadeIn();
       // console.log(target)
    }

    //gallery popup
    const wHeight = $(window).height();
    $(".gallery-popup .gp-img").css("max-height",wHeight + "px");
    
    let itemIndex = 0;
    const totalGalleryItems = $(".gallery-item").length;
    //console.log(totalGalleryItems)

    $(".gallery-item").click(function(){
        itemIndex = $(".gallery-item").index(this);

     //   console.log(itemIndex)
         //consoleil 0 kudi addayi varunnu

        //$(".gallery-popup").fadeIn();
        $(".gallery-popup").addClass("open");
        $(".gallery-popup .gp-img").hide();
       gpSlideShow();
    })
    $(".gp-controls .next").click(function(){
        if(itemIndex == totalGalleryItems-1){
            itemIndex = 0;
            }
            else{
                itemIndex++;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    
    $(".gp-controls .prev").click(function(){
        if(itemIndex === 0){
            itemIndex = totalGalleryItems-1;
            }
            else{
                itemIndex--;
        }
        $(".gallery-popup .gp-img").fadeOut(function(){
            gpSlideShow();
        })
    })
    

    function gpSlideShow(){
        const imgSrc = $(".gallery-item").eq(itemIndex).find("img").attr("data-large");
      //  console.log(imgSrc)
        $(".gallery-popup .gp-img").fadeIn().attr("src",imgSrc);
        $(".gp-counter").text((itemIndex+1) +"/"+ totalGalleryItems);
    }
    //close gallery
    $(".gp-close").click(function() {
        $(".gallery-popup").removeClass("open");
    })
    //hide popup when clicked outside
    $(".gallery-popup").click(function(event){
        if($(event.target).hasClass("open")){
            $(".gallery-popup").removeClass("open");
        }
    })
  })
  
//settings

const color=[
    {
       name:'pink' ,
       code:'#ff69b4',
       url: 'pink.css'
    },
       {
       name:'blue' ,
       code:'#3e99f4',
       url: 'blue.css'
    },
       {
       name:'green' ,
       code:'#0dfcd8',
       url: 'green.css'
    },
       {
       name:'yellow' ,
       code:'#ff9801',
       url: 'yellow.css'
    },
    
       {
       name:'red' ,
       code:'#cc3a3b',
       url: 'red.css'
    }
]

$(document).ready(function (){
    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
           // console.log(color[i].name)
           const span = document.createElement("span");
           span.style.backgroundColor = color[i].code;
           $(".colors").append(span);
        }
    }
    $(".colors span").click(function(){
        const index = $(this).index();
      //  console.log(color[index].name)
      $(".alternate-style").attr("href",color[index].url);
    })
    //theme mode
   $(".theme-mode").change(function() {
         if($(this).val() == "light") {
             $("body").removeClass("dark");
          }
           else {
            $("body").addClass("dark");
                }
})
// settings toggle onclick

  $(".s-toggle-btn").on("click", function() {
    $(".setting").toggleClass("open");
  });

})
