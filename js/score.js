function drawScore(count){
    ctx.font = "30px Arial";
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.fillText('Score: ' + count, 10, 50);
}

let scoreArray;
window.onload = function (){
    if (localStorage.getItem("scoreArray") === null) {
        scoreArray = [];
    } else {
        scoreArray = JSON.parse(localStorage.getItem("scoreArray"));
    }
}