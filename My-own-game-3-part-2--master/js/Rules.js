class Rules{
    constructor(){
    this.rule = createElement('h2')
    this.rules1 = createElement('h3');
    this.rules2 = createElement('h3');
    this.rules3 = createElement('h3');
    this.rules4 = createElement('h3');
    this.rules5 = createElement('h3');
    this.rules6 = createElement('h3');
    this.rules7 = createElement('h3');
    this.rules8 = createElement('h3');
    this.rules9 = createElement('h3');
    this.rules10 = createElement('h3');
    this.rules11 = createElement('h3');
    this.rules12 = createElement('h3');
    this.rules13 = createElement('h3');
    this.rules14 = createElement('h3');
    this.rules15 = createElement('h3');
    }

    hide(){
    this.rule.hide();
    this.rules1.hide(); 
    this.rules2.hide();
    this.rules3.hide();
    this.rules4.hide();
    this.rules5.hide();
    this.rules6.hide();
    this.rules7.hide();
    this.rules8.hide();
    this.rules9.hide();
    this.rules10.hide();
    this.rules11.hide();
    this.rules12.hide();
    this.rules13.hide();
    this.rules14.hide();
    this.rules15.hide();
    }

    display(){
        background(rulesBg);
        document.getElementById("formButton").style.display = "none";
        
        this.rule.html("RULES");
        this.rules1.html("Drones are great and can be used for a lot of useful purposes.");
        this.rules2.html("They can be used for logistics, monitoring, surveys and many other things for good.");
        this.rules3.html("But the very same drones can also be used by the bad people to carry bombs ");
        this.rules4.html("which can destroy this city, so you have to destroy these drones before they");
        this.rules5.html("destroy you and to do that you have to follow these simple rules.");
        this.rules6.html("There are three rogue drones- Mavic, Hypo and Milgrade.");
        this.rules7.html("The aim of the game is to release weapons by pressing the button to destroy the");
        this.rules8.html("drones before they reach you. There will be three types of weapons, and these are");
        this.rules9.html("drone gun, catch-net and Bazooka each one for a specific threat as follows:-");
        this.rules10.html("Drone gun can only destroy a Mavic, a Hypo can only destroy a catch-net, and a");
        this.rules11.html("Bazooka can only destroy a Milgrade.")
        this.rules12.html("Note* If you play for 1 minute you earn 1 coin, and");
        this.rules13.html("if you play for 10 minutes, you earn 1 diamond.");
        this.rules14.html("So keep this in mind while playing this game and don’t forget to try your best");
        this.rules15.html("I know you can do it.");

        //this.saying2.html("and press the button");
        //this.saying3.html("to play the game");
        this.rule.position(displayWidth/2-700,-19);
        this.rules1.position(displayWidth/2-700,15);
        this.rules2.position(displayWidth/2-700,35);
        this.rules3.position(displayWidth/2-700,65);
        this.rules4.position(displayWidth/2-700,85);
        this.rules5.position(displayWidth/2-700,105);
        this.rules6.position(displayWidth/2-700,135);
        this.rules7.position(displayWidth/2-700,165);
        this.rules8.position(displayWidth/2-700,185);
        this.rules9.position(displayWidth/2-700,205);
        this.rules10.position(displayWidth/2-700,235);
        this.rules11.position(displayWidth/2-700,255);
        this.rules12.position(displayWidth/2-700,290);
        this.rules13.position(displayWidth/2-700,310);
        this.rules14.position(displayWidth/2-700,340);
        this.rules15.position(displayWidth/2-700,360);
    };
}
