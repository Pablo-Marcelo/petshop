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

/*
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
*/

/* manipulação do conteudo das classes das listas */
const cont = document.querySelector(".container-1") 
const title = document.querySelector(".title-main-cachorro")

/* Rações*/
const mistura = document.querySelector(".mistura")
const mistura2 = document.querySelector(".mistura2")
const calopsita = document.querySelector(".calopsita")
const calopsita2 = document.querySelector(".calopsita2")
const coleiro = document.querySelector(".coleiro")
const coleiro2 = document.querySelector(".coleiro2")
const trinca = document.querySelector(".trinca-ferro")
const trinca2 = document.querySelector(".trinca-ferro2")

const butmistura = document.getElementById("button-mistura")
const butcalopsita = document.getElementById("button-calopsita")
const butcoleiro = document.getElementById("button-coleiro")
const buttrinca =  document.getElementById("button-trinca-ferro")

/*Acessorios*/
const portavitamina = document.querySelector(".porta-vitamina")
const portavitamina2 = document.querySelector(".porta-vitamina2")
const bebedouro = document.querySelector(".bebedouro")
const bebedouro2 = document.querySelector(".bebedouro2")
const brinquedo = document.querySelector(".brinquedo")
const brinquedo2 = document.querySelector(".brinquedo2")                       
const banheira = document.querySelector(".banheira") 
const banheira2 = document.querySelector(".banheira2") 

const  butportavitamina = document.getElementById("button-porta-vitamina")
const  butbebedouro = document.getElementById("button-bebedouro")
const  butbrinquedo = document.getElementById("button-brinquedo")
const  butbanheira =  document.getElementById("button-banheira")

/*Medicamnetos*/
const antibi = document.querySelector(".antibiotico")
const antibi2 = document.querySelector(".antibiotico2")
const antiinf = document.querySelector(".anti-inflamatorio")
const antiinf2 = document.querySelector(".anti-inflamatorio2")
const vitamina = document.querySelector(".vitamina")
const vitamina2 = document.querySelector(".vitamina2")                       
const vermifugo = document.querySelector(".vermifugo") 
const vermifugo2 = document.querySelector(".vermifugo2") 

const  butantibi= document.getElementById("button-antibiotico")
const  butantiinf = document.getElementById("button-anti-inflamatorio")
const  butvitamina = document.getElementById("button-vitamina")
const  butvermifugo =  document.getElementById("button-vermifugo")

/*Higiênicos*/
/*
const shampecond = document.querySelector(".shampoo-e-condicionador")
const shampecond2 = document.querySelector(".shampoo-e-condicionador2")
const fralderp = document.querySelector(".fralda-e-rp")
const fralderp2 = document.querySelector(".fralda-e-rp2")
const escova = document.querySelector(".escova")
const escova2 = document.querySelector(".escova2")                       
const tapete = document.querySelector(".tapete") 
const tapete2 = document.querySelector(".tapete2") 

const  butshampecond = document.getElementById("button-shampoo-e-condicionador")
const  butfralderp = document.getElementById("button-fralda-e-rp")
const  butescova = document.getElementById("button-escova")
const  buttapete =  document.getElementById("button-tapete")
*/

/*Petiscos*/
/*
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
/* 

/* Categoria Rações */

