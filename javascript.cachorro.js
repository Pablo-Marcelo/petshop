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


/* Rações*/
const sup = document.querySelector(".super-premium")
const sup2 = document.querySelector(".super-premium2")
const sup3 = document.querySelector(".super-premium3")
const sup4 = document.querySelector(".super-premium4")
const premiumesp = document.querySelector(".premium-especial")
const premiumesp2 = document.querySelector(".premium-especial2")
const premiumesp3 = document.querySelector(".premium-especial3")
const premiumesp4 = document.querySelector(".premium-especial4")
const premiumesp5 = document.querySelector(".premium-especial5")
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
const coleira3 = document.querySelector(".coleira3")
const coleira4 = document.querySelector(".coleira4")
const coleira5 = document.querySelector(".coleira5")
const coleira6 = document.querySelector(".coleira6")
const coleira7 = document.querySelector(".coleira7")
const coleira8 = document.querySelector(".coleira8")
const coleira9 = document.querySelector(".coleira9")
const coleira10 = document.querySelector(".coleira10")
const coleira11 = document.querySelector(".coleira11")
const comedouro = document.querySelector(".comedouro")
const comedouro2 = document.querySelector(".comedouro2")
const comedouro3 = document.querySelector(".comedouro3")
const comedouro4 = document.querySelector(".comedouro4")
const brinquedo = document.querySelector(".brinquedo")
const brinquedo2 = document.querySelector(".brinquedo2") 
const brinquedo3 = document.querySelector(".brinquedo3")                       
const casaetransp = document.querySelector(".casaetransporte") 
const casaetransp2 = document.querySelector(".casaetransporte2") 

const  butcoleira = document.getElementById("button-coleira")
const  butcomedouro = document.getElementById("button-comedouro")
const  butbrinquedo = document.getElementById("button-brinquedo")
const  butcasaetransp =  document.getElementById("button-casa-e-transporte")

/*Medicamentos*/
const antibi = document.querySelector(".antibiotico")
const antibi2 = document.querySelector(".antibiotico2")
const antibi3 = document.querySelector(".antibiotico3")
const antialergico = document.querySelector(".antialergico")
const antialergico2 = document.querySelector(".antialergico2")
const antialergico3 = document.querySelector(".antialergico3")
const vitamina = document.querySelector(".vitamina")
const vitamina2 = document.querySelector(".vitamina2")
const vitamina3 = document.querySelector(".vitamina3") 
const vitamina4 = document.querySelector(".vitamina4")
const vitamina5 = document.querySelector(".vitamina5")                      
const calmante = document.querySelector(".calmante") 
const calmante2 = document.querySelector(".calmante2")
const pulga = document.querySelector(".pulga") 
const pulga2 = document.querySelector(".pulga2")
const pulga3 = document.querySelector(".pulga3")
const pulga4 = document.querySelector(".pulga4")
const pulga5 = document.querySelector(".pulga5")
const pulga6 = document.querySelector(".pulga6")

const  butantibi= document.getElementById("button-antibiotico")
const  butantialergico = document.getElementById("button-antialergico")
const  butvitamina = document.getElementById("button-vitamina")
const  butcalmante =  document.getElementById("button-calmante")
const  butpulga = document.getElementById("button-pulga")

/*Higiênicos*/
const banho = document.querySelector(".banho")
const banho2 = document.querySelector(".banho2")
const fralderp = document.querySelector(".fralda-e-rp")
const fralderp2 = document.querySelector(".fralda-e-rp2")
const escova = document.querySelector(".escova")
const escova2 = document.querySelector(".escova2")                       
const tapete = document.querySelector(".tapete") 
const tapete2 = document.querySelector(".tapete2") 

const  butbanho = document.getElementById("button-banho")
const  butfralderp = document.getElementById("button-fralda-e-rp")
const  butescova = document.getElementById("button-escova")
const  buttapete =  document.getElementById("button-tapete")

/*Petiscos*/
const sache = document.querySelector(".sache-e-petisco")
const sache2 = document.querySelector(".sache-e-petisco2")
const biscrok = document.querySelector(".biscrok")
const biscrok2 = document.querySelector(".biscrok2")
const osso = document.querySelector(".osso")
const osso2 = document.querySelector(".osso2")                       
const bifinho = document.querySelector(".bifinho") 
const bifinho2 = document.querySelector(".bifinho2") 

