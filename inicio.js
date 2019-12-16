$(document).ready(function(){
   
  todoinicia();



});

function todoinicia(){

  iniciaelphase();
  iniciapaneldepeliculas();
  traejsonpeliculas();
  
}

function iniciaelphase(){
   
  oklistophas();

}


var esverdadjuego=true;
function iniciapaneldepeliculas(){

  $("#myInputpeli").on("keyup", function() {
    /*   valuebusca = $("#myInputpeli").val().toLowerCase();

       console.log(this.id);
      $("#idverdaderopeliculas a").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(valuebusca) > -1);
          //var scrollElm = docume.scrollingElement;
          console.log(this.id);
         // document.getElementById("idverdaderopeliculas").scrollingElement.scrollTop = 0;
//scrollElm.scrollTop = 0;
      
//console.log("valuebusca    "+valuebusca);
  


      });
*/
//ffbuscarlaspeliculas();

    });
}


function  ffbuscarlaspeliculas() {  


  valuebusca = $("#myInputpeli").val().toLowerCase();

  
 $("#idverdaderopeliculas a").filter(function() {
     $(this).toggle($(this).text().toLowerCase().indexOf(valuebusca) > -1);
    



 });


}




var arrarypeliculas2019={};


function traejsonpeliculas(){


     $.getJSON("peliculas2019.json", function(result){
      
      arrarypeliculas2019=result;
 
      
      traejsonseries();

     
      
    });
}

//peliculas

