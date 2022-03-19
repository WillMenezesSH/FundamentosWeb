/*
por tag: getElementByTagName()
por Id: getElementById()
por nome: getElementByName()
por class: getElementByClassName()
por seletor: querySeletor()
*/

function validaSerie() {
    let txt = document.querySelector('#txtSerie')
    if(serie.value.length < 3){
        alert('nome invalido')
        txt.innerHTML = 'Nome Invalido'
        txt.style.color = 'red'
    }else { 
            txt.innerHTML = 'Nome Válido'
            txt.style.color = 'blue'
    
    }}


let serie = window.document.getElementById('serie')
let filme = document.querySelector('#filme')

serie.style.width = '150%'
filme.style.width = '150%'
