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
let thumbs = [];

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
        for(let i = 0; i < thumbs.length; i++)
        {
            thumbs[i].style.display = "none";
        }
        location.href="index3.html";
    }
}

for(let i = 0; i < Math.round(window.innerWidth / space); i++)
{
    y = 0;
    for(let i = 0; i < Math.round(window.innerHeight / space); i++)
    {
        let thumb = new makeThumb();
        thumbs.push(thumb);
        let thumbTween = KUTE.fromTo(thumb,{translateX: -200, translateY: y, rotateY: 180, width: 0, height: 0},{translateX: x, translateY: y, rotateY: 0, width: 200, height: 200}, {duration: 1500});
        thumbTween.start();
        y += space;
    }
    x += space;
}
