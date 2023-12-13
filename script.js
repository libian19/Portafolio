const inactivo = document.querySelector('.inactivo')
const inactive = document.querySelector('#inactive')

const titleInfancia = document.getElementById("title-infancia")
const titleJuventud = document.getElementById("title-juventud")
const titleHogar = document.getElementById("title-hogar")
const titleFe = document.getElementById("title-fe")

const parrInfancia = document.getElementById("parrafo-infancia")
const parrJuventud = document.getElementById("parrafo-juventud")
const parrHogar = document.getElementById("parrafo-hogar")
const parrFe = document.getElementById("parrafo-fe")

titleInfancia.addEventListener('click', ()=>toggle(parrInfancia))
titleJuventud.addEventListener('click', ()=>toggle(parrJuventud))
titleHogar.addEventListener('click', ()=>toggle(parrHogar))
titleFe.addEventListener('click', ()=>toggle(parrFe))
inactive.addEventListener('click', aviso)

function aviso(){
  alert('Lo siento, página en construción :(')
}

function toggle(parr){
  //elemParrafo.style.display="block";
  parr.classList.toggle("hidden")
 // elemParrafo.classList.add("show")
}

//Parrafos a 500 caracteres
function parrafo(elemParrafo){
let contar = 0;
let newStr = "";
  for (let i=0; i < elemParrafo.length; i++) {
    contar++
    if (contar === 499){
      newStr = str.slice(0,499) + "..."
    }
  }
  return newStr;
}


