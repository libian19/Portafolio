const inactivo = document.querySelector('.inactivo')
const inactive = document.querySelector('#inactive')

const elemParrafo = document.querySelector('#parrafo').value;


/*
inactive.addEventListener('click', aviso)

function aviso(){
  alert('Lo siento, página en construción :(')
}
*/

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
