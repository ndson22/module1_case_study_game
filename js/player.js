//main player
class Player {
    constructor(x, y , width, height, frameX, frameY, speed, moving) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.frameX = frameX;
        this.frameY = frameY;
        this.speed = speed;
        this.moving = moving;
    }
    draw(){
        ctx.drawImage(playerImg, player.width * player.frameX, player.height * player.frameY, player.width, player.height, player.x, player.y, player.width, player.height);
    }
    move(){
        if(key[38] && this.y > 0){
            this.y -= this.speed;
            this.frameY = 3;
        } else if(key[39] && this.x + this.width < canvas.width){
            this.x += this.speed;
            this.frameY = 2;
        } else if(key[40] && this.y + this.height < canvas.height){
            this.y += this.speed;
            this.frameY = 0;
        } else if(key[37] && this.x > 0){
            this.x -= this.speed;
            this.frameY = 1;
        }  else if(key[32]&& this.frameY === 2){
            shootMusic.play();
            arr0.push(new Bullet(sword2,this.x,this.y,335,114));
        } else if (key[32] && this.frameY === 0) {
            shootMusic.play();
            arr1.push(new Bullet(sword0,this.x,this.y,114,335));
        } else if (key[32] && this.frameY === 1) {
            shootMusic.play();
            arr2.push(new Bullet(sword1,this.x,this.y,335,114));
        } else if (key[32] && this.frameY === 3) {
            shootMusic.play();
            arr3.push(new Bullet(sword3,this.x,this.y,114,335));
        }
    }
    handlePlayerMove(){
        if(this.frameX < 3){
            this.frameX++;
        } else{
            this.frameX = 0;
        }
    }
}

let player = new Player(200, 200, 32, 48, 0, 0, 3,false);
