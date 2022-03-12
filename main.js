

var intervalo_laranja = "";
var intervalo_vermelho = "";
var intervalo_purpura = "";

var ativo = false;
var ativo1 = false;
var ativo2 = false;
let intervalos = "";
//var button1 = document.querySelector('btn-laranja');
if(document.getElementById('btn-laranja').clicked == true)
{
   alert("button was clicked");
}


document.getElementById("btn-laranja").addEventListener("click", function laranja1(){
    
    
    document.querySelector("body").setAttribute("class","laranja");
    console.log("Laranja");
    //purpura1(pararpurpura());
    //vermelho1(pararvermelho());
    //if (ativo) return;
    //ativo = true;
     //intervalo_laranja = setInterval(() =>{laranja1()}, 2000);
     clearInterval(intervalos);
     intervalos = setInterval(() =>{laranja1()}, 2000);
     //intervalo_vermelho = setInterval(() =>{vermelho1()}, 2000);
     //intervalo_purpura = setInterval(() =>{purpura1()}, 2000);
   
    //intervalo_laranja = executarFunc(laranja1);
    //clearInterval(intervalo_vermelho);
    //clearInterval(intervalo_purpura);
    //intervalo_laranja = setInterval(() =>{laranja1()}, 2000);
    return intervalos;
    //if (intervalo_laranja) return;
    //intervalo_laranja = intervalo_laranja;
    //function pararlaranja(){
     // alert("para laranja");
   // }
    
  })
  
  document.getElementById("btn-vermelho").addEventListener("click", function vermelho1(){
    document.querySelector("body").setAttribute("class","vermelho");
    console.log("vermelho");
    //if (ativo1) return;
   // ativo1 = true;
   //pararlaranja();
   //pararpurpura();
     //intervalo_laranja = setInterval(() =>{laranja1()}, 2000);
     //intervalo_vermelho = setInterval(() =>{vermelho1()}, 2000);
     //intervalo_purpura = setInterval(() =>{purpura1()}, 2000);
     clearInterval(intervalos);
     intervalos = setInterval(() =>{vermelho1()}, 2000);
   
    //intervalo_vermelho = executarFunc(vermelho1);
    //clearInterval(intervalo_laranja);
    //clearInterval(intervalo_purpura);
    
    //return intervalo_vermelho;
    //if (intervalo_vermelho) return;
    //intervalo_vermelho = intervalo_vermelho;
    return intervalos;
    //function pararvermelho(){
    //  alert("para vermelho");
   // }
    
 
  })
  
  document.getElementById("btn-purpura").addEventListener("click", function purpura1(){
    document.querySelector("body").setAttribute("class","purpura");
    console.log("purpura");
    //pararlaranja();
    //pararvermelho();
    //if (ativo1) return;
    //ativo1 = true;
    //intervalo_laranja = setInterval(() =>{laranja1()}, 2000);
   // intervalo_vermelho = setInterval(() =>{vermelho1()}, 2000);
    //intervalo_purpura = setInterval(() =>{purpura1()}, 2000);
    clearInterval(intervalos);
    intervalos = setInterval(() =>{purpura1()}, 2000);
    //intervalo_purpura = executarFunc(purpura1);
    //clearInterval(intervalo_laranja);
    //clearInterval(intervalo_vermelho);
    
    //return intervalo_purpura;
   //if (intervalo_purpura) return;
   //intervalo_purpura = intervalo_purpura;
    return intervalos;
  //function pararpurpura(){
   // alert("para purpura");
  //}
  })


  //function executarFunc(callback){
    
  //  clearInterval(intervalos);
  //  intervalos = setInterval(() =>{callback()}, 2000);
  //  return intervalos;
 
//}

