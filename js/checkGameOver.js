//check lose
function checkLose(player, character){
    let x1, y1, w1, h1, x2, y2, w2, h2;
    x1 = player.x;
    y1 = player.y;
    h1 = player.height;
    w1 = player.width;
    x2 = character.x;
    y2 = character.y;
    h2 = character.height;
    w2 = character.width;
    if (
        ((x1 + w1) >= x2 && (x1 + w1) <= (x2 + w2 + w1)) && ((y1 + h1) >= y2 && (y1 + h1) <= (y2 + h2 + h1))
    )
    {
        pause = true;
        mainMusic.pause();
        gameOverMusic.play();
        document.querySelector('#end').style.display = 'flex';
        document.querySelector('#result').innerHTML = `GAME OVER<br>Your score is ${count}`;
        document.getElementById('saveScore').addEventListener('click', function (){
            let name = document.getElementById('name').value;
            scoreArray.push([name,count]);
            console.log(scoreArray)
            localStorage.setItem("scoreArray", JSON.stringify(scoreArray));
        });
    }
}