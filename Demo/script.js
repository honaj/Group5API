let x = 0;
let y = 0;
let gridSizeX = 4;
let gridSizeY = 2;
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

for(let i = 0; i < gridSizeX; i++)
{
    x += space;
    y = 0;
    for(let i = 0; i < gridSizeY; i++)
    {
        y += space;
        let thumb = new makeThumb();
        let thumbTween = KUTE.fromTo(thumb,{translateX: -200, translateY: y, rotateY: 180},{translateX: x, translateY: y, rotateY: 0}, {duration: 1000, parentPerspective: 0});
        thumbTween.start();
    }
}