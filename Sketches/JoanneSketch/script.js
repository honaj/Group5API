////////// Combined Translate & Rotate Animation //////////
// identify the elements
var el1 = document.querySelector('.box1');
var el2 = document.querySelector('.box2');
var el3 = document.querySelector('.box3');
var el4 = document.querySelector('.box4');

// built the tween objects // mixed transformation
var tween10 = KUTE.fromTo(el1,{translateZ:0, rotate:0},{translateZ:-200, rotate:720},{perspective:100, duration: 1500, repeat:1, yoyo:true});
var tween11 = KUTE.fromTo(el2,{translateY:0, rotateX:0},{translateY:150, rotateX:360},{duration: 1500, repeat:1, yoyo:true});
var tween12 = KUTE.fromTo(el3,{translateX:0, rotateY:0},{translateX:200, rotateY:360}, {perspective:160, duration:1500, repeat:1, yoyo:true} );
var tween13 = KUTE.fromTo(el4,{translate:0, rotateZ:0},{translate:-200, rotateZ:-360},{duration: 1500, repeat:1, yoyo:true});

// start the animation
tween10.start();
tween11.start();
tween12.start();
tween13.start();


////////// Opacity & Border Radius Animation //////////
////////// Buttons to Trigger Animation //////////
var theBoxes = document.querySelectorAll(".square");
var opacityButton = document.querySelector(".opacity");
var radiButton = document.querySelector(".radi");
var chainButton = document.querySelector(".chain");
var loopButton = document.querySelector(".loop");

var animateOpacity = KUTE.allFromTo(theBoxes, { opacity: 0.1 }, { opacity: 1 }, { offset: 100, duration: 800 });

var changeRadius = KUTE.allTo(theBoxes,{borderRadius:'100%'}, {repeat:1, yoyo:true, duration:700});

opacityButton.addEventListener("click", function() {
    animateOpacity.start();
  }, false);

radiButton.addEventListener("click", function() {
  changeRadius.start();
}, false);

chainButton.addEventListener("click", function() {
    animateOpacity.chain(changeRadius);
    animateOpacity.start();
  }, false);

loopButton.addEventListener("click", function() {
    animateOpacity.chain(changeRadius);
    changeRadius.chain(animateOpacity);
    animateOpacity.start();
  },false);



////////// Animate Colors //////////
var color = document.querySelector('.color');

var tween1 = KUTE.to(color, {color: '#9C27B0'}).start();
var tween2 = KUTE.to(color, {backgroundColor: '#069'});
var tween3 = KUTE.to(color, {borderColor: '#069'});
var tween4 = KUTE.to(color, {color: '#fff'});
var tween5 = KUTE.to(color, {borderTopColor: '#9C27B0'});
var tween6 = KUTE.to(color, {borderRightColor: '#9C27B0'});
var tween7 = KUTE.to(color, {borderBottomColor: '#9C27B0'});
var tween8 = KUTE.to(color, {borderLeftColor: '#9C27B0'});
var tween9 = KUTE.to(color, {backgroundColor: '#9C27B0'},{duration: 1500});

// chain connects one tween to another
tween1.chain(tween2);
tween2.chain(tween3);
tween3.chain(tween4);
tween4.chain(tween5);
tween5.chain(tween6, tween9);
tween6.chain(tween7);
tween7.chain(tween8);



////////// Morphing Animation //////////
var tween = KUTE.to('#icon1',  // target shape
   { path: '#icon2', attr: {fill: "#E8BD5D"} }, // to shape
   { // options
    morphPrecision: 10,
    morphIndex: 10,
    reverseSecondPath: true,
    yoyo: true, repeat: 1, duration: 2000,
    easing: 'easingCubicOut'
   }).start();

// Trigger it when you click the star!
document.getElementById('wrapper').onclick = function() {
  !tween.playing && tween.start();
}



////////// Animate Text //////////
var heading = document.querySelector(".text");
// split the heading text by character
var chars = heading.innerText.split('');
// wrap the splits into spans and build an object with these spans 
heading.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
var charsObject = heading.getElementsByTagName('SPAN'), l = charsObject.length;

for (var i=0; i<l; i++){    
  var fn = i === l;
  var elementToAnimate = charsObject[i];
  var delay = 250*i;

KUTE.fromTo(
      elementToAnimate, 
      {opacity:0, height: 50, fontSize:80, letterSpacing: 20}, 
      {opacity:1, height: 35, fontSize:40, letterSpacing: 0}, 
      {complete: fn, delay: delay, duration: 500, easing: 'easingCubicOut'}).start()
}