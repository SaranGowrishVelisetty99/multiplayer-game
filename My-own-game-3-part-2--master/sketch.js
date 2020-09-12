var bg;
var form;
var rules;
//var droneHeading;
//var droneHeading_img;
var mavic,hypo,milgrade;
var mavic_img,hypo_img,milgrade_img;

function preload(){
  bg = loadImage("images/droneBg.jpg");
  rulesBg = loadImage("images/RulesBg.jpg");
  //droneHeading_img = loadImage("images/droneHeading.png")
  mavic_img = loadImage("images/Mavic.png");
  hypo_img = loadImage("images/Hypo.png");
  milgrade_img = loadImage("images/Milgrade.gif")
}

function setup(){
createCanvas(displayWidth-20,displayHeight-30)
form = new Form();
}

function draw (){
form.display();
}