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
        console.log("enlarge");
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