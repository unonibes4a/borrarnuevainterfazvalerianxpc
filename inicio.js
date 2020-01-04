
var firebaseConfig;
var firebase;

var quetiposoyyo="";
var todayx = new Date();
var dd = String(todayx.getDate()).padStart(2, '0');
var mm = String(todayx.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = todayx.getFullYear();

todayx = mm + '/' + dd + '/' + yyyy;

$(document).ready(function(){
  cierratramensaje ();
    todoinicia();



  });



  function hoyeseldia() {

    todayx = new Date();
    dd = String(todayx.getDate()).padStart(2, '0');
    mm = String(todayx.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = todayx.getFullYear();
   
   todayx = mm + '/' + dd + '/' + yyyy;
    }
  function todoinicia(){
    hoyeseldia();
    iniciafiregoo();

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

       
        $("#idverdaderopeliculas a").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(valuebusca) > -1);
            //var scrollElm = docume.scrollingElement;
         
           // document.getElementById("idverdaderopeliculas").scrollingElement.scrollTop = 0;
//scrollElm.scrollTop = 0;
        

    


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





// juegos

var arraryjuegos2019={};


function traejsonjuegos(){
  

       $.getJSON("juegos.json", function(result){
        
        arraryjuegos2019=result;
   
        
     
        traejsonlibros();
        traejsontelevision();;
     
        
      });
}








function elfordecrearjuegosenpanel1 () { 
  empityelementosid("#idverdaderopeliculas");
  for(var i in arraryjuegos2019){
    
    crealasjuegosenpanel(arraryjuegos2019[i].idname,
arraryjuegos2019[i].title,arraryjuegos2019[i].img);
      

  }
 }




 function crealasjuegosenpanel(idname,idtitle,idimgurl){
  stringpelis="";

  
  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualjuegoespora(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


    
  $("#idverdaderopeliculas").append(stringpelis);


}









var estajuego="";


function cualjuegoespora(thiss){

  
estajuego=thiss;



for(var i in arraryjuegos2019){

    if(arraryjuegos2019[i].idname==estajuego.id){


        esverdadjuego=false;


        cambiapeliscula(arraryjuegos2019[i].pg);
    
    }
}
  }

// fin de  juegos










// inicio libros




var arrarylibros019={};


function traejsonlibros(){
  

       $.getJSON("libros.json", function(result){
        
        arrarylibros019=result;
   
        
      

     
        
      });
}








function elfordecrearlibrosenpanel1 () { 
  empityelementosid("#idverdaderopeliculas");
  for(var i in arrarylibros019){
    
    crealaslibrosenpanel(arrarylibros019[i].idname,
      arrarylibros019[i].title,arrarylibros019[i].img);
      


  }
 }




 function crealaslibrosenpanel(idname,idtitle,idimgurl){
  stringpelis="";

  
  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cuallibrospora(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


    
  $("#idverdaderopeliculas").append(stringpelis);


}









var estalibro="";


function cuallibrospora(thiss){

  
  estalibro=thiss;



for(var i in arrarylibros019){

    if(arrarylibros019[i].idname==estalibro.id){


        esverdadjuego=false;


        cambiapeliscula(arrarylibros019[i].pg);
    
    }
}
  }








//find e juegos










// inicio television




var arrarytelevision019={};


function traejsontelevision(){
  

       $.getJSON("television.json", function(result){
        
        arrarytelevision019=result;
   
        

     
        
      });
}








function elfordecreartelevisionenpanel1 () { 
  empityelementosid("#idverdaderopeliculas");
  for(var i in arrarytelevision019){
    
    crealastelevisionpanel(arrarytelevision019[i].idname,
      arrarytelevision019[i].title,arrarytelevision019[i].img);
      


  }
 }




 function crealastelevisionpanel(idname,idtitle,idimgurl){
  stringpelis="";

  
  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualtelevisionpora(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


    
  $("#idverdaderopeliculas").append(stringpelis);


}









var estatele="";


function cualtelevisionpora(thiss){

  
  estatele=thiss;







var isMobile = {
  Android: function() {
      return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function() {
      return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function() {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
  },
  any: function() {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
};




if(isMobile.any()) {

  muestramensaje('Esto es un dispositivo móvil, si especificar cuál');
}
if(isMobile.Android()) {
//  console.log('Esto es un dispositivo Android');

muestramensaje("El modulo TV es para  PC mientras ampliamos nuestra planta, descarga valerian para pc  https://giovannird.itch.io/valerianx");
 
}

else{
  if(isMobile.iOS()) {
    muestramensaje('Esto es un dispositivo iOS');
  }
  else{

    for(var i in arrarytelevision019){

      if(arrarytelevision019[i].idname==estatele.id){
  
  
          esverdadjuego=false;
  
  
          cambiapeliscula(arrarytelevision019[i].pg);
      
      }
  }
  
    
  }
  
}
if(isMobile.BlackBerry()) {
  muestramensaje('Esto es un dispositivo BlackBerry');
}
if(isMobile.iOS()) {
  muestramensaje('Esto es un dispositivo iOS');
}
if(isMobile.Opera()) {
  muestramensaje('Esto es un dispositivo Opera');
}
if(isMobile.Windows()) {
  muestramensaje('Esto es un dispositivo Windows');
}

















  }








//find e television




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

    
    stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualpeliculaespora(this)'>"+
    "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
      "<p>valerianx</p>    </div>"+"</a>  </div>";


      
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

     if(arrarypeliculas2019[i].idname==estapelicula.id){

 
         esverdadjuego=false;


         cambiapeliscula(arrarypeliculas2019[i].pg);
     
     }
 }
   }

 // series



 var arraryseries2019={};


 function traejsonseries(){
   
 
        $.getJSON("series.json", function(result){
         
         arraryseries2019=result;
    
         traejsonjuegos();
        
         
       });
 }




 function crealasseriesenpanel(idname,idtitle,idimgurl){
  stringpelis="";
  //idimgurl='peli.jpg';

  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualserie(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


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
  


  for(var i in arraryseries2019){
    
    if(arraryseries2019[i].idname==stestaserie){
      stimgparavideodetemop=arraryseries2019[i].pg;

//if(arraryseries2019[i].t){}
arrayestaseriees=arraryseries2019[i];


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


 festoyenestatemporada(arraysonestastemporadas); //tener 
}
var stimgparavideodetemop="";
var intcomteodevideos=0;
var arraytengolastemporadasseries=[];
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
  arraytengolastemporadasseries=[];
for(var i in arraypasada){


 arraytengolastemporadasseries.push(arraypasada[i]["temporada"]);
}

elforparacreapaneltemporadas();
}


function elforparacreapaneltemporadas(){
  empityelementosid("#idverdaderopeliculas");
for(var i in arraytengolastemporadasseries ){

 // arraytengolastemporadasseries
 creapaneltemporadaslistas(arraytengolastemporadasseries[i].idname,
  arraytengolastemporadasseries[i].title,stimgparavideodetemop);
}

}



function creapaneltemporadaslistas(idname,idtitle,idimgurl){
  stringpelis="";
  
  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualtemporada(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


  $("#idverdaderopeliculas").append(stringpelis);


}

var arraytengoestatemporada=[];
var stestatemporadaen="";// la  temporada  que tengo
function cualtemporada(thiss){

  arraytengoestatemporada=[];
  stestatemporadaen=thiss.id;
 
  for(var i in arraytengolastemporadasseries ){
if(arraytengolastemporadasseries[i].idname==stestatemporadaen){

  arraytengoestatemporada.push(arraytengolastemporadasseries[i]);

  break;
}
 
  }



  
  elforparacrearvideosdetempora();
}


var intconteovideos=0;
var arraytengolosvideosseries=[];

function elforparacrearvideosdetempora(){
  arraytengolosvideosseries=[];
  intconteovideos=0;
  empityelementosid("#idverdaderopeliculas");
  for(var i=0;i<400; i=i+1 ){
    intconteovideos=intconteovideos+1;
  
    if(arraytengoestatemporada[0]["v"+String(intconteovideos)])
    {
      arraytengolosvideosseries.push(arraytengoestatemporada[0]["v"+String(intconteovideos)]);

    }

  }

  
  creaelpanelconvideosdelatemporada();

}
//btvideospanel

var intenlosvideoscanti=0;
function creaelpanelconvideosdelatemporada(){
  intenlosvideoscanti=0;

  for(var i in arraytengolosvideosseries ){
    intenlosvideoscanti=intenlosvideoscanti+1;
    fstrinparacrearvideostemp(arraytengolosvideosseries[i].idname,"Episodio "+String(intenlosvideoscanti),
    stimgparavideodetemop);


    
  }

}





function fstrinparacrearvideostemp(idname,idtitle,idimgurl){
  stringpelis="";



  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualvideodelaserie(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


  $("#idverdaderopeliculas").append(stringpelis);


}


var esteelevideoqueveodeseri="";// video d eserie que quier ver
function cualvideodelaserie(thiss){
  esteelevideoqueveodeseri="";
  esteelevideoqueveodeseri=thiss.id;


  



abrirvideodeserie();

}



var stdireecciondelvideo="";

var     puedovervideoserie=false;
function abrirvideodeserie(){


  stdireecciondelvideo="";
  for(var i in arraytengolosvideosseries){

    if(arraytengolosvideosseries[i].idname==esteelevideoqueveodeseri){
    
      puedovervideoserie=true;
stdireecciondelvideo=arraytengolosvideosseries[i].pg;

//stdireecciondelvideo=arraysonestastemporadas[0]["temporada"]["v"+String(intcomteodevideos+1)].pg;

      break;
    }
  }
//aca
if(puedovervideoserie){
  puedovervideoserie=true;
  cambiapeliscula(stdireecciondelvideo);
 
}
  
}





function creapanelvideosdelatemp(idname,idtitle,idimgurl){
  stringpelis="";

  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualserie(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


  $("#idverdaderopeliculas").append(stringpelis);


}












var objetoiframe="";
https://www.facebook.com/Ctermodinamica-1282370398566788/?modal=admin_todo_tour
function cambiapeliscula(stsrc){  // iframe le pasa la pelicula o el video elibro juego lo que sea


detenerphaserudate();
document.getElementById("idpaneldepeliculas").style.display="none";



objetoiframe="";

document.getElementById("idvisorpelis").style.display="block";
document.getElementById("btmostrarmenu").style.display="block";


objetoiframe=document.getElementById("idiframe").src=stsrc;

elvideoanotfic=stsrc;
elidnamedelvideoanotific="id";

if(objetoiframe){
  document.getElementById("btmostrarenviavideonofunciona").style.display="block";
}
else{
  document.getElementById("btmostrarenviavideonofunciona").style.display="block";
}


deboocultatdeliframe(quetiposoyyo);
    
}



function GetDoc(x) {
  return x.contentDocument || x.contentWindow.document;
}












function fbtiramenu(){
try {esverdadjuego=true;
    nuevogame();
} catch (error) {
    
}
cambiapeliscula("");
reanudarphaserudate();

    document.getElementById("idvisorpelis").style.display="none";
    document.getElementById("idpaneldepeliculas").style.display="none";
    document.getElementById("btmostrarmenu").style.display="none";
    empityelementosid("#idverdaderopeliculas");

}



function fcbtcerrarpanelpeliculas(){
  reanudarphaserudate();
    document.getElementById("idpaneldepeliculas").style.display="none";
    document.getElementById("myInputpeli").value="";
   
}
































  
  // solo phaser

  var IDE_HOOK = false;
  var VERSION = '2.6.2';

  var arraysphexa=[];
var vw=window.innerWidth*1;
var vh=window.innerHeight;


//div  238  517  2.172268907563025 0.15
//div  654  1366  2.08868501529052

var sclegame=1;
var textCURSOS;
var texttelevision;

vw=window.innerWidth*1;
vh=window.innerHeight;
sclegame=0.000235571*(vw)+(0.028209658);

  var game; //= new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });

var graphics;

var textLIBROS;

function nuevogame(){
vw=window.innerWidth*1;
vh=window.innerHeight;
sclegame=0.000235571*(vw)+(0.028209658);

try {
  //game.destroy();
  game = new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });

} catch (error) {
  
}  

}

function preload() {

game.load.image('vidrio', 'vidrio2.png');
game.load.shader('bacteria', 'bacteria.frag');
game.load.image('fondo', 'fondo.jpg');



}
  


var texture;
var fondosp;
var sptextminombre="Giovanni Rodriguez Diaz";

function create() {

    arraysphexa=[];
game.stage.backgroundColor = '#000000';
fondosp= game.add.sprite(0, 0, 'fondo');
fondosp.width=vw;
fondosp.height=vh;
existelefiler=false;
try {
 filter = new Phaser.Filter(game, null, game.cache.getShader('bacteria'));
  if(filter)
  {texture= filter.addToWorld(0, 0, vw, vh);  existelefiler=true;}  
} catch (error) {
  
}



graphics = game.add.graphics(vw*0.36, vh*0.27);

drawShape(0x000000, 0xFFFFFF );

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

//arraysphexa[1].sprite.setTexture(texture, false)


sptextminombre= game.add.text(vw*0.05, vh*0.9, "vicite: https://giovannird.itch.io/valerianx", { font: "10px Arial", fill: "#33C7FF", align: "center" });
sptextminombre.anchor.setTo(0.0, 0.0);


sptextvalerian= game.add.text(vw*0.5, vh*0.2, "VALERIANX "+ todayx, { font: "17px Arial", fill: "#33C7FF", align: "center" });
sptextvalerian.anchor.setTo(0.5, 0.5);

setTimeout(function () {

  //game.paused=true;
  setTimeout(function () {

   // game.paused=false;
    },7000);
  },7000);
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
 textpeliculas = game.add.text(game.world.centerX, game.world.centerY, "PELICULAS", 
 { font: "10px Arial", fill: "#FFFFFF ", align: "center" });
textpeliculas.anchor.setTo(0.5, 0.5);
textpeliculas.x=arraysphexa[0].sprite.x;
textpeliculas.y=arraysphexa[0].sprite.y;

arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.16,py+vh*0.44,ps,pimg)});
arraysphexa[1].sprite.anchor.x=0.5;
arraysphexa[1].sprite.anchor.y=0.5;
arraysphexa[1].sprite.inputEnabled=true;
arraysphexa[1].sprite.input.draggable=true;
arraysphexa[1].sprite.events.onInputDown.add(onclikhexapeliculasseries2, this);



 textseries = game.add.text(game.world.centerX, game.world.centerY, "SERIES", 
 { font: "10px Arial", fill: "#FFFFFF", align: "center" });
textseries.anchor.setTo(0.5, 0.5);
textseries.x=arraysphexa[1].sprite.x;
textseries.y=arraysphexa[1].sprite.y;

arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.1,py+vh*0.71,ps,pimg)});
arraysphexa[2].sprite.anchor.x=0.5;
arraysphexa[2].sprite.anchor.y=0.5;
arraysphexa[2].sprite.inputEnabled=true;
arraysphexa[2].sprite.input.draggable=true;
arraysphexa[2].sprite.events.onInputDown.add(onclikhexajuegos3, this);

//arraysphexa[2].sprite.visible=false;
//arraysphexa[1].sprite.visible=false;
//arraysphexa[0].sprite.visible=false;

 textJUEGOS = game.add.text(game.world.centerX, game.world.centerY, "JUEGOS",
  { font: "10px Arial", fill: "#FFFFFF", align: "center" });
textJUEGOS.anchor.setTo(0.5, 0.5);
textJUEGOS.x=arraysphexa[2].sprite.x;
textJUEGOS.y=arraysphexa[2].sprite.y;





arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.9,py+vh*0.18,ps,pimg)});
arraysphexa[3].sprite.anchor.x=0.5;
arraysphexa[3].sprite.anchor.y=0.5;
arraysphexa[3].sprite.inputEnabled=true;
arraysphexa[3].sprite.input.draggable=true;
arraysphexa[3].sprite.events.onInputDown.add(onclikhexalibros3, this);






textLIBROS = game.add.text(game.world.centerX, game.world.centerY, "LIBROS",
  { font: "10px Arial", fill: "#FFFFFF", align: "center" });
  textLIBROS.anchor.setTo(0.5, 0.5);
  textLIBROS.x=arraysphexa[3].sprite.x;
  textLIBROS.y=arraysphexa[3].sprite.y;




  
  arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.84,py+vh*0.44,ps,pimg)});
  arraysphexa[4].sprite.anchor.x=0.5;
  arraysphexa[4].sprite.anchor.y=0.5;
  arraysphexa[4].sprite.inputEnabled=true;
  arraysphexa[4].sprite.input.draggable=true;
  arraysphexa[4].sprite.events.onInputDown.add(onclikhexacursos5, this);
  
  
  textCURSOS = game.add.text(game.world.centerX, game.world.centerY, "CURSOS",
{ font: "10px Arial", fill: "#FFFFFF", align: "center" });
textCURSOS.anchor.setTo(0.5, 0.5);
textCURSOS.x=arraysphexa[4].sprite.x;
textCURSOS.y=arraysphexa[4].sprite.y;

  
  