var varid=0;
var stringpelis="";
function crealaspeliculasenpanel(idname,idtitle,idimgurl){
  stringpelis="";
  //idimgurl='peli.jpg';
  //console.log(idname+" "+idtitle+" "+idimgurl);
  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualpeliculaespora(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";

//    console.log(stringpelis);
  $("#idverdaderopeliculas").append(stringpelis);


}

function empityelementosid(idel){

  $(idel).empty();
}

function elfordecrearpeliculasenpanel1 () { 
empityelementosid("#idverdaderopeliculas");
for(var i in arrarypeliculas2019){
  
crealaspeliculasenpanel(arrarypeliculas2019[i].idname,
arrarypeliculas2019[i].title,arrarypeliculas2019[i].img);
    

}
}



var estapelicula="";


function cualpeliculaespora(thiss){

 
estapelicula=thiss;



for(var i in arrarypeliculas2019){
 //  console.log(arrarypeliculas2019[i].idname);
   if(arrarypeliculas2019[i].idname==estapelicula.id){
     //  game.destroy();

       esverdadjuego=false;
document.getElementById("idvisorpelis").style.display="block";

       cambiapeliscula(arrarypeliculas2019[i].pg);
     //  alert(estapelicula.id+"  "+ arrarypeliculas2019[i].pg);
   }
}
 }

// series



var arraryseries2019={};


function traejsonseries(){
 

      $.getJSON("series.json", function(result){
       
       arraryseries2019=result;
  
   
      
       
     });
}




function crealasseriesenpanel(idname,idtitle,idimgurl){
stringpelis="";
//idimgurl='peli.jpg';
//console.log(idname+" "+idtitle+" "+idimgurl);
stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualserie(this)'>"+
"<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
  "<p>valerianx</p>    </div>"+"</a>  </div>";

//    console.log(stringpelis);
$("#idverdaderopeliculas").append(stringpelis);


}
function elfordecrearseriessenpanel1 (){

empityelementosid("#idverdaderopeliculas");
for(var i in arraryseries2019){
  
  crealasseriesenpanel(arraryseries2019[i].idname,
arraryseries2019[i].title,arraryseries2019[i].pg);
    

}
}


var stestaserie="";
var arrayestaseriees=[];
var arrayestaserietemporada=[];
var idxtemporadas=0;

function cualserie(thiss){

stestaserie=thiss.id;
stimgparavideodetemop=thiss.pg;

for(var i in arraryseries2019){
  
  if(arraryseries2019[i].idname==stestaserie){
    //console.log(arraryseries2019[i].idname+"   "+stestaserie);
//if(arraryseries2019[i].t){}
arrayestaseriees=arraryseries2019[i];

//console.log(arrayestaseriees);
//console.log(arraryseries2019[i]["t"+String(idxtemporadas+1)]);
break;


  }
}

elforparasaberquetempioradas();


}



var arraysonestastemporadas=[];
function elforparasaberquetempioradas(){
arraysonestastemporadas=[];
idxtemporadas= 0;
for(var i=0;i<20;i=i+1){

  
  idxtemporadas=i+1;
  if(arrayestaseriees["t"+String(idxtemporadas)]){
   
    
  arraysonestastemporadas.push({temporada:arrayestaseriees["t"+String(idxtemporadas)]});
   }
 
 
}

console.log(arraysonestastemporadas[0]["temporada"]["v"+String(intcomteodevideos+1)].pg);
festoyenestatemporada(arraysonestastemporadas);
}
var stimgparavideodetemop="";
var intcomteodevideos=0;
function tengolatemporada(){

intcomteodevideos=0;
for(var i in arraysonestastemporadas ){

  intcomteodevideos=intcomteodevideos+1;
  if(arraysonestastemporadas[0]["temporada"]["v"+String(intcomteodevideos+1)]){//intcomteodevideos
  }
  creapanelvideosdelatemp(arraysonestastemporadas.temporada.idname,arraysonestastemporadas.title,stimgparavideodetemop)
}


}

var arrayestoyenestatemporada=[];
function festoyenestatemporada(arraypasada){

for(var i in arraypasada){

console.log(arraypasada[i]["temporada"]);
arrayestoyenestatemporada.push(arraypasada[i]["temporada"]);
}

}






function creapanelvideosdelatemp(idname,idtitle,idimgurl){
stringpelis="";

stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualserie(this)'>"+
"<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
  "<p>valerianx</p>    </div>"+"</a>  </div>";


$("#idverdaderopeliculas").append(stringpelis);


}
















function cambiapeliscula(stsrc){  // iframe le pasa la pelicula o el video elibro juego lo que sea

document.getElementById("btmostrarmenu").style.display="block";
document.getElementById("idiframe").src=stsrc;
  
}














function fbtiramenu(){
try {esverdadjuego=true;
  nuevogame();
} catch (error) {
  
}
cambiapeliscula("");

  document.getElementById("idvisorpelis").style.display="none";
  document.getElementById("idpaneldepeliculas").style.display="none";
  document.getElementById("btmostrarmenu").style.display="none";
  empityelementosid("#idverdaderopeliculas");

}



function fcbtcerrarpanelpeliculas(){

  document.getElementById("idpaneldepeliculas").style.display="none";
  document.getElementById("myInputpeli").value="";
 
}

































// solo phaser

var IDE_HOOK = false;
var VERSION = '2.6.2';

var arraysphexa=[];
var vw=window.innerWidth*1;
var vh=window.innerHeight;

//console.log("div  "+vh+"  "+vw+ "  " +vw/vh);
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

game.destroy();
game = new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });

}

function preload() {

game.load.image('vidrio', 'vidrio2.png');
game.load.shader('bacteria', 'bacteria.frag');


}



var texture;


