

var intervalo_laranja = "";
var intervalo_vermelho = "";
var intervalo_purpura = "";

var ativo = false;
var ativo1 = false;
var ativo2 = false;
let intervalos = "";

if(document.getElementById('btn-laranja').clicked == true)
{
   alert("button was clicked");
}


document.getElementById("btn-laranja").addEventListener("click", function laranja1(){
    
    
    document.querySelector("body").setAttribute("class","laranja");
    console.log("Laranja");

     clearInterval(intervalos);
     intervalos = setInterval(() =>{laranja1()}, 2000);
 
    return intervalos;

    
  })
  
  document.getElementById("btn-vermelho").addEventListener("click", function vermelho1(){
    document.querySelector("body").setAttribute("class","vermelho");
    console.log("vermelho");

     clearInterval(intervalos);
     intervalos = setInterval(() =>{vermelho1()}, 2000);
   

    return intervalos;
  
    
 
  })
  
  document.getElementById("btn-purpura").addEventListener("click", function purpura1(){
    document.querySelector("body").setAttribute("class","purpura");
    console.log("purpura");
 
    clearInterval(intervalos);
    intervalos = setInterval(() =>{purpura1()}, 2000);
  
    return intervalos;

  })



