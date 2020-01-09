


var firebaseConfig;
var firebase;
var vid ;
var quetiposoyyo="";
var todayx = new Date();
var dd = String(todayx.getDate()).padStart(2, '0');
var mm = String(todayx.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = todayx.getFullYear();

var esverdadvisoreliculas=false;











var varid=0;
var stringpelis="";
var arrarypeliculas2019={};








function cambiotanaboventana(){
 // alert("tamaño de la ventana    "+ vw +"   "+vh);
  window.location.reload();
  
}
var vw=window.innerWidth;
var vh=window.innerHeight;
var vid = document.getElementById("idvideofondo");

function  getvwvh() { 
  
 vw=window.innerWidth;
 vh=window.innerHeight;
 }

$(document).ready(function(){

  $(window).on('hashchange', function(e){
    var origEvent = e.originalEvent;
    console.log('Going to: ' + origEvent.newURL + ' from: ' + origEvent.oldURL);
    alert('Going to: ' + origEvent.newURL + ' from: ' + origEvent.oldURL);
});
  $(window).on('resize', function(){
   
    cambiotanaboventana();  });



    $("#xb1").click(function(){
      fxb1();
      animacontroliniciL();
    });
    $("#xb2").click(function(){
      fxb2();
    });
 



    $("#xb3").click(function(){
      fxb3();
      animacontroliniciL();
    });



    $("#xb4").click(function(){
      fxb4();
      animacontroliniciL();
    });





    
    iniciafiregoo();

    traejsonpeliculas();
    terminoelvideov1();
  getvwvh();
  vid = document.getElementById("idvideofondo");
  iniciadeverdad ("");
 
setTimeout(function () {
  playVid();
  
},2000);

  });




  

  function iniciadeverdad () { 


    tamanosimg();
   }

var vbt=0.25;
   function  tamanosimg() {

    getvwvh();



    





//alert(vw+"  oks  "+vh);

     }

     
// maneja  video v1.mp4
function playvid2noinial () {
  if(document.getElementById("idvideofondo")){
    stopvid();
      try {
        animacontroliniciL();
      
       // vid = document.getElementById("idvideofondo");
        vid.play();
        settimeparapausarvideo();
      // vid.loop=true;
     
      } catch (error) {
       // alert(error);
      }
     
      
    
    }
  }
function playVid() {
if(document.getElementById("idvideofondo")){
stopvid();
  try {
    animacontrolfinal();
  
   // vid = document.getElementById("idvideofondo");
    vid.play();
    settimeparapausarvideo();
  // vid.loop=true;
 
  } catch (error) {
   // alert(error);
  }
 
  

}
   
}

function settimeparapausarvideo(){
  setTimeout(function () { 
    pauseVid();
    
   // vid.currentTime = 0;
   },13000);
}

function pauseVid() {
    vid.pause();
}

function stopvid(){
  vid.currentTime = 0;
  pauseVid();
 
 // vid.src="";
  //vid.src="v1.mp4";

 
} 




function terminoelvideov1(){
  vid=document.getElementById('idvideofondo');

vid.onended = function(e) {
  /*Do things here!*/
  stopvid();
 
};
}


// finde  tdo video;



// fin   maneja  video v1.mp4
setInterval(function(){

  document.getElementById("idyo").value="Giovanni Rodriguez Diaz";//vw+"  "+vh;
},2000);

   





function animacontrolfinal(){


  $("#xb1").animate({"left":"+="+String(vw*-0.46)},2000,function(){});
  $("#xb2").animate({"left":"+="+String(vw*-0.36)},2000,function(){});
  $("#xb3").animate({"left":"+="+String(vw*-0.46)},2000,function(){});
  $("#xb4").animate({"left":"+="+String(vw*0.34)},2000,function(){});
  $("#xb5").animate({"left":"+="+String(vw*0.24)},2000,function(){});
  $("#xb6").animate({"left":"+="+String(vw*0.34)},2000,function(){});
}

function animacontroliniciL(){

  $("#xb1").animate({"left":"+="+String(vw*0.46)},2000,function(){});
  $("#xb2").animate({"left":"+="+String(vw*0.36)},2000,function(){});
  $("#xb3").animate({"left":"+="+String(vw*0.46)},2000,function(){});
  $("#xb4").animate({"left":"+="+String(vw*-0.34)},2000,function(){});
  $("#xb5").animate({"left":"+="+String(vw*-0.24)},2000,function(){});
  $("#xb6").animate({"left":"+="+String(vw*-0.34)},2000,function(){});
}

document.getElementById('idvideofondo').addEventListener('ended',myHandler,false);
function myHandler(e) {
    // What you want to do after the event
    
}




function  detenervideov1(param) {  }







// llamado de los botones



// todod  sereis

// fin de  series

var arraryseries2019={};


function traejsonseries(){
  

       $.getJSON("./sec/series.json", function(result){
        
        arraryseries2019=result;
   
        traejsonjuegos();
      
        
      });
}




function fxb2(){

  quetiposoyyo="video";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearseriessenpanel1 ();
  ffbuscarlaspeliculas();

}

function elfordecrearseriessenpanel1 (){

  empityelementosid("#idverdaderopeliculas");
  for(var i in arraryseries2019){
    
    crealasseriesenpanel(arraryseries2019[i].idname,
arraryseries2019[i].title,arraryseries2019[i].pg);
      

  }
 }


 

 function crealasseriesenpanel(idname,idtitle,idimgurl){
  stringpelis="";
  //idimgurl='peli.jpg';

  stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualserie(this)'>"+
  "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
    "<p>valerianx</p>    </div>"+"</a>  </div>";


  $("#idverdaderopeliculas").append(stringpelis);


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
































// todo juegos

var arraryjuegos2019={};


function traejsonjuegos(){
  

       $.getJSON("./sec/juegos.json", function(result){
        
        arraryjuegos2019=result;
   
     
      traejsonlibros();
    //    traejsontelevision();;
     
        
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


function fxb3(){

  quetiposoyyo="juego";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearjuegosenpanel1 ();
  ffbuscarlaspeliculas();

}



// tpdpd ñibros





var arrarylibros019={};


function traejsonlibros(){
  

       $.getJSON("./sec/libros.json", function(result){
        
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








// fin de libros





function fxb4(){

  quetiposoyyo="libros";
  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearlibrosenpanel1 ();
  ffbuscarlaspeliculas();

}



//aca peliculas
function fxb1(){

  quetiposoyyo="video";

  document.getElementById("idpaneldepeliculas").style.display="flex";
  elfordecrearpeliculasenpanel1 ();
  ffbuscarlaspeliculas();


}
function elfordecrearpeliculasenpanel1 () { 
  empityelementosid("#idverdaderopeliculas");
  for(var i in arrarypeliculas2019){
    
crealaspeliculasenpanel(arrarypeliculas2019[i].idname,
arrarypeliculas2019[i].title,arrarypeliculas2019[i].img);
      

  }
 }

 function empityelementosid(idel){

  $(idel).empty();
}


function crealaspeliculasenpanel(idname,idtitle,idimgurl){
    stringpelis="";

    
    stringpelis=  "<div  class='column'><a id='"+ String(idname)+"'" +"  onclick='cualpeliculaespora(this)'>"+
    "<div class='card'>  <h3 class='pelih3'>"+idtitle+"<br></h3> <img  class='climgrwo' src='"+idimgurl+"'  "+"alt=''>"+
      "<p>valerianx</p>    </div>"+"</a>  </div>";


      
    $("#idverdaderopeliculas").append(stringpelis);


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



  var objetoiframe="";
  https://www.facebook.com/Ctermodinamica-1282370398566788/?modal=admin_todo_tour
  function cambiapeliscula(stsrc){  // iframe le pasa la pelicula o el video elibro juego lo que sea
  
  

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
  







function traejsonpeliculas(){
  

       $.getJSON("./sec/peliculas2019.json", function(result){
        
        arrarypeliculas2019=result;
   
     
        

      traejsonseries();

       
        
      });
}



// fin  peliculas

// codigo de  los botonescuando se pulzan




function onclikhexapeliculaspeliculsa1(){


}




//  fin codigo de  los botonescuando se pulzan







// television



var arrarytelevision019={};


function traejsontelevision(){
  

       $.getJSON("television.json", function(result){
        
        arrarytelevision019=result;
   
        

     
        
      });
}











// fin television











function fbtiramenu(){
 
cambiapeliscula("");


    document.getElementById("idvisorpelis").style.display="none";
    document.getElementById("idpaneldepeliculas").style.display="none";
    document.getElementById("btmostrarmenu").style.display="none";
    empityelementosid("#idverdaderopeliculas");

}















function deboocultatdeliframe (expressionx){
  esverdadvisoreliculas=true;
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


}
if(isMobile.Android()) {
//  console.log('Esto es un dispositivo Android');

//muestramensaje("El modulo TV es para  PC mientras ampliamos nuestra planta, descarga valerian para pc  https://giovannird.itch.io/valerianx");
document.getElementById("idblockokru").style.display="none";
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


if(vw>=810&&quetiposoyyo!="juego"&& quetiposoyyo!="libros"){



document.getElementById("idblockokrucentro").style.position="absolute";

document.getElementById("idblockokrucentro").style.top=String(vh)*0.01+"px";

setTimeout(function (param) {



if(esverdadvisoreliculas){

document.getElementById("idblockokrucentro").style.position="absolute";

document.getElementById("idblockokrucentro").style.top=String(vh)*0.3+"px";


}
else{ 

if(document.getElementById("idblockokrucentro").style.top==(String(vh)*0.3+"px")){
document.getElementById("idblockokrucentro").style.position="absolute";

document.getElementById("idblockokrucentro").style.top=String(vh)*0.01+"px";
}
}


},5000); 







}else{


}

//alert("mi pantalla es "+vw);

document.getElementById("idbtblockiframetop").style.display="none";
document.getElementById("idblockokru").style.display="none";
document.getElementById("idblockokrucentro").style.display="none";
document.getElementById("idbtblockiframedown").style.display="none";


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



 

function fcbtcerrarpanelpeliculas(){
playVid();
    document.getElementById("idpaneldepeliculas").style.display="none";
    document.getElementById("myInputpeli").value="";
   
}



function  ffbuscarlaspeliculas() {  


  valuebusca = $("#myInputpeli").val().toLowerCase();

  
 $("#idverdaderopeliculas a").filter(function() {
     $(this).toggle($(this).text().toLowerCase().indexOf(valuebusca) > -1);
    



 });


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




  function hoyeseldia() {

    todayx = new Date();
    dd = String(todayx.getDate()).padStart(2, '0');
    mm = String(todayx.getMonth() + 1).padStart(2, '0'); //January is 0!
    yyyy = todayx.getFullYear();
   
   todayx = mm + '/' + dd + '/' + yyyy;
    }




    function muestramensaje (paramx) {

      document.getElementById("idpanelmensajes").style.display="block";
      document.getElementById("idacamensajetask").innerHTML=paramx;
  
      }


      function cierratramensaje () {

        document.getElementById("idpanelmensajes").style.display="none";
        document.getElementById("idacamensajetask").innerHTML="";
        
        }
  
  
