class Form {
    constructor() {
        this.title = createElement('h2');
        this.button = createButton('Play');
        this.greeting = createElement('h2');
  }

  hide(){
    this.greeting.hide();
    this.button.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Superhero Marathon");
    this.title.position(displayWidth/2 - 50, 0);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    imageMode(CENTER);
    image(antMan,displayWidth/2,displayHeight/2);
    image.scale = 0.4;
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      gameState = "play";
    });
  }
}