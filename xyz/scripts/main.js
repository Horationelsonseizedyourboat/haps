
/*
var colors = new Array(
[248,225,194],
[163,211,223],
[207,221,187],
[232,239,242],
[246,219,252],
[255,220,231],
[255,202,216]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0,1,2,3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient()
{

if ( $===undefined ) return;

var c0_0 = colors[colorIndices[0]];
var c0_1 = colors[colorIndices[1]];
var c1_0 = colors[colorIndices[2]];
var c1_1 = colors[colorIndices[3]];

var istep = 1 - step;
var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
var color1 = "rgb("+r1+","+g1+","+b1+")";

var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
var color2 = "rgb("+r2+","+g2+","+b2+")";

$('.thirdSection').css({
 background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
  background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});

step += gradientSpeed;
if ( step >= 1 )
{
  step %= 1;
  colorIndices[0] = colorIndices[1];
  colorIndices[2] = colorIndices[3];

  //pick two new target color indices
  //do not pick the same as the current one
  colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
  colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;

}
}

setInterval(updateGradient,1);
/*
ScrollReveal().reveal('.firstPic',{delay:1200});
ScrollReveal().reveal('.firstText',{delay:1400});
ScrollReveal().reveal('#textOne',{delay:1200});
ScrollReveal().reveal('#textTwo',{delay:1400});
ScrollReveal().reveal('.thirdHeaderFrame',{delay:1000});
ScrollReveal().reveal('#stepOne',{delay:800});
ScrollReveal().reveal('#stepTwo',{delay:1200});
ScrollReveal().reveal('#stepThree',{delay:1600});
ScrollReveal().reveal('.fourthHeader',{delay:1200});
ScrollReveal().reveal('#description',{delay:800});
ScrollReveal().reveal('#package',{delay:800});
ScrollReveal().reveal('.carePack',{delay:1200});
ScrollReveal().reveal('#whatPurchase',{delay:1000});
ScrollReveal().reveal('#price',{delay:1200});
ScrollReveal().reveal('.shopMe',{delay:1400});
ScrollReveal().reveal('#order',{delay:800});
ScrollReveal().reveal('.lieferando',{delay:800});
ScrollReveal().reveal('.insta',{delay:1200});
ScrollReveal().reveal('.face',{delay:1400});

$(document).ready(function(){

  $(".lieferando").hover(function(){
    $(this).css("color", "#47afa3");
    }, function(){
    $(this).css("color", "black");
  });

  $(".insta").hover(function(){
    $(this).css("color", "#47afa3");
    }, function(){
    $(this).css("color", "black");
  });

  $(".face").hover(function(){
    $(this).css("color", "#47afa3");
    }, function(){
    $(this).css("color", "black");
  });


  })

*/
