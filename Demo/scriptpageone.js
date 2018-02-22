// grab elements to play with
var heading = document.getElementsByTagName('H1')[0];
var button = document.getElementsByTagName('DIV')[0];                                            

// let's split the heading text by character
var chars = heading.innerText.split('');

// wrap the splits into spans and build an object with these spans 
heading.innerHTML = '<span>' + chars.join('</span><span>') + '</span>';
var charsObject = heading.getElementsByTagName('SPAN'), l = charsObject.length;

var tween1 = KUTE.to(heading, {color: '#9C27B0'}).start();
var tween2 = KUTE.to(heading, {color: '#069'});
var tween3 = KUTE.to(heading, {color: '#069'});
var tween4 = KUTE.to(heading, {color: '#0000ff'});
var tween5 = KUTE.to(heading, {color: '#33cc33'} );
var tween6 = KUTE.to(heading, {color: '#ffff00'});
var tween7 = KUTE.to(heading, {color: '#ff1a1a'});
var tween8 = KUTE.to(heading, {color: '#00ccff'});
var tween9 = KUTE.to(heading, {color: '#9C27B0'},{duration: 1500});

tween1.chain(tween2);
tween2.chain(tween3);
tween3.chain(tween4);
tween4.chain(tween5);
tween5.chain(tween6,tween9);
tween6.chain(tween7);
tween7.chain(tween8);

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
