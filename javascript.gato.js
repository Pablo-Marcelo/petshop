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

/* Manipulção do display da lista */

const racoes = document.getElementById("racoes")
const listracoes = document.querySelector(".list-racoes")

function racoesdisplay(){
    
    if(listracoes.style.display === "block"){
        listracoes.style.display = "none"
       
       
    }else{
        listracoes.style.display = "block"
        racoes.style.color = "20px"
    }
}



const listacess = document.querySelector(".list-acessorios")

function acessdisplay(){
    
    if(listacess.style.display === "block"){
        listacess.style.display = "none"

       
    }else{
        listacess.style.display = "block"
    }
}

const listmedi = document.querySelector(".list-medicamentos")

function medidisplay(){
    
    if(listmedi.style.display === "block"){
        listmedi.style.display = "none"

       
    }else{
        listmedi.style.display = "block"
    }
}


const listhigi = document.querySelector(".list-higienicos")

function higidisplay(){
    
    if(listhigi.style.display === "block"){
        listhigi.style.display = "none"

       
    }else{
        listhigi.style.display = "block"
    }
}


const listpeti = document.querySelector(".list-petiscos")

function petidisplay(){
    
    if(listpeti.style.display === "block"){
        listpeti.style.display = "none"

       
    }else{
        listpeti.style.display = "block"
    }
}

/* manipulação do conteudo das classes das listas */
const cont = document.querySelector(".container-1") 
const title = document.querySelector(".title-main-cachorro")
const card4 = document.querySelector(".card")


/* Rações*/
const sup = document.querySelector(".super-premium")
const sup2 = document.querySelector(".super-premium2")
const premiumesp = document.querySelector(".premium-especial")
const premiumesp2 = document.querySelector(".premium-especial2")
const premium = document.querySelector(".premium")
const premium2 = document.querySelector(".premium2")
const stand = document.querySelector(".stand")
const stand2 = document.querySelector(".stand2")

const butstand = document.getElementById("button-stand")
const butpremium = document.getElementById("button-premium")
const butesp = document.getElementById("button-premium-esp")
const butsup =  document.getElementById("button-sup")

/*Acessorios*/
const coleira = document.querySelector(".coleira")
const coleira2 = document.querySelector(".coleira2")
const comedouro = document.querySelector(".comedouro")
const comedouro2 = document.querySelector(".comedouro2")
const brinquedo = document.querySelector(".brinquedo")
const brinquedo2 = document.querySelector(".brinquedo2")                       
const casaetransp = document.querySelector(".casaetransporte") 
const casaetransp2 = document.querySelector(".casaetransporte2") 

const  butcoleira = document.getElementById("button-coleira")
const  butcomedouro = document.getElementById("button-comedouro")
const  butbrinquedo = document.getElementById("button-brinquedo")
const  butcasaetransp =  document.getElementById("button-casa-e-transporte")

/*Medicamentos*/
const antibi = document.querySelector(".antibiotico")
const antibi2 = document.querySelector(".antibiotico2")
const antialergico = document.querySelector(".antialergico")
const antialergico2 = document.querySelector(".antialergico2")
const vitamina = document.querySelector(".vitamina")
const vitamina2 = document.querySelector(".vitamina2")                       
const calmante = document.querySelector(".calmante") 
const calmante2 = document.querySelector(".calmante2")
const pulga = document.querySelector(".pulga") 
const pulga2 = document.querySelector(".pulga2")

const  butantibi= document.getElementById("button-antibiotico")
const  butantialergico = document.getElementById("button-antialergico")
const  butvitamina = document.getElementById("button-vitamina")
const  butcalmante =  document.getElementById("button-calmante")
const  butpulga =  document.getElementById("button-pulga")

/*Higiênicos*/
const banhoaseco = document.querySelector(".banho-a-seco")
const banhoaseco2 = document.querySelector(".banho-a-seco2")
const caixa = document.querySelector(".caixa")
const caixa2 = document.querySelector(".caixa2")
const escova = document.querySelector(".escova")
const escova2 = document.querySelector(".escova2")                       
const areia = document.querySelector(".areia") 
const areia2 = document.querySelector(".areia2") 

