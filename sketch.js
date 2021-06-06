const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bg, bgImg, snow;


function preload()
{
  bgImg = loadImage("snow3.jpg");
 

}
function setup() 
{
  createCanvas(windowWidth, windowHeight);
 
 }

function draw() {
  background("white"); 

  image(bgImg, 100,0,700,700);
  imageMode(CENTER); 

  snow = new Snow(random(500,500), random(500,500, random(10,20)));
  

  drawSprites();
}