arraysphexa.push({id:1,sprite:creahexagonosprite(px+vw*0.9,py+vh*0.71,ps,pimg)});
arraysphexa[5].sprite.anchor.x=0.5;
arraysphexa[5].sprite.anchor.y=0.5;
arraysphexa[5].sprite.inputEnabled=true;
arraysphexa[5].sprite.input.draggable=true;
arraysphexa[5].sprite.events.onInputDown.add(onclikhexatelevison6, this);


texttelevision = game.add.text(game.world.centerX, game.world.centerY, "TELEVISION",
{ font: "10px Arial", fill: "#FFFFFF", align: "center" });
texttelevision.anchor.setTo(0.5, 0.5);
texttelevision.x=arraysphexa[5].sprite.x;
texttelevision.y=arraysphexa[5].sprite.y;






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


//detenerphaserudate();
//reanudarphaserudate();
//location.reload();
location.href = location.href;

}

function oklistophas(){
 game = new Phaser.Game(vw, vh, Phaser.AUTO, 'phaser-example', {update:update,preload: preload, create: create });


 //setTimeout(function(){onresizemio();},2000);
}






function onclikhexapeliculaspeliculsa1(){
  quetiposoyyo="video";

    document.getElementById("idpaneldepeliculas").style.display="flex";
    elfordecrearpeliculasenpanel1 ();
    ffbuscarlaspeliculas();

}