const  butbanhoaseco = document.getElementById("button-banho-a-seco")
const  butcaixa = document.getElementById("button-caixa")
const  butescova = document.getElementById("button-escova")
const  butareia =  document.getElementById("button-areia")

/*Petiscos*/
const sache = document.querySelector(".sache-e-petisco")
const sache2 = document.querySelector(".sache-e-petisco2")
const biscrok = document.querySelector(".biscrok")
const biscrok2 = document.querySelector(".biscrok2")
const boladepelo = document.querySelector(".bola-de-pelo")
const boladepelo2 = document.querySelector(".bola-de-pelo2")                       
const bifinho = document.querySelector(".bifinho") 
const bifinho2 = document.querySelector(".bifinho2") 

const  butsache = document.getElementById("button-sache")
const  butbiscrok = document.getElementById("button-biscrok")
const  butboladepelo = document.getElementById("button-bola-de-pelo")
const  butbifinho =  document.getElementById("button-bifinho")

/* Categoria Rações */

butsup.addEventListener('click', function(){ /*Botão Super-Premium*/

    if(sup.style.display === "block"){
        sup.style.display = "none"
        sup2.style.display = "none"
        cont.style.display = "block";   
        card4.style.display = "none"
        title.innerHTML = "Gato"                
        

    }else{
        sup.style.display = "block"
        sup2.style.display = "block"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"
        stand.style.display = "none"
        stand2.style.display = "none"
        cont.style.display = "none"
        card4.style.display = "none"
        title.innerHTML = "Super Premium"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"
        
          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"

          /*Petisco*/
          
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho2.style.display = "none"



         
    }


} )

butesp.addEventListener('click', function(){ /*Botão Premium-Especial*/

    if(premiumesp.style.display === "block"){
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        premiumesp.style.display = "block"
        premiumesp2.style.display = "block"
        sup.style.display = "none"
        sup2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"
        stand.style.display = "none"
        stand2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Premium Especial"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          /*Higiênicos*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"

          /*Petisco*/
          
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho2.style.display = "none"

        
    }


} )

butpremium.addEventListener('click', function(){ /*Botão Premium*/

    if(premium.style.display === "block"){
        premium.style.display = "none"
        premium2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        premium.style.display = "block"
        premium2.style.display = "block"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        stand.style.display = "none"
        stand2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Premium"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          
          /*Higiênicos*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"

          /*Petisco*/
          
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho2.style.display = "none"

          
        
    }


} )

butstand.addEventListener('click', function(){ /*Botão Stand*/

    if(stand.style.display === "block"){
        stand.style.display = "none"
        stand2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                


    }else{
        stand.style.display = "block"
        stand2.style.display = "block"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Stand"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"
          
          /*Higiênicos*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"

          /*Petisco*/
          
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho2.style.display = "none"
        
    }


} )



/* Categoria Acessórios */



butcoleira.addEventListener('click', function(){ /*Botão Coleira*/

    if(coleira.style.display === "block"){
        coleira.style.display = "none"
        coleira2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        coleira.style.display = "block"
        coleira2.style.display = "block"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Coleiras"

        /*Raçôes*/
        stand.style.display = "none"
        stand2.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        
          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

           /*Higiênico*/
           banhoaseco.style.display = "none"
           banhoaseco2.style.display = "none"
           caixa.style.display = "none"
           caixa2.style.display = "none"
           escova.style.display = "none"
           escova2.style.display = "none"
           areia.style.display = "none"
           areia2.style.display = "none"
        
          /*Petisco*/
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho.style.display = "none"
    }


} )



butcomedouro.addEventListener('click', function(){ /*Botão Comedouro*/

    if(comedouro.style.display === "block"){
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        comedouro.style.display = "block"
        comedouro2.style.display = "block"
        coleira.style.display = "none"
        coleira2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Comedouros"

        /*Raçôes*/
          stand.style.display = "none"
          stand2.style.display = "none"
          sup.style.display = "none"
          sup2.style.display = "none"
          premiumesp.style.display = "none"
          premiumesp2.style.display = "none"
          premium.style.display = "none"
          premium2.style.display = "none"


          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

           /*Higiênico*/
           banhoaseco.style.display = "none"
           banhoaseco2.style.display = "none"
           caixa.style.display = "none"
           caixa2.style.display = "none"
           escova.style.display = "none"
           escova2.style.display = "none"
           areia.style.display = "none"
           areia2.style.display = "none"
        
          /*Petisco*/
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho2.style.display = "none"
        
    }


} )



