const key = [];
window.addEventListener('keydown', function (e){
    key[e.keyCode] = true;
    player.moving = true;
})
window.addEventListener('keyup', function (e){
    delete key[e.keyCode];
    player.moving = false;
})