function create() {

  arraysphexa=[];
game.stage.backgroundColor = '#000000';

existelefiler=false;
try {
filter = new Phaser.Filter(game, null, game.cache.getShader('bacteria'));
if(filter)
{texture= filter.addToWorld(0, 0, vw, vh);  existelefiler=true;}  
} catch (error) {

}


texture= filter.addToWorld(0, 0, vw, vh);
graphics = game.add.graphics(vw*0.35, vh*0.27);

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

var existelefiler=false;
function update() {
  if(esverdadjuego){  if(existelefiler){filter.update();} // si la var es true e spor qu etoy en menu del valerianx
      posicionatextos();// si es false es por que estoy en pelicula o video viendo
  
  }



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
/*for(var i=0;i<3; i=i+1){
elaarray.push({id:1,sprite:creahexagonosprite(px,py,ps,pimg)});
elaarray[i].sprite.anchor.x=0.5;
elaarray[i].sprite.anchor.y=0.5;
}*/

arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.1,py+vh*0.18,ps,pimg)});
arraysphexa[0].sprite.anchor.x=0.5;
arraysphexa[0].sprite.anchor.y=0.5;
arraysphexa[0].sprite.inputEnabled=true;
arraysphexa[0].sprite.input.draggable=true;
arraysphexa[0].sprite.events.onInputDown.add(onclikhexapeliculaspeliculsa1, this);
textpeliculas = game.add.text(game.world.centerX, game.world.centerY, "PELICULAS", { font: "10px Arial", fill: "#ff0044", align: "center" });
textpeliculas.anchor.setTo(0.5, 0.5);
textpeliculas.x=arraysphexa[0].sprite.x;
textpeliculas.y=arraysphexa[0].sprite.y;

arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.16,py+vh*0.46,ps,pimg)});
arraysphexa[1].sprite.anchor.x=0.5;
arraysphexa[1].sprite.anchor.y=0.5;
arraysphexa[1].sprite.inputEnabled=true;
arraysphexa[1].sprite.input.draggable=true;
arraysphexa[1].sprite.events.onInputDown.add(onclikhexapeliculasseries2, this);



textseries = game.add.text(game.world.centerX, game.world.centerY, "SERIES", { font: "10px Arial", fill: "#ff0044", align: "center" });
textseries.anchor.setTo(0.5, 0.5);
textseries.x=arraysphexa[1].sprite.x;
textseries.y=arraysphexa[1].sprite.y;

arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.1,py+vh*0.71,ps,pimg)});
arraysphexa[2].sprite.anchor.x=0.5;
arraysphexa[2].sprite.anchor.y=0.5;
arraysphexa[2].sprite.inputEnabled=true;
arraysphexa[2].sprite.input.draggable=true;
arraysphexa[2].sprite.events.onInputDown.add(onclikhexajuegos3, this);


textJUEGOS = game.add.text(game.world.centerX, game.world.centerY, "JUEGOS", { font: "10px Arial", fill: "#ff0044", align: "center" });
textJUEGOS.anchor.setTo(0.5, 0.5);
textJUEGOS.x=arraysphexa[2].sprite.x;
textJUEGOS.y=arraysphexa[2].sprite.y;

}
var textpeliculas ;
var textseries ;
var textJUEGOS;

function posicionatextos() {

  textpeliculas.x=arraysphexa[0].sprite.x;
  textpeliculas.y=arraysphexa[0].sprite.y;
  textseries.x=arraysphexa[1].sprite.x;
textseries.y=arraysphexa[1].sprite.y;
  textJUEGOS.x=arraysphexa[2].sprite.x;
  textJUEGOS.y=arraysphexa[2].sprite.y;

  
}

function onresizemio(){
vw=window.innerWidth*1;
vh=window.innerHeight;
//  sclegame= 0.5227722772277228
//console.log("yoo  "+ (vh/vw));
nuevogame();


}

function oklistophas(){
game = new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });

}






function onclikhexapeliculaspeliculsa1(){


  document.getElementById("idpaneldepeliculas").style.display="block";
  elfordecrearpeliculasenpanel1 ();
  ffbuscarlaspeliculas();

}

function onclikhexapeliculasseries2(){

document.getElementById("idpaneldepeliculas").style.display="block";
elfordecrearseriessenpanel1 ();
ffbuscarlaspeliculas();
 
}


function onclikhexajuegos3 () {  

  
}

// fin solo phaser