butbrinquedo.addEventListener('click', function(){ /*Botão Brinquedo*/

    if(brinquedo.style.display === "block"){
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        brinquedo.style.display = "block"
        brinquedo2.style.display = "block"
        coleira.style.display = "none"
        coleira2.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Brinquedos"

          /*Raçôes*/
          stand.style.display = "none"
          stand2.style.display = "none"
          sup.style.display = "none"
          sup2.style.display = "none"
          premiumesp.style.display = "none"
          premiumesp2.style.display = "none"
          premium.style.display = "none"
          premium2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

           /*Higiênico*/
           banhoaseco.style.display = "none"
           banhoaseco2.style.display = "none"
           caixa.style.display = "none"
           caixa2.style.display = "none"
           escova.style.display = "none"
           escova2.style.display = "none"
           areia.style.display = "none"
           areia2.style.display = "none"
        
          /*Petisco*/
         sache.style.display = "none"
         sache2.style.display = "none"
         biscrok.style.display = "none"
         biscrok2.style.display = "none"
         boladepelo.style.display = "none"
         boladepelo2.style.display = "none"
         bifinho.style.display = "none"
         bifinho2.style.display = "none"
        
    }


} )



butcasaetransp.addEventListener('click', function(){ /*Botão Casa-e-Transporte*/

    if(casaetransp.style.display === "block"){
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                


    }else{
        casaetransp.style.display = "block"
        casaetransp2.style.display = "block"
        coleira.style.display = "none"
        coleira2.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Casinhas e Transportes"

         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        
    }


} )



/* Categoria Medicamentos */




butantibi.addEventListener('click', function(){ /*Botão Antibiótico*/

    if(antibi.style.display === "block"){
        antibi.style.display = "none"
        antibi2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cachorro"                
        

    }else{
        antibi.style.display = "block"
        antibi2.style.display = "block"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Antibióticos"
        
         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
    }


} )


butantialergico.addEventListener('click', function(){ /*Botão Antialergico*/

    if(antialergico.style.display === "block"){
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cachorro"                
        

    }else{
        antialergico.style.display = "block"
        antialergico2.style.display = "block"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Antialérgico"
        
         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
    }


} )


butvitamina.addEventListener('click', function(){ /*Botão Vitamina*/

    if(vitamina.style.display === "block"){
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cachorro"                
        

    }else{
        vitamina.style.display = "block"
        vitamina2.style.display = "block"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Vitaminas"

         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
    }


} )


butcalmante.addEventListener('click', function(){ /*Botão calmante*/

    if(calmante.style.display === "block"){
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cachorro"                
        

    }else{
        calmante.style.display = "block"
        calmante2.style.display = "block"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Calmantes"
        
         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
    }


} )


butpulga.addEventListener('click', function(){ /*Botão calmante*/

    if(pulga.style.display === "block"){
        pulga.style.display = "none"
        pulga2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cachorro"                
        

    }else{
        pulga.style.display = "block"
        pulga2.style.display = "block"
        areia.style.display = "none"
        areia2.style.display = "none"
        banhoaseco.style.display = "none"
        banhoaseco2.style.display = "none"
        caixa.style.display = "none"
        caixa2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Pulgas e Carrapatos / Sarnicida"

         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         calmante.style.display = "none"
         calmante2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        
    }


} )





/*Higiênicos*/


butbanhoaseco.addEventListener('click', function(){ /*Botão Pomada*/

    if(banhoaseco.style.display === "block"){
        banhoaseco.style.display = "none"
        banhoaseco2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        banhoaseco.style.display = "block"
        banhoaseco2.style.display = "block"
        caixa.style.display = "none"
        caixa2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        areia.style.display = "none"
        areia2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Banho a Seco"

        /*Raçôes*/
        stand.style.display = "none"
        stand2.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"

        
    }


} )



