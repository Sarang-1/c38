//var hypnoticBall;
var database,canvas,backgroundIMG,playerCount,player,form,game;
var allPlayers;
var gameState = 0;

function setup(){

    createCanvas(500,500);
    /*hypnoticBall = createSprite(250,250,10,10);
    hypnoticBall.shapeColor = "red";*/

    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();
    
    /*ballposition = database.ref("ball/position");
    ballposition.on("value",readPosition,showError);*/
    
}

function draw(){

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }


}
