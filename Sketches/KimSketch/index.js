// identify the elements
var el1 = document.querySelector('.box1');
var el2 = document.querySelector('.box2');
var el3 = document.querySelector('.box3');
var el4 = document.querySelector('.box4');
var el5 = document.querySelector('.box5');
var el6 = document.querySelector('.box6');

// built the tween objects
var tween1 = KUTE.to(el1,{translate:[400,0,0]}, {repeat:2, yoyo:true});
var tween2 = KUTE.to(el2,{translateX:-200},{repeat:2, yoyo:true});
var tween3 = KUTE.to(el3,{translate:200},{repeat:2, yoyo:true});
var tween4 = KUTE.to(el4,{translate:-400},{repeat:2, yoyo:true});
var tween5 = KUTE.to(el5,{translate3d:[10,500,50]},{repeat:1, yoyo:true});
var tween6 = KUTE.to(el6,{translate3d:[0,0,-100]},{parentPerspective: 100, repeat:1, yoyo:true});

// start the animation
tween1.start(); 
tween2.start();
tween3.start();
tween4.start();
tween5.start();
tween6.start();