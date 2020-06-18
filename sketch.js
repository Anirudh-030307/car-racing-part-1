var ball,toread,towrite,database,position;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    database = firebase.database();
    toread = database.ref('ball/position');
    toread.on("value",read_position,show_error);
}

function draw(){
    background("white");

    if (position != undefined) {
        if(keyDown(LEFT_ARROW)){
            changePosition(-1,0);
        }
        else if(keyDown(RIGHT_ARROW)){
            changePosition(1,0);
        }
        else if(keyDown(UP_ARROW)){
            changePosition(0,-1);
        }
        else if(keyDown(DOWN_ARROW)){
            changePosition(0,+1);
        }
        drawSprites();
    }
    
}

function changePosition(x,y){
   towrite = database.ref('ball/position');
   towrite.set({
       'x' : ball.x + x ,
       'y' : ball.y + y 
   })

}

function read_position(data) {
    position = data.val();
    ball.x = position.x;
    ball.y = position.y;
}

function show_error() {
    console.log("error");
}


















