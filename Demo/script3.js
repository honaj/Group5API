////////////// detailed information page //////////////
// clip property
var image = document.querySelector('.image');

var image1 = KUTE.fromTo(image, {clip: [0,500,650,0]}, {clip: [0,40,650,0]}, {duration:500, easing: 'easingCubicOut'}).start();
var image2 = KUTE.fromTo(image, {clip: [0,40,650,0]}, {clip: [0,500,650,460]}, {duration:600, easing: 'easingCubicOut'});
var image3 = KUTE.fromTo(image, {clip: [0,500,650,460]}, {clip: [0,500,40,0]}, {duration:800, easing: 'easingCubicOut'});
var image4 = KUTE.fromTo(image, {clip: [0,500,40,0]}, {clip: [0,500,650,0]}, {duration:1200, easing: 'easingExponentialInOut'});

image1.chain(image2);
image2.chain(image3);
image3.chain(image4);

// box model properties
var bgbox = document.querySelector('.bgbox');

var bgbox1 = KUTE.to(bgbox,{width:1200},{duration: 2500, easing: 'easingQuinticOut', update: onWidth});
bgbox1.start();
function onWidth() { var css = window.getComputedStyle(bgbox)}

// slide text
var description = document.querySelectorAll('.description');

var description1 = KUTE.allFromTo(description, {translateY:1000}, {translateY:0},{offset: 100, duration: 1500, easing: 'easingCubicOut'});
description1.start();

var animateOpacity = KUTE.allFromTo(description, { opacity: 0.1 }, { opacity: 1 }, {duration: 3000});
animateOpacity.start();

// SVG animation
var wholeAnimation = KUTE.fromTo("#icon", { draw: "0% 0%" }, { draw: "0% 100%" }, {duration: 15000});
wholeAnimation.start();