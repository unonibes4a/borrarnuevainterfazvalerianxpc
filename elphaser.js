
        var IDE_HOOK = false;
        var VERSION = '2.6.2';

        var arraysphexa=[];
var vw=window.innerWidth*1;
var vh=window.innerHeight;

console.log("div  "+vh+"  "+vw+ "  " +vw/vh);
//div  238  517  2.172268907563025 0.15
//div  654  1366  2.08868501529052

var sclegame=1;

vw=window.innerWidth*1;
 vh=window.innerHeight;
 sclegame=0.000235571*(vw)+(0.028209658);
    
        var game; //= new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });

var graphics;



function nuevogame(){
    vw=window.innerWidth*1;
 vh=window.innerHeight;
    sclegame=0.000235571*(vw)+(0.028209658);

    game.destroy()
    game = new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });

}

function preload() {

game.load.image('vidrio', 'vidrio2.png');
game.load.shader('bacteria', 'bacteria.frag');


}
        

 
 var texture;


function create() {
    game.stage.backgroundColor = '#0072bc';

    filter = new Phaser.Filter(game, null, game.cache.getShader('bacteria'));

 texture= filter.addToWorld(0, 0, vw, vh);
    graphics = game.add.graphics(300, 200);

    drawShape(0x000000, 0xa21d7e);

    graphics.inputEnabled = true;
    graphics.input.useHandCursor = true;

    graphics.events.onInputDown.add(onDown, this);
    graphics.events.onInputUp.add(onUp, this);
    graphics.events.onInputOver.add(onOver, this);
    graphics.events.onInputOut.add(onOut, this);
   graphics.inputEnabled=true;
    graphics.input.draggable=true;

   // var hexpeli = game.add.sprite(200, 100, 'vidrio');
   /* test.scale.x=0.15;
    test.scale.y=0.15;
    test.inputEnabled=true;
    test.input.draggable=true;*/
  //var sphexpelis=  creahexagonosprite(100, 100, 0.15,'vidrio');

  //var sphexpelis2=  creahexagonosprite(300, 100, 0.15,'vidrio');
  var texture; elforarrayhexa(arraysphexa,0,0,sclegame,'vidrio');
console.log(arraysphexa[0].id);
//arraysphexa[1].sprite.setTexture(texture, false)

}

function drawShape(fill, style) {

    graphics.clear();

    graphics.beginFill(fill);
    graphics.lineStyle(4, style, 1);

    graphics.moveTo(0, 0);
    graphics.lineTo(250, 0);
    graphics.lineTo(250, 200);
    graphics.lineTo(125, 100);
    graphics.lineTo(0, 200);
    graphics.lineTo(0, 0);

    graphics.endFill();

    graphics.alpha=0.3;

}

function onOver() {

    //drawShape(0xab3602, 0xeb6702);

}

function onDown() {

   // drawShape(0x717a02, 0xebfd02);
  //  graphics.x=0;
   

}

function onUp() {

   // drawShape(0x027a71, 0x611554);

}

function onOut() {

  //  drawShape(0x027a71, 0x02fdeb);

}
   
function update() {

filter.update();

}    



function creahexagonosprite(px,py,ps,pimg){
    var test = game.add.sprite(px, py, pimg);
    test.scale.x=ps;
    test.scale.y=ps;
    test.inputEnabled=true;
    test.input.draggable=true;
return test;

}
function elforarrayhexa(elaarray,px,py,ps,pimg){
    for(var i=0;i<3; i=i+1){
      elaarray.push({id:1,sprite:creahexagonosprite(px,py,ps,pimg)});
    }
}


function onresizemio(){
     vw=window.innerWidth*1;
 vh=window.innerHeight;
  //  sclegame= 0.5227722772277228
  //console.log("yoo  "+ (vh/vw));
  nuevogame();


}

function oklistophas(){
   // game = new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });
alert("yooo");
}