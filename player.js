export class Player {
  constructor(game) {
    this.game = game;
    this.width = 100;
    this.height = 91.3;
    this.x = 0;
    this.y = this.game.height - this.height - 20;
    this.image = player;
  }
  update() {

  }
  draw(context) {
    context.fillStyle = 'red';
    context.fillRect(this.x, this.y, this.width, this.height);
    context.drawImage(this.image, this.x, this.y);
  } 
};  