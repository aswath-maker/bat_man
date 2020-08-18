const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
const Constraint = Matter.Constraint;






var d = [];
var maxDrops = 100;
function preload(){
    
}

function setup(){
    createCanvas(400,550);

    dropper = new bob(100,100,20);

}

function draw(){
    background("black");
    dropper.display();
}   