butcaixa.addEventListener('click', function(){ /*Botão Pomada*/

    if(caixa.style.display === "block"){
        caixa.style.display = "none"
        caixa2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        caixa.style.display = "block"
        caixa2.style.display = "block"
        banhoaseco.style.display = "none"
        banhoaseco2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        areia.style.display = "none"
        areia2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Caixa de Areia"

         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        
    }


} )




butescova.addEventListener('click', function(){ /*Botão Pomada*/

    if(escova.style.display === "block"){
        escova.style.display = "none"
        escova2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        escova.style.display = "block"
        escova2.style.display = "block"
        banhoaseco.style.display = "none"
        banhoaseco2.style.display = "none"
        caixa.style.display = "none"
        caixa2.style.display = "none"
        areia.style.display = "none"
        areia2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Escovas"

         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         calmante.style.display = "none"
         calmante2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        
    }


} )




butareia.addEventListener('click', function(){ /*Botão Pomada*/

    if(areia.style.display === "block"){
        areia.style.display = "none"
        areia2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        areia.style.display = "block"
        areia2.style.display = "block"
        banhoaseco.style.display = "none"
        banhoaseco2.style.display = "none"
        caixa.style.display = "none"
        caixa2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Areias"

         /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         calmante.style.display = "none"
         calmante2.style.display = "none"
       
         /*Petisco*/
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        
    }


} )


/*Petisco*/

butsache.addEventListener('click', function(){ /*Botão Pomada*/

    if(sache.style.display === "block"){
        sache.style.display = "none"
        sache2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        sache.style.display = "block"
        sache2.style.display = "block"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Saches e Patês"
        
        /*Raçôes*/
         stand.style.display = "none"
         stand2.style.display = "none"
         sup.style.display = "none"
         sup2.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         calmante.style.display = "none"
         calmante2.style.display = "none"

          /*Higiênico*/
          banhoaseco.style.display = "none"
          banhoaseco2.style.display = "none"
          caixa.style.display = "none"
          caixa2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          areia.style.display = "none"
          areia2.style.display = "none"
        
    }


} )



butbiscrok.addEventListener('click', function(){ /*Botão Pomada*/

    if(biscrok.style.display === "block"){
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        biscrok.style.display = "block"
        biscrok2.style.display = "block"
        sache.style.display = "none"
        sache2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Biscrok"

        /*Raçôes*/
        stand.style.display = "none"
        stand2.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Higiênico*/
         banhoaseco.style.display = "none"
         banhoaseco2.style.display = "none"
         caixa.style.display = "none"
         caixa2.style.display = "none"
         escova.style.display = "none"
         escova2.style.display = "none"
         areia.style.display = "none"
         areia2.style.display = "none"
        
    }


} )



butboladepelo.addEventListener('click', function(){ /*Botão Pomada*/

    if(boladepelo.style.display === "block"){
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        boladepelo.style.display = "block"
        boladepelo2.style.display = "block"
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Bola de Pelos"

        /*Raçôes*/
        stand.style.display = "none"
        stand2.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Higiênico*/
         banhoaseco.style.display = "none"
         banhoaseco2.style.display = "none"
         caixa.style.display = "none"
         caixa2.style.display = "none"
         escova.style.display = "none"
         escova2.style.display = "none"
         areia.style.display = "none"
         areia2.style.display = "none"
        
    }


} )



butbifinho.addEventListener('click', function(){ /*Botão Pomada*/

    if(bifinho.style.display === "block"){
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Gato"                
        

    }else{
        bifinho.style.display = "block"
        bifinho2.style.display = "block"
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        boladepelo.style.display = "none"
        boladepelo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Bifinho"

        /*Raçôes*/
        stand.style.display = "none"
        stand2.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Higiênico*/
         banhoaseco.style.display = "none"
         banhoaseco2.style.display = "none"
         caixa.style.display = "none"
         caixa2.style.display = "none"
         escova.style.display = "none"
         escova2.style.display = "none"
         areia.style.display = "none"
         areia2.style.display = "none"

       
        
    }


} )




 