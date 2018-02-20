let startButton = document.getElementById("startButton");
startButton.addEventListener("mousedown", startAnimating);
let divs = [];
let space = 200;
let x = 0;
let y = 0;

buildGrid();
startAnimating();

function buildGrid()
{
    for(let i = 0; i < 4; i++)
    {
        for(let i = 0; i < window.innerWidth; i += space)
        {
            x = i;
            y = 0;
            for(let i = 0; i < window.innerHeight; i += space)
            {
                y = i;
                let newDiv = document.createElement("div");
                newDiv.setAttribute("class", "box");
                //newDiv.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
                newDiv.style.backgroundColor = "black";
                newDiv.style.left = x + "px";
                newDiv.style.top = y + "px";
                document.body.appendChild(newDiv);
                divs.push(newDiv);
            }
        }
    }
}

function startAnimating()
{
    // let tweens = [];
    for(let i = 0; i < divs.length; i++)
    {
        let r = Math.floor(Math.random() * 2000);
        console.log(r);
        //let tempTween = KUTE.to(divs[i],{translate: 100}, {repeat:1000, yoyo:true});
        var tempTween = KUTE.fromTo(divs[i],{translate3d:[0, 0, 0]},{translate3d:[i * 10, i * 5, i * -.5]}, {repeat:1000, yoyo:true, parentPerspective: 100, duration: 2500});
        tempTween.start();
    }
}

