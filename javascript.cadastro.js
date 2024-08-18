let cachorro = document.getElementById("pet-cachorro")
let gato = document.getElementById("pet-gato")
let peixe = document.getElementById("pet-peixe")
let casa = document.getElementById("pet-casa")


/* cachorro*/
function onmouseoverDog(){
    cachorro.src = "logo-icos/cachorro-laranja.png"
    
}

function onmouseoutDog(){
    cachorro.src = "logo-icos/cachorro-branco.png"
}

/*Gato*/
function onmouseoverCat(){
    gato.src = "logo-icos/gato-laranja.png"
}

function onmouseoutCat(){
    gato.src = "logo-icos/gato-branco.png"
}

/*peixe*/
function onmouseoverFish(){
    peixe.src = "logo-icos/peixe-laranja.png"
}

function onmouseoutFish(){
    peixe.src = "logo-icos/peixe-branco.png"
}

/* casa */
function onmouseoverHouse(){
    casa.src = "logo-icos/casa-laranja.png"
}

function onmouseoutHouse(){
    casa.src = "logo-icos/casa-branca.png"
}

/* validando formulario */

const form   = document.querySelector(".validate")
const inp    = document.querySelectorAll(".inp-requerid")
const spans  = document.querySelectorAll(".spans-requerid")
const select = document.querySelectorAll(".select-requerid")
/*teste para ver se o email é valido*/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

/*inicia o formulario apenas se os campos forem preenchidos*/
/*form.addEventListener('submit' , (event) =>{
    event.preventDefault();
    valiName()
    valiemail()
    valitelefone()
    valicep()
})
  */
function setErro(index){
  
    inp[index].style.border = "2px solid #e63636"
    inp[index].style.margin = "-2px"
    spans[index].style.display = "block"
   
}

function removeErro(index){
    inp[index].style.border = ""
    spans[index].style.display = "none"
}




function valiName(){

    if(inp[0].value.length < 3){
        setErro(0)
    }
    else{
        removeErro(0)
        inp[0].style.marginBottom = "10px"
        
    }
}

function valiemail(){

    if(emailRegex.test(inp[1].value)){
       removeErro(1)
       inp[1].style.marginBottom = "10px"
      
     
    
    }else{

        setErro(1)
    }
}

function valitelefone(){

    if(inp[2].value.length != 11 ){
        setErro(2)

    }else {

        removeErro(2)
        inp[2].style.marginBottom = "10px"
    }
}

function valicep(){

    if(inp[3].value.length != 8){
        setErro(3)

    }else{
        
        removeErro(3)
        inp[3].style.marginBottom = "10px"
    }
}

