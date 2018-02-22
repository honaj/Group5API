// grab elements to play with
var heading = document.getElementsByTagName('H1')[0];
var button = document.getElementsByTagName('DIV')[0];                                            

// let's split the heading text by character
var chars = heading.innerText.split('');

// wrap the splits into spans and build an object with these spans 
heading.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
var charsObject = heading.getElementsByTagName('SPAN'), l = charsObject.length;


// built the tween objects
var tween1 = KUTE.fromTo(
    button, 
    {width:150, opacity:0, height: 70, lineHeight:70, fontSize: 40}, 
    {width: 100, opacity:1, height: 35, lineHeight:35, fontSize: 20});

for (var i=0; i<l; i++){    
    var fn = i === l-1 ? startButtonAnimation : null;
    var elementToAnimate = charsObject[i];
    var delay = 250*i;
    
    KUTE.fromTo(
        elementToAnimate, 
        {opacity:0, height: 50, fontSize:80, letterSpacing: 20}, 
        {opacity:1, height: 35, fontSize:50, letterSpacing: 0}, 
        {complete: fn, delay: delay, duration: 500, easing: 'easingCubicOut'}).start()

}

function startButtonAnimation(){
    tween1.start()
}

let x = 0;
let y = 0;
let space = 250;

function makeThumb()
{
    let thumbnail = document.createElement("div");
    thumbnail.setAttribute("class", "thumb");
    thumbnail.style.backgroundColor = 'rgb(' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ',' + Math.floor(Math.random()*256) + ')';
    document.body.appendChild(thumbnail);
    thumbnail.addEventListener("pointerenter", hover);
    thumbnail.addEventListener("pointerleave", endHover);
    thumbnail.addEventListener("pointerdown", enlarge);
    return thumbnail;

    function hover()
    {
        let makeBig = KUTE.to(thumbnail, {width: 220, height: 220}, {duration: 150});
        makeBig.start();
    }

    function endHover()
    {
        let makeSmall = KUTE.to(thumbnail, {width: 200, height: 200}, {duration: 150});
        makeSmall.start();
    }

    function enlarge()
    {
        //Needs resize, translation to center and changed border radius
    }
}

for(let i = 0; i < Math.round(window.innerWidth / space); i++)
{
    y = 0;
    for(let i = 0; i < Math.round(window.innerHeight / space); i++)
    {
        let thumb = new makeThumb();
        let thumbTween = KUTE.fromTo(thumb,{translateX: -200, translateY: y, rotateY: 180, width: 0, height: 0},{translateX: x, translateY: y, rotateY: 0, width: 200, height: 200}, {duration: 1500});
        thumbTween.start();
        y += space;
    }
    x += space;
}


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
