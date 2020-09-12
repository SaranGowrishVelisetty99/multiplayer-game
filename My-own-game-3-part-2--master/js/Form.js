class Form {

  constructor() {
    this.title = createElement('h1');
    this.input = createInput();
    //this.button = createButton('Press this button if you dare (But I warned you)');

    this.name = createElement('h2');
    this.nameP2 = createElement('h2');

    this.greeting = createElement('h2');
    this.greeting2 = createElement('h2')

    this.saying1 = createElement('h2');
    this.saying2 = createElement('h2');
    this.saying3 = createElement('h2');
     
    this.instruction = createElement('h1');
  }
  //start(){
    //droneHeading.addImage(droneHeading_img);
  //}

  hide(){
    this.title.hide();
    this.name.hide();
    this.nameP2.hide();
    //this.button.hide();
    this.input.hide();
    this.greeting.hide();
    this.greeting2.hide();
    this.saying1.hide();
    this.saying2.hide();
    this.saying3.hide(); 
    this.instruction.hide();
   
  }
  display(){
    //background(bg);
    //textSize(100);
   // fill("black");
   // text("Drone Buster",displayWidth/2-50,100);
    
    var str = this.title.html("Drone Buster");
   str.position(displayWidth/2-50,100);
   str.style.fontsize = "25px";
   
    
    this.saying1.html("Write your name");
    this.saying2.html("and press the button");
    this.saying3.html("to play the game");

    this.instruction.html("INSTRUCTION");

    this.name.html("Enter your name");
    this.nameP2.html("to play the game:");

    this.name.position(displayWidth/2+160,200);
    this.nameP2.position(displayWidth/2+160,230);

    //this.button.position(displayWidth/2-390,500);
    this.input.position(displayWidth/2+390,250);

    this.saying1.position(displayWidth/2-700,100);
    this.saying2.position(displayWidth/2-700,130);
    this.saying3.position(displayWidth/2-700,160);
    
    
    this.instruction.position(displayWidth/2-700,50);
    
   
    let button1 = document.querySelector('#formButton');
    
    button1.addEventListener('click',() => {
      document.body.style.backgroundImage = "url('images/RulesBg.jpg')";
      //backgroundImage.fontsize
      this.hide();
      rules = new Rules();
      rules.display();
    });
  /*this.button.mousePressed(()=>{

    this.title.hide();
    this.name.hide();
    this.nameP2.hide();
    this.button.hide();
    this.input.hide();
    this.saying1.hide();
    this.saying2.hide();
    this.saying3.hide();
    this.instruction.hide();
  });*/
}

}  
 

