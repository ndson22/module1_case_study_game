const imagesPlayer = new Image();
imagesPlayer.src = 'img/death.png';
const characterActions = ['up', 'right', 'left', 'down'];
const characters = [];

class Character {
    constructor() {
        this.width = 32;
        this.height = 48;
        this.frameX = 2;
        this.x = Math.random() * canvas.width - this.width;
        this.y = Math.random() * canvas.height - this.height;
        this.speed = 1;
        this.action = characterActions[Math.floor(Math.random() * characterActions.length)];
        if (this.action === 'up') {
            this.frameY = 3;
        } else if (this.action === 'right') {
            this.frameY = 2;
        } else if (this.action === 'left') {
            this.frameY = 1;
        } else if (this.action === 'down') {
            this.frameY = 0;
        }
    }
    draw() {
        ctx.drawImage(imagesPlayer, this.width * this.frameX, this.height * this.frameY, this.width, this.height, this.x, this.y, this.width, this.height);
    }
    update(){
        if (this.action === 'up') {
            if (this.y < 0 - (this.height * 5)) {
                this.y = canvas.height + this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y -= this.speed;
            }
        } else if (this.action === 'right') {
            if (this.x > canvas.width + (this.width * 5)) {
                this.x = 0 - this.width;
                this.y = Math.random() * canvas.height;
            } else {
                this.x += this.speed;
            }
        } else if (this.action === 'down') {
            if (this.y > canvas.height + (this.height * 5)) {
                this.y = 0 - this.height;
                this.x = Math.random() * canvas.width;
            } else {
                this.y += this.speed;
            }
        }
        else if (this.action === 'left') {
            if(this.x< 0 - (this.width * 5)){
                this.x = canvas.width + this.width;
                this.y = Math.random() * canvas.height;
            } else {
                this.x -= this.speed;
            }
        }
    }
}

for (let i = 0; i < 100; i++) {
    characters.push(new Character())
}