butmistura.addEventListener('click', function(){ /*Botão misturaer-coleiro*/

    if(mistura.style.display === "block"){
        mistura.style.display = "none"
        mistura2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        mistura.style.display = "block"
        mistura2.style.display = "block"
        calopsita.style.display = "none"
        calopsita2.style.display = "none"
        coleiro.style.display = "none"
        coleiro2.style.display = "none"
        trinca.style.display = "none"
        trinca2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Mistura"

          /*acessorios*/
          portavitamina.style.display = "none"
          portavitamina2.style.display = "none"
          bebedouro.style.display = "none"
          bebedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          banheira.style.display = "none"
          banheira2.style.display = "none"
        
          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

          /*Higiênico*/
          shampecond.style.display = "none"
          shampecond2.style.display = "none"
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

butcalopsita.addEventListener('click', function(){ /*Botão coleiro-Especial*/

    if(calopsita.style.display === "block"){
        calopsita.style.display = "none"
        calopsita2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        calopsita.style.display = "block"
        calopsita2.style.display = "block"
        mistura.style.display = "none"
        mistura2.style.display = "none"
        coleiro.style.display = "none"
        coleiro2.style.display = "none"
        trinca.style.display = "none"
        trinca2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Calopsita"

          /*acessorios*/
          portavitamina.style.display = "none"
          portavitamina2.style.display = "none"
          bebedouro.style.display = "none"
          bebedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          banheira.style.display = "none"
          banheira2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

          /*Higiênicos*/
          shampecond.style.display = "none"
          shampecond2.style.display = "none"
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

butcoleiro.addEventListener('click', function(){ /*Botão coleiro*/

    if(coleiro.style.display === "block"){
        coleiro.style.display = "none"
        coleiro2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        coleiro.style.display = "block"
        coleiro2.style.display = "block"
        mistura.style.display = "none"
        mistura2.style.display = "none"
        calopsita.style.display = "none"
        calopsita2.style.display = "none"
        trinca.style.display = "none"
        trinca2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Coleiro"

          /*acessorios*/
          portavitamina.style.display = "none"
          portavitamina2.style.display = "none"
          bebedouro.style.display = "none"
          bebedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          banheira.style.display = "none"
          banheira2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

          
          /*Higiênicos*/
          shampecond.style.display = "none"
          shampecond2.style.display = "none"
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

buttrinca.addEventListener('click', function(){ /*Botão trinca*/

    if(trinca.style.display === "block"){
        trinca.style.display = "none"
        trinca2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                


    }else{
        trinca.style.display = "block"
        trinca2.style.display = "block"
        mistura.style.display = "none"
        mistura2.style.display = "none"
        calopsita.style.display = "none"
        calopsita2.style.display = "none"
        coleiro.style.display = "none"
        coleiro2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "trinca-Ferro"

          /*acessorios*/
          portavitamina.style.display = "none"
          portavitamina2.style.display = "none"
          bebedouro.style.display = "none"
          bebedouro2.style.display = "none"
          brinquedo.style.display = "none"
          brinquedo2.style.display = "none"
          banheira.style.display = "none"
          banheira2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

          
          /*Higiênicos*/
          shampecond.style.display = "none"
          shampecond2.style.display = "none"
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



butportavitamina.addEventListener('click', function(){ /*Botão portavitamina*/

    if(portavitamina.style.display === "block"){
        portavitamina.style.display = "none"
        portavitamina2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        portavitamina.style.display = "block"
        portavitamina2.style.display = "block"
        bebedouro.style.display = "none"
        bebedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        banheira.style.display = "none"
        banheira2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Porta Vitaminas"

        /*Raçôes*/
        trinca.style.display = "none"
        trinca2.style.display = "none"
        mistura.style.display = "none"
        mistura2.style.display = "none"
        calopsita.style.display = "none"
        calopsita2.style.display = "none"
        coleiro.style.display = "none"
        coleiro2.style.display = "none"

        
          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

           /*Higiênico*/
           shampecond.style.display = "none"
           shampecond2.style.display = "none"
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



butbebedouro.addEventListener('click', function(){ /*Botão bebedouro*/

    if(bebedouro.style.display === "block"){
        bebedouro.style.display = "none"
        bebedouro2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        bebedouro.style.display = "block"
        bebedouro2.style.display = "block"
        portavitamina.style.display = "none"
        portavitamina2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        banheira.style.display = "none"
        banheira2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Bebedouros"

        /*Raçôes*/
          trinca.style.display = "none"
          trinca2.style.display = "none"
          mistura.style.display = "none"
          mistura2.style.display = "none"
          calopsita.style.display = "none"
          calopsita2.style.display = "none"
          coleiro.style.display = "none"
          coleiro2.style.display = "none"


          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

           /*Higiênico*/
           shampecond.style.display = "none"
           shampecond2.style.display = "none"
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
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        brinquedo.style.display = "block"
        brinquedo2.style.display = "block"
        portavitamina.style.display = "none"
        portavitamina2.style.display = "none"
        bebedouro.style.display = "none"
        bebedouro2.style.display = "none"
        banheira.style.display = "none"
        banheira2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Brinquedos"

          /*Raçôes*/
          trinca.style.display = "none"
          trinca2.style.display = "none"
          mistura.style.display = "none"
          mistura2.style.display = "none"
          calopsita.style.display = "none"
          calopsita2.style.display = "none"
          coleiro.style.display = "none"
          coleiro2.style.display = "none"

          /*Medicamentos*/
          vitamina.style.display = "none"
          vitamina2.style.display = "none"
          antiinf.style.display = "none"
          antiinf2.style.display = "none"
          antibi.style.display = "none"
          antibi2.style.display = "none"
          vermifugo.style.display = "none"
          vermifugo2.style.display = "none"

           /*Higiênico*/
           shampecond.style.display = "none"
           shampecond2.style.display = "none"
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



butbanheira.addEventListener('click', function(){ /*Botão Casa-e-Transporte*/

    if(banheira.style.display === "block"){
        banheira.style.display = "none"
        banheira2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                


    }else{
        banheira.style.display = "block"
        banheira2.style.display = "block"
        portavitamina.style.display = "none"
        portavitamina2.style.display = "none"
        bebedouro.style.display = "none"
        bebedouro2.style.display = "none"
        brinquedo.style.display = "none"
        brinquedo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Banheiras"

         /*Raçôes*/
         trinca.style.display = "none"
         trinca2.style.display = "none"
         mistura.style.display = "none"
         mistura2.style.display = "none"
         calopsita.style.display = "none"
         calopsita2.style.display = "none"
         coleiro.style.display = "none"
         coleiro2.style.display = "none"

         /*Medicamentos*/
         vitamina.style.display = "none"
         vitamina2.style.display = "none"
         antiinf.style.display = "none"
         antiinf2.style.display = "none"
         antibi.style.display = "none"
         antibi2.style.display = "none"
         vermifugo.style.display = "none"
         vermifugo2.style.display = "none"

        
    }


} )



/* Categoria Medicamentos */



butantibi.addEventListener('click', function(){ /*Botão Antibiótico*/

    if(antibi.style.display === "block"){
        antibi.style.display = "none"
        antibi2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        antibi.style.display = "block"
        antibi2.style.display = "block"
        antiinf.style.display = "none"
        antiinf2.style.display = "none"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vermifugo.style.display = "none"
        vermifugo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Antibióticos"
        
         /*Raçôes*/
         trinca.style.display = "none"
         trinca2.style.display = "none"
         mistura.style.display = "none"
         mistura2.style.display = "none"
         calopsita.style.display = "none"
         calopsita2.style.display = "none"
         coleiro.style.display = "none"
         coleiro2.style.display = "none"

         /*acessorios*/
         portavitamina.style.display = "none"
         portavitamina2.style.display = "none"
         bebedouro.style.display = "none"
         bebedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         banheira.style.display = "none"
         banheira2.style.display = "none"

    }


} )


butantiinf.addEventListener('click', function(){ /*Botão Anti-Inflamatorio*/

    if(antiinf.style.display === "block"){
        antiinf.style.display = "none"
        antiinf2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        antiinf.style.display = "block"
        antiinf2.style.display = "block"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        vermifugo.style.display = "none"
        vermifugo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Anti-Inflamatórios"
        
         /*Raçôes*/
         trinca.style.display = "none"
         trinca2.style.display = "none"
         mistura.style.display = "none"
         mistura2.style.display = "none"
         calopsita.style.display = "none"
         calopsita2.style.display = "none"
         coleiro.style.display = "none"
         coleiro2.style.display = "none"

         /*acessorios*/
         portavitamina.style.display = "none"
         portavitamina2.style.display = "none"
         bebedouro.style.display = "none"
         bebedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         banheira.style.display = "none"
         banheira2.style.display = "none"

    }


} )


butvitamina.addEventListener('click', function(){ /*Botão Vitamina*/

    if(vitamina.style.display === "block"){
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        vitamina.style.display = "block"
        vitamina2.style.display = "block"
        antiinf.style.display = "none"
        antiinf2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        vermifugo.style.display = "none"
        vermifugo2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Vitaminas"

         /*Raçôes*/
         trinca.style.display = "none"
         trinca2.style.display = "none"
         mistura.style.display = "none"
         mistura2.style.display = "none"
         calopsita.style.display = "none"
         calopsita2.style.display = "none"
         coleiro.style.display = "none"
         coleiro2.style.display = "none"

         /*acessorios*/
         portavitamina.style.display = "none"
         portavitamina2.style.display = "none"
         bebedouro.style.display = "none"
         bebedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         banheira.style.display = "none"
         banheira2.style.display = "none"

    }


} )


butvermifugo.addEventListener('click', function(){ /*Botão vermifugo*/

    if(vermifugo.style.display === "block"){
        vermifugo.style.display = "none"
        vermifugo2.style.display = "none"
        cont.style.display = "block";   
        title.innerHTML = "Passaros"                
        

    }else{
        vermifugo.style.display = "block"
        vermifugo2.style.display = "block"
        vitamina.style.display = "none"
        vitamina2.style.display = "none"
        antiinf.style.display = "none"
        antiinf2.style.display = "none"
        antibi.style.display = "none"
        antibi2.style.display = "none"
        cont.style.display = "none"
        title.innerHTML = "Vermífugos"
        
         /*Raçôes*/
         trinca.style.display = "none"
         trinca2.style.display = "none"
         mistura.style.display = "none"
         mistura2.style.display = "none"
         calopsita.style.display = "none"
         calopsita2.style.display = "none"
         coleiro.style.display = "none"
         coleiro2.style.display = "none"

         /*acessorios*/
         portavitamina.style.display = "none"
         portavitamina2.style.display = "none"
         bebedouro.style.display = "none"
         bebedouro2.style.display = "none"
         brinquedo.style.display = "none"
         brinquedo2.style.display = "none"
         banheira.style.display = "none"
         banheira2.style.display = "none"

    }


} )


