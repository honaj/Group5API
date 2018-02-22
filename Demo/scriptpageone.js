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