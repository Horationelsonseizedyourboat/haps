
// Nav global variables
var openButton = document.querySelector(".openButton");
var closeButton = document.querySelector(".closeButton");
var menu = document.querySelector(".menu");
var fontCollector = document.querySelectorAll("#A,#B,#C,#D,#E,#F,#G,#H,#I,#J,#K,#L,#M");
var logo = document.querySelector(".logo");


/*
const wawa = new hoverEffect({
      parent: document.querySelector('.secondPartImage'),
      intensity: 7,
      image1: 'img/14.jpg',
      image2: 'img/15.jpg',
      displacementImage: 'img/heightMap.png'
  });

  const deux = new hoverEffect({
        parent: document.querySelector('.secondPartImageRight'),
        intensity: 7,
        image1: 'img/17.jpg',
        image2: 'img/17.jpg',
        displacementImage: 'img/heightMap.png'
    });
*/


// Menu Open
openButton.onclick = function () {
  menu.style.height = "100%";

  closeButton.style.visibility = "visible";
  openButton.style.visibility = "hidden";
  openButton.style.float = "left";
  fontCollector.forEach(function(element){
    element.style.color = "black";
  })
  // Fade In Effects

  $(document).ready(function(){

    $(".menuHome").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuHome").removeClass("fadeInUp animated");
        })

    $(".menuFood").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuFood").removeClass("fadeInUp animated");
        })

    $(".menuAboutus").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuAboutus").removeClass("fadeInUp animated");
        })

    $(".menuKontakt").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuKontakt").removeClass("fadeInUp animated");
        })

    $(".menuGallery").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuGallery").removeClass("fadeInUp animated");
        })

    $(".menuInsta").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuInsta").removeClass("fadeInUp animated");
            })

    $(".menuInsta").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuInsta").removeClass("fadeInUp animated");
              })

    $(".menuInstaX").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuInstaX").removeClass("fadeInUp animated");
              })

    $(".menuInstaY").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuInstaY").removeClass("fadeInUp animated");
                        })

    $(".menuInstaZ").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
        $(".menuInstaZ").removeClass("fadeInUp animated");
                                  })

    $(".menuEmail").addClass("fadeInUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
          $(".menuEmail").removeClass("fadeInUp animated");
                        })

      });

}



// Menu Close
closeButton.onclick = function (){



setTimeout(function(){
  menu.style.height = "0%";
  closeButton.style.visibility = "hidden";
  openButton.style.visibility = "visible";
  openButton.style.float = "right";
},800);


setTimeout(function(){
  fontCollector.forEach(function(element){
    element.style.color = "#f3f3f3";
  })
},900)

$(document).ready(function(){

  $(".menuHomeClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuHomeClose").removeClass("fadeOutUp animated");
      })

  $(".menuFoodClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuFoodClose").removeClass("fadeOutUp animated");
      })

  $(".menuAboutusClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuAboutusClose").removeClass("fadeOutUp animated");
      })

  $(".menuKontaktClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuKontaktClose").removeClass("fadeOutUp animated");
        })

  $(".menuGalleryClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuGalleryClose").removeClass("fadeOutUp animated");
       })

  $(".menuInstaClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuInstaClose").removeClass("fadeOutUp animated");
        })

  $(".menuFaceClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuFaceClose").removeClass("fadeOutUp animated");
        })

  $(".menuTripClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuTripClose").removeClass("fadeOutUp animated");
        })

})

}





// Page Change Animation Menu

function delayUrlLoad(url, mils){



  setTimeout(function(){
    fontCollector.forEach(function(element){
      element.style.color = "#f3f3f3";
    })
  },900)

$(document).ready(function(){
  $(".menuHomeClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuHomeClose").removeClass("fadeOutUp animated");
      })

  $(".menuFoodClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuFoodClose").removeClass("fadeOutUp animated");
      })

  $(".menuAboutusClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuAboutusClose").removeClass("fadeOutUp animated");
      })

  $(".menuKontaktClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuKontaktClose").removeClass("fadeOutUp animated");
        })

  $(".menuGalleryClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuGalleryClose").removeClass("fadeOutUp animated");
       })

  $(".menuInstaClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuInstaClose").removeClass("fadeOutUp animated");
        })

  $(".menuFaceClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuFaceClose").removeClass("fadeOutUp animated");
        })

  $(".menuTripClose").addClass("fadeOutUp animated").one('animationend webkitAnimationEnd oAnimationEnd',function(){
    $(".menuTripClose").removeClass("fadeOutUp animated");
        })
})

setTimeout(function(){
  menu.style.height = "0%";
},800);

    setTimeout(function() {
        window.location.href = url;
    }, mils)
}












// About us Effects!!!!!!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!! !!!!!!!!!!!!!!!!!!!!!!!!!
var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 100,
	      freeMode: true,
	      pagination: {
	        el: 'el-pagination',
	        clickable: false,
	      },
        breakpoints: {
          240: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          340: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          980: {
            slidesPerView: 3,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 70,
          },

          1090: {
            slidesPerView: 3,
            spaceBetween: 60,
          },

          1100: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }

	    });


// Hover Effects

document.querySelector(".love").onmouseover = function(){
  document.querySelector(".aboutusFourthPage").style.backgroundColor = "#f7a98f";
  document.querySelector(".valueText").innerHTML = "How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited. ";
}

document.querySelector(".passion").onmouseover = function(){
  document.querySelector(".aboutusFourthPage").style.backgroundColor = "#A3B5D5";
  document.querySelector(".valueText").innerHTML = "Typography is what comes between the author and the reader. This is as true on the web as it is in any other medium. If a text has anything at all significant to say, it needs a typographer’s care, which will in turn be repaid by the reader’s attention.";
}

document.querySelector(".handmade").onmouseover = function(){
  document.querySelector(".aboutusFourthPage").style.backgroundColor = "#7F9A88";
  document.querySelector(".valueText").innerHTML = "Seen you eyes son show. Far two unaffected one alteration apartments celebrated but middletons interested. Described deficient applauded consisted my me do. Passed edward two talent effect seemed engage six. On ye great do child sorry lived";

}


// counter
