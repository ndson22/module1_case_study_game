class Bullet{
    constructor(image,x,y,width,height) {
        this.x = x;
        this.y = y;
        this.image = image;
        this.sWidth = width;
        this.sHeight = height;
        this.width = 20;
        this.height = 30;
    }
    draw(){
        ctx.drawImage(this.image,0,0,this.sWidth,this.sHeight,this.x,this.y,this.width,this.height)
    }
    update0(){
        this.x += 10;
    }
    update1(){
        this.y += 10;
    }
    update2(){
        this.x -=10;
    }
    update3(){
        this.y -=10;
    }
}

const arr0 = [];
const arr1 = [];
const arr2 = [];
const arr3 = [];
const sword0 = new Image();
sword0.src = "img/sword0.png";
const sword1 = new Image();
sword1.src = "img/sword1.png";
const sword2 = new Image();
sword2.src = "img/sword2.png";
const sword3 = new Image();
sword3.src = "img/sword3.png";
const boom = new Image();
boom.src = "img/boom.png"

function checkBullet(bullet, character){
    for(let i = 0;i<bullet.length;i++) {
        if (
            ((bullet[i].x + bullet[i].width) >= character.x && (bullet[i].x + bullet[i].width) <= (character.x + character.width + bullet[i].width)) && ((bullet[i].y + bullet[i].height) >= character.y && (bullet[i].y + bullet[i].height) <= (character.y + character.height + bullet[i].height))
        ) {
            crashMusic.play();
            ctx.drawImage(boom, 0, 0, 124, 132, character.x, character.y, 80, 80);
            character.x = Math.random() * (canvas.width - 200);
            character.y = Math.random() * (canvas.height - 200);
        }
    }
}