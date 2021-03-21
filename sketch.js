var Walking_man,Walking_man_image;
var Thunder_bolt1,Thunder_bolt2,Thunder_bolt3,Thunder_bolt4;
var Thunder_bolt1_image,Thunder_bolt2_image,Thunder_bolt3_image,Thunder_bolt4_image;

function preload(){
    Walking_man_image = loadAnimation("images/Walking Frame/walking_1.png","images/Walking Frame/walking_2.png","images/Walking Frame/walking_3.png","images/Walking Frame/walking_4.png","images/Walking Frame/walking_5.png","images/Walking Frame/walking_6.png","images/Walking Frame/walking_7.png","images/Walking Frame/walking_8.png",);
    Thunder_bolt1_image = loadImage("images/thunderbolt/1.png");
    Thunder_bolt2_image = loadImage("images/thunderbolt/2.png");
    Thunder_bolt3_image = loadImage("images/thunderbolt/3.png");
    Thunder_bolt4_image = loadImage("images/thunderbolt/4.png");
}

function setup(){
   createCanvas(1200,900);
   Walking_man = createSprite(600,400,10,10);
   Walking_man.addAnimation(Walking_man_image);
   Thunder_bolt1 = createSprite(600,20,10,10);
   Thunder_bolt1.addImage(Thunder_bolt1_image,"thunder");
   Thunder_bolt2 = createSprite(10,10,10,10);
   Thunder_bolt2.addImage(Thunder_bolt2_image,"thunder");
   Thunder_bolt2.visible=false;
   Thunder_bolt3 = createSprite(10,10,10,10);
   Thunder_bolt3.addImage(Thunder_bolt3_image,"thunder");
   Thunder_bolt3.visible=false;
   Thunder_bolt4 = createSprite(10,10,10,10);
   Thunder_bolt4.addImage(Thunder_bolt4_image,"thunder");
   Thunder_bolt4.visible=false;
}

function draw(){
    background(0);
    drawSprites();
}   