const  butsache = document.getElementById("button-sache")
const  butbiscrok = document.getElementById("button-biscrok")
const  butosso = document.getElementById("button-osso")
const  butbifinho =  document.getElementById("button-bifinho")

/* Categoria Rações */

butsup.addEventListener('click', function(){ /*Botão Super-Premium*/

    if(sup.style.display === "block"){
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        sup.style.display = "block"
        sup2.style.display = "block"
        sup3.style.display = "block"
        sup4.style.display = "block"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"
        stand.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Super Premium"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          coleira3.style.display = "none"
          coleira4.style.display = "none"
          coleira5.style.display = "none"
          coleira6.style.display = "none"
          coleira7.style.display = "none"
          coleira8.style.display = "none"
          coleira9.style.display = "none"
          coleira10.style.display = "none"
          coleira11.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          comedouro3.style.display = "none"
          comedouro4.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"
        
          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"

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

butesp.addEventListener('click', function(){ /*Botão Premium-Especial*/

    if(premiumesp.style.display === "block"){
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        premiumesp.style.display = "block"
        premiumesp2.style.display = "block"
        premiumesp3.style.display = "block"
        premiumesp4.style.display = "block"
        premiumesp5.style.display = "block"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"
        stand.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Premium Especial"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          coleira3.style.display = "none"
          coleira4.style.display = "none"
          coleira5.style.display = "none"
          coleira6.style.display = "none"
          coleira7.style.display = "none"
          coleira8.style.display = "none"
          coleira9.style.display = "none"
          coleira10.style.display = "none"
          coleira11.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          comedouro3.style.display = "none"
          comedouro4.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          /*Higiênicos*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"

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

butpremium.addEventListener('click', function(){ /*Botão Premium*/

    if(premium.style.display === "block"){
        premium.style.display = "none"
        premium2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        premium.style.display = "block"
        premium2.style.display = "block"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        stand.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Premium"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          coleira3.style.display = "none"
          coleira4.style.display = "none"
          coleira5.style.display = "none"
          coleira6.style.display = "none"
          coleira7.style.display = "none"
          coleira8.style.display = "none"
          coleira9.style.display = "none"
          coleira10.style.display = "none"
          coleira11.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          comedouro3.style.display = "none"
          comedouro4.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          
          /*Higiênicos*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"

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

butstand.addEventListener('click', function(){ /*Botão Stand*/

    if(stand.style.display === "block"){
        stand.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                


    }else{
        stand.style.display = "block"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Stand"

          /*acessorios*/
          coleira.style.display = "none"
          coleira2.style.display = "none"
          coleira3.style.display = "none"
          coleira4.style.display = "none"
          coleira5.style.display = "none"
          coleira6.style.display = "none"
          coleira7.style.display = "none"
          coleira8.style.display = "none"
          coleira9.style.display = "none"
          coleira10.style.display = "none"
          coleira11.style.display = "none"
          comedouro.style.display = "none"
          comedouro2.style.display = "none"
          comedouro3.style.display = "none"
          comedouro4.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          casaetransp.style.display = "none"
          casaetransp2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

          
          /*Higiênicos*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"

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



/* Categoria Acessórios */



butcoleira.addEventListener('click', function(){ /*Botão Coleira*/

    if(coleira.style.display === "block"){
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        coleira.style.display = "block"
        coleira2.style.display = "block"
        coleira3.style.display = "block"
        coleira4.style.display = "block"
        coleira5.style.display = "block"
        coleira6.style.display = "block"
        coleira7.style.display = "block"
        coleira8.style.display = "block"
        coleira9.style.display = "block"
        coleira10.style.display = "block"
        coleira11.style.display = "block"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Coleiras"

        /*Raçôes*/
        stand.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        
          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

           /*Higiênico*/
           banho.style.display = "none"
           banho2.style.display = "none"
           fralderp.style.display = "none"
           fralderp2.style.display = "none"
           escova.style.display = "none"
           escova2.style.display = "none"
           tapete.style.display = "none"
           tapete2.style.display = "none"
        
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



butcomedouro.addEventListener('click', function(){ /*Botão Comedouro*/

    if(comedouro.style.display === "block"){
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        comedouro.style.display = "block"
        comedouro2.style.display = "block"
        comedouro2.style.display = "block"
        comedouro3.style.display = "block"
        comedouro4.style.display = "block"
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Comedouros"

        /*Raçôes*/
          stand.style.display = "none"

          sup.style.display = "none"
          sup2.style.display = "none"
          sup3.style.display = "none"
          sup4.style.display = "none"
          premiumesp.style.display = "none"
          premiumesp2.style.display = "none"
          premiumesp3.style.display = "none"
          premiumesp4.style.display = "none"
          premiumesp5.style.display = "none"
          premium.style.display = "none"
          premium2.style.display = "none"


          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

           /*Higiênico*/
           banho.style.display = "none"
           banho2.style.display = "none"
           fralderp.style.display = "none"
           fralderp2.style.display = "none"
           escova.style.display = "none"
           escova2.style.display = "none"
           tapete.style.display = "none"
           tapete2.style.display = "none"
        
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



butbrinquedo.addEventListener('click', function(){ /*Botão Brinquedo*/

    if(brinquedo.style.display === "block"){
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        brinquedo3.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        brinquedo.style.display = "block"
        brinquedo2.style.display = "block"
        brinquedo3.style.display = "block"
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Brinquedos"

          /*Raçôes*/
          stand.style.display = "none"

          sup.style.display = "none"
          sup2.style.display = "none"
          sup3.style.display = "none"
          sup4.style.display = "none"
          premiumesp.style.display = "none"
          premiumesp2.style.display = "none"
          premiumesp3.style.display = "none"
          premiumesp4.style.display = "none"
          premiumesp5.style.display = "none"
          premium.style.display = "none"
          premium2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          vitamina3.style.display = "none"
          vitamina4.style.display = "none"
          vitamina5.style.display = "none"
          antialergico.style.display = "none"
          antialergico2.style.display = "none"
          antialergico3.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          antibi3.style.display = "none"
          pulga.style.display = "none"
          pulga2.style.display = "none"
          pulga3.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          pulga4.style.display = "none"
          pulga5.style.display = "none"
          pulga6.style.display = "none"
          calmante.style.display = "none"
          calmante2.style.display = "none"

           /*Higiênico*/
           banho.style.display = "none"
           banho2.style.display = "none"
           fralderp.style.display = "none"
           fralderp2.style.display = "none"
           escova.style.display = "none"
           escova2.style.display = "none"
           tapete.style.display = "none"
           tapete2.style.display = "none"
        
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



butcasaetransp.addEventListener('click', function(){ /*Botão Casa-e-Transporte*/

    if(casaetransp.style.display === "block"){
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                


    }else{
        casaetransp.style.display = "block"
        casaetransp2.style.display = "block"
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Casinhas e Transportes"

         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         vitamina3.style.display = "none"
         vitamina4.style.display = "none"
         vitamina5.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antialergico3.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         antibi3.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         pulga3.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         calmante.style.display = "none"
         calmante2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"
       
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



/* Categoria Medicamentos */



butantibi.addEventListener('click', function(){ /*Botão Antibiótico*/

    if(antibi.style.display === "block"){
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        antibi.style.display = "block"
        antibi2.style.display = "block"
        antibi3.style.display = "block"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Antibióticos"
        
         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"
       
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
        antialergico3.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        antialergico.style.display = "block"
        antialergico2.style.display = "block"
        antialergico3.style.display = "block"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Antialérgico"
        
         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"
       
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
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        vitamina.style.display = "block"
        vitamina2.style.display = "block"
        vitamina3.style.display = "block"
        vitamina4.style.display = "block"
        vitamina5.style.display = "block"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Vitaminas"

         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"
       
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
        title.innerHTML = "Cães"                
        

    }else{
        calmante.style.display = "block"
        calmante2.style.display = "block"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Calmantes"
        
         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"
       
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
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        pulga.style.display = "block"
        pulga2.style.display = "block"
        pulga3.style.display = "block"
        pulga4.style.display = "block"
        pulga5.style.display = "block"
        pulga6.style.display = "block"
        tapete.style.display = "none"
        tapete2.style.display = "none"
        banho.style.display = "none"
        banho2.style.display = "none"
        fralderp.style.display = "none"
        fralderp2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Pulgas e Carrapatos / Sarnicida"

         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         vitamina3.style.display = "none"
         vitamina4.style.display = "none"
         vitamina5.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antialergico3.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         antibi3.style.display = "none"
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


butbanho.addEventListener('click', function(){ /*Botão calmante*/

    if(banho.style.display === "block"){
        banho.style.display = "none"
        banho2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        banho.style.display = "block"
        banho2.style.display = "block"
        fralderp.style.display = "none"
        fralderp2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        tapete.style.display = "none"
        tapete2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Shampoo e Condicionador"

        /*Raçôes*/
        stand.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
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



butfralderp.addEventListener('click', function(){ /*Botão calmante*/

    if(fralderp.style.display === "block"){
        fralderp.style.display = "none"
        fralderp2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        fralderp.style.display = "block"
        fralderp2.style.display = "block"
        banho.style.display = "none"
        banho2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        tapete.style.display = "none"
        tapete2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Fralda e Roupa Cirurgica"

         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         vitamina3.style.display = "none"
         vitamina4.style.display = "none"
         vitamina5.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antialergico3.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         antibi3.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         pulga3.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
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
        bifinho.style.display = "none"
        
    }


} )




butescova.addEventListener('click', function(){ /*Botão calmante*/

    if(escova.style.display === "block"){
        escova.style.display = "none"
        escova2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        escova.style.display = "block"
        escova2.style.display = "block"
        banho.style.display = "none"
        banho2.style.display = "none"
        fralderp.style.display = "none"
        fralderp2.style.display = "none"
        tapete.style.display = "none"
        tapete2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Escovas"

         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         vitamina3.style.display = "none"
         vitamina4.style.display = "none"
         vitamina5.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antialergico3.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         antibi3.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         pulga3.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
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




buttapete.addEventListener('click', function(){ /*Botão calmante*/

    if(tapete.style.display === "block"){
        tapete.style.display = "none"
        tapete2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        tapete.style.display = "block"
        tapete2.style.display = "block"
        banho.style.display = "none"
        banho2.style.display = "none"
        fralderp.style.display = "none"
        fralderp2.style.display = "none"
        escova.style.display = "none"
        escova2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Tapetes"

         /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         vitamina3.style.display = "none"
         vitamina4.style.display = "none"
         vitamina5.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antialergico3.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         antibi3.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         pulga3.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
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


/*Petisco*/

butsache.addEventListener('click', function(){ /*Botão calmante*/

    if(sache.style.display === "block"){
        sache.style.display = "none"
        sache2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        sache.style.display = "block"
        sache2.style.display = "block"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Saches e Patês"
        
        /*Raçôes*/
         stand.style.display = "none"

         sup.style.display = "none"
         sup2.style.display = "none"
         sup3.style.display = "none"
         sup4.style.display = "none"
         premiumesp.style.display = "none"
         premiumesp2.style.display = "none"
         premiumesp3.style.display = "none"
         premiumesp4.style.display = "none"
         premiumesp5.style.display = "none"
         premium.style.display = "none"
         premium2.style.display = "none"

         /*acessorios*/
         coleira.style.display = "none"
         coleira2.style.display = "none"
         coleira3.style.display = "none"
         coleira4.style.display = "none"
         coleira5.style.display = "none"
         coleira6.style.display = "none"
         coleira7.style.display = "none"
         coleira8.style.display = "none"
         coleira9.style.display = "none"
         coleira10.style.display = "none"
         coleira11.style.display = "none"
         comedouro.style.display = "none"
         comedouro2.style.display = "none"
         comedouro3.style.display = "none"
         comedouro4.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         casaetransp.style.display = "none"
         casaetransp2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         vitamina3.style.display = "none"
         vitamina4.style.display = "none"
         vitamina5.style.display = "none"
         antialergico.style.display = "none"
         antialergico2.style.display = "none"
         antialergico3.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         antibi3.style.display = "none"
         pulga.style.display = "none"
         pulga2.style.display = "none"
         pulga3.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         pulga4.style.display = "none"
         pulga5.style.display = "none"
         pulga6.style.display = "none"
         calmante.style.display = "none"
         calmante2.style.display = "none"

          /*Higiênico*/
          banho.style.display = "none"
          banho2.style.display = "none"
          fralderp.style.display = "none"
          fralderp2.style.display = "none"
          escova.style.display = "none"
          escova2.style.display = "none"
          tapete.style.display = "none"
          tapete2.style.display = "none"
        
    }


} )



butbiscrok.addEventListener('click', function(){ /*Botão calmante*/

    if(biscrok.style.display === "block"){
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        biscrok.style.display = "block"
        biscrok2.style.display = "block"
        sache.style.display = "none"
        sache2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Biscrok"

        /*Raçôes*/
        stand.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Higiênico*/
         banho.style.display = "none"
         banho2.style.display = "none"
         fralderp.style.display = "none"
         fralderp2.style.display = "none"
         escova.style.display = "none"
         escova2.style.display = "none"
         tapete.style.display = "none"
         tapete2.style.display = "none"
        
    }


} )



butosso.addEventListener('click', function(){ /*Botão calmante*/

    if(osso.style.display === "block"){
        osso.style.display = "none"
        osso2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        osso.style.display = "block"
        osso2.style.display = "block"
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Osso"

        /*Raçôes*/
        stand.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Higiênico*/
         banho.style.display = "none"
         banho2.style.display = "none"
         fralderp.style.display = "none"
         fralderp2.style.display = "none"
         escova.style.display = "none"
         escova2.style.display = "none"
         tapete.style.display = "none"
         tapete2.style.display = "none"
        
    }


} )



butbifinho.addEventListener('click', function(){ /*Botão calmante*/

    if(bifinho.style.display === "block"){
        bifinho.style.display = "none"
        bifinho2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Cães"                
        

    }else{
        bifinho.style.display = "block"
        bifinho2.style.display = "block"
        sache.style.display = "none"
        sache2.style.display = "none"
        biscrok.style.display = "none"
        biscrok2.style.display = "none"
        osso.style.display = "none"
        osso2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Bifinho"

        /*Raçôes*/
        stand.style.display = "none"
        sup.style.display = "none"
        sup2.style.display = "none"
        sup3.style.display = "none"
        sup4.style.display = "none"
        premiumesp.style.display = "none"
        premiumesp2.style.display = "none"
        premiumesp3.style.display = "none"
        premiumesp4.style.display = "none"
        premiumesp5.style.display = "none"
        premium.style.display = "none"
        premium2.style.display = "none"

        /*acessorios*/
        coleira.style.display = "none"
        coleira2.style.display = "none"
        coleira3.style.display = "none"
        coleira4.style.display = "none"
        coleira5.style.display = "none"
        coleira6.style.display = "none"
        coleira7.style.display = "none"
        coleira8.style.display = "none"
        coleira9.style.display = "none"
        coleira10.style.display = "none"
        coleira11.style.display = "none"
        comedouro.style.display = "none"
        comedouro2.style.display = "none"
        comedouro3.style.display = "none"
        comedouro4.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        casaetransp.style.display = "none"
        casaetransp2.style.display = "none"

        /*Medicamentos*/
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vitamina3.style.display = "none"
        vitamina4.style.display = "none"
        vitamina5.style.display = "none"
        antialergico.style.display = "none"
        antialergico2.style.display = "none"
        antialergico3.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        antibi3.style.display = "none"
        pulga.style.display = "none"
        pulga2.style.display = "none"
        pulga3.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        pulga4.style.display = "none"
        pulga5.style.display = "none"
        pulga6.style.display = "none"
        calmante.style.display = "none"
        calmante2.style.display = "none"

         /*Higiênico*/
         banho.style.display = "none"
         banho2.style.display = "none"
         fralderp.style.display = "none"
         fralderp2.style.display = "none"
         escova.style.display = "none"
         escova2.style.display = "none"
         tapete.style.display = "none"
         tapete2.style.display = "none"

       
        
    }


} )




 