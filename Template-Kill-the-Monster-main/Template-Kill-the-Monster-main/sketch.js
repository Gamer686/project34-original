const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world
var bgI;
var ground;
var superhero;
var monster;
var block1, block2, bock3, block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;

function preload() {
bgI = loadImage("/Images/GamingBackground.png");

}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (200,400,2000,5);
  superhero = new Superhero(100,3,100,100);
monster = new Monster(380,200,100,100)
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER)
  background(bgI);
  ground.display();
 superhero.display();
 block1 = new Block(250,350,30,40);
 block2 = new Block(310,350,30,40);
 block3 = new Block(340,350,30,40);
 block4 = new Block(370,350,30,40);
 block5 = new Block(400,350,30,40);
 block6 = new Block(430,350,30,40);
 block7 = new Block(460,350,30,40);
 block8 = new Block(490,350,30,40);
 block9 = new Block(310,315,30,40);
 block10 = new Block(340,315,30,40);
 block11 = new Block(370,315,30,40);
 block12 = new Block(400,315,30,40);
 block13 = new Block(430,315,30,40);
 block14 = new Block(460,315,30,40);

 monster.display();
}

