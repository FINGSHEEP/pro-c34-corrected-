var brush , database ; 
var position ; 

function setup() {
    database = firebase.database;
    console.log(database);
    createCanvas(500,500);

    brush = createSprite(200,200,10,10);
    World.frameRate = 60;
    brush.shapeColor = "white";

    
    
}

function draw() {
    background("black");
    brush.x=World.mouseX;
    brush.y =World.mouseY;
    if(mouseDown("leftButton"))
        
    drawSprites();
}