function onclikhexapeliculasseries2(){
  quetiposoyyo="video";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearseriessenpanel1 ();
  ffbuscarlaspeliculas();
   
}


function onclikhexajuegos3 () {  
  quetiposoyyo="juego";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearjuegosenpanel1 ();
  ffbuscarlaspeliculas();
}


function onclikhexalibros3(){

  quetiposoyyo="libros";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearlibrosenpanel1 ();
  ffbuscarlaspeliculas();

}

function onclikhexacursos5(){

  document.getElementById("idcodigocursos").style.display="flex";


}




function onclikhexatelevison6(){

  
  quetiposoyyo="tele";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecreartelevisionenpanel1 ();
  ffbuscarlaspeliculas();

}
function detenerphaserudate(){
  esverdadjuego=false;
  game.paused=true;
  game.destroy();
  $("#phaser-example").empty();
 // nuevogame();

}

function reanudarphaserudate(){
  esverdadjuego=true;
  //game.paused=false;
  try {
    if(game){
      game.paused=false;
      game.destroy();
      $("#phaser-example").empty();
    }
  } catch (error) {
    
  }
  $("#phaser-example").empty();
 
  nuevogame();

}


function iniciafiregoo()
{

   firebaseConfig = {



    apiKey: "AIzaSyB-BWfFE9cQEFsesxWwHE7KUtnnQQHMvAM",
    authDomain: "notifivalerianx.firebaseapp.com",
    databaseURL: "https://notifivalerianx.firebaseio.com",
    projectId: "notifivalerianx",
    storageBucket: "notifivalerianx.appspot.com",
    messagingSenderId: "311893602004",
    appId: "1:311893602004:web:a70a2c72cc11b8bd2c1541",
    measurementId: "G-ZBHW00SHK9"


  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

var objnotficarfirgoovideo={videourl:"videorll",id:"idnamees"};
var elvideoanotfic="";
var elidnamedelvideoanotific="";
function fvideonofunciona()  {
  //objnotficarfirgoovideo=[];
  hoyeseldia();
  objnotficarfirgoovideo={videourl:"videorll",id:"idnamees",hoyesx:todayx};
  objnotficarfirgoovideo={videourl:elvideoanotfic,id:elidnamedelvideoanotific,hoyesx:todayx};

  firebase.database().ref("notificar").push(objnotficarfirgoovideo);
  


  muestramensaje ("Estamos verificando el video gracias")

  }

  // fin solo phaser



var escodigocorrectocurso="false";
  function fbtcodigocursos(){
    escodigocorrectocurso=document.getElementById("idinpucodigocursos").value;
    document.getElementById("idcodigocursos").style.display="none";
 
    if(escodigocorrectocurso=="nadax"){}
    else{
      muestramensaje("codigo no valido " +escodigocorrectocurso);
   
    }
  } 
  
  function fbtcodigocursoscerrar(){
   
    document.getElementById("idcodigocursos").style.display="none";
 
  }


  function muestramensaje (paramx) {

    document.getElementById("idpanelmensajes").style.display="block";
    document.getElementById("idacamensajetask").innerHTML=paramx;

    }

    function cierratramensaje () {

      document.getElementById("idpanelmensajes").style.display="none";
      document.getElementById("idacamensajetask").innerHTML="";
      
      }












      function deboocultatdeliframe (expressionx){

        switch(expressionx) {
          case "video":
      
            // code block
            paraiframeconvideo ();
            break;
            case "juego":

         
              paraiframeconjuego ();
              // code block}

              break;  
            case "tele":

            
                paraiframeconjuego ();
                // code block
                    break;

          case "libros":
            paraiframeconpdf ();
            
          break;
          default:
            // code block
        }

      }



      function paraiframeconjuego (){ 

        if( document.getElementById("idvisorpelis")){
         
          document.getElementById("idbtblockiframetop").style.display="none";
          document.getElementById("idblockokru").style.display="none";
          document.getElementById("idblockokrucentro").style.display="none";
          document.getElementById("idbtblockiframedown").style.display="none";
        
        }

       }
      function paraiframeconvideo (){ 

if( document.getElementById("idvisorpelis")){
  document.getElementById("idbtblockiframetop").style.display="block";
  document.getElementById("idblockokru").style.display="block";
  document.getElementById("idblockokrucentro").style.display="block";
  document.getElementById("idbtblockiframedown").style.display="block";

}


       }
      function paraiframeconpdf (){ 


        if( document.getElementById("idvisorpelis")){
         
          document.getElementById("idbtblockiframetop").style.display="block";
          document.getElementById("idblockokru").style.display="none";
          document.getElementById("idblockokrucentro").style.display="none";
          document.getElementById("idbtblockiframedown").style.display="none";
        
        }


       }