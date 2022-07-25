
class Hero{
  image
  top
  left
  size
    constructor(image, top, left, size){
      this.image = image;
      this.top = top;
      this.left = left;
      this.size = size;
      }
 getHeroElement(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  moveRight(){
    this.left += 20;
  }
  moveLeft(){
    this.left -= 20;
  }
  moveTop(){
    this.top -= 20;
  }
  moveDown(){
    this.top += 20;
  }

}
let hero = new Hero('pikachu.png', 20, 30, 90);

function start(){
  if(hero.left < window.innerWidth - hero.size && hero.top === 20){
    hero.moveRight();
  }
  else if(hero.top < window.innerHeight - hero.size && hero.left > 0){
    hero.moveDown()
  }
  else if(hero.left > 0){
    hero.moveLeft()
  }
  else if(hero.top > 0){
    hero.moveTop()
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 50)
}

start();