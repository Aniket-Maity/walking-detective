let spritesheet;
let spritedata;
var detective;
let animation = [];

function preload() {

   // spritedata = loadJSON('character_001/character_001.json');
   spritedata = loadJSON('character_001/character_001.json');
   spritesheet = loadImage('character_001/character_001.png');


}
function setup() {
  createCanvas(640,80);
  // background(0);
  let frames = spritedata.frames;
  for(let i =0; i< frames.length ; i++){
    let pos = frames[i].position;
    let img = spritesheet.get(pos.x,pos.y,pos.w,pos.h);
    animation.push(img);
  }

  detective = new Sprite(0.2,animation,0,20);
  console.log(animation);

}
function draw() {
  // background(0);
  background(140);
  detective.animate();
  detective.show();
  // image(animation[frameCount % animation.length],0 ,0);

}
