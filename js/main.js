let pause = true
const text = document.querySelector('b')
text.addEventListener('click',(e) =>{
    e.target.parentElement.parentElement.style.display = 'none';
    pause  = false;
})

//limit oppose character depend on score
function limitPlayer(count){
    switch (count){
        case 1: limitLength = 5;
            break;
        case 10: limitLength = 10;
            break;
        case 20: limitLength = 15;
            break;
        case 30: limitLength = 20;
            break;
    }
}

let fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps){
    fpsInterval = 1000/fps;
    then = Date.now();
    startTime = then;
    animate()
}

function animate(){
    requestAnimationFrame(animate);
    now = Date.now();
    elapsed = now - then;
    if(elapsed > fpsInterval){
        then = now - (elapsed % fpsInterval);
        if(!pause) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
            mainMusic.play();
            player.draw();
            player.move();
            if(player.moving) {
                player.handlePlayerMove();
            }
            for(let i=0;i<arr0.length;i++){
                arr0[i].draw();
                arr0[i].update0();
                if(arr0[i].x >= canvas.width){
                    arr0.splice(i,1);
                }
            }
            for(let i=0;i<arr1.length;i++){
                arr1[i].draw();
                arr1[i].update1();
                if(arr1[i].y >= canvas.height){
                    arr1.splice(i,1);
                }
            }
            for (let i=0;i<arr2.length;i++){
                arr2[i].draw();
                arr2[i].update2();
                if(arr2[i].x <= 0){
                    arr2.splice(i,1);
                }
            }
            for (let i=0;i<arr3.length;i++){
                arr3[i].draw();
                arr3[i].update3();
                if(arr3[i].y <= 0){
                    arr3.splice(i,1);
                }
            }
            limitPlayer(count);
            for (let i = 0; i < limitLength; i++) {
                characters[i].draw();
                characters[i].update();
                checkLose(player, characters[i]);
                checkBullet(arr0,characters[i]);
                checkBullet(arr1,characters[i]);
                checkBullet(arr2,characters[i]);
                checkBullet(arr3,characters[i]);
            }
            reward.draw();
            if(earnReward(player, reward) === true){
                earnChest.play();
            }
            drawScore(count);
        }
    }
}
startAnimating(20);
animate();