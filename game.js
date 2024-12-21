const dino = document.querySelector(".dragon");
const obstacle = document.querySelector(".obstacle");
const over = document.querySelector(".over");
score = 0;
cross = true;
const score1 = document.querySelector("#score");
const btn = document.querySelector(".btn");

document.onkeydown = function (e) {
    if (e.keyCode === 38) {
        dino.classList.add("anidragon1");
        setTimeout(() => {
            dino.classList.remove("anidragon1");
        },700);
    }else if(e.keyCode === 39){
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinox+112+"px";
    }else if(e.keyCode === 37){
        dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
        dino.style.left = dinox-112+"px";
    }
}

setInterval(()=>{
    dx = parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"));
    dy = parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"));

    ox = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
    oy = parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

    offsetx = Math.abs(dx-ox);
    offsety = Math.abs(dy-oy);
    if(offsetx < 100 && offsety < 52){
        over.style.visibility = "visible";
        btn.style.visibility = "visible";
        obstacle.classList.remove("obstacleani");
    }else if(offsetx < 100 && cross){
        score+=1;
        update(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        },1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            console.log("newDur");
            newDur = aniDur - 0.1;
            if(newDur >= 2){
                obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur);
            };
        }, 500);
    }
},10);

function update(score,hiscore){
    score1.innerHTML = "your Score: " + score;

}

newgame = () => {
    score = 0;
    score1.innerText = "your Score: 0";
    over.style.visibility = "hidden";
    btn.style.visibility = "hidden";
    obstacle.classList.add("obstacleani");
}

btn.addEventListener("click",newgame);