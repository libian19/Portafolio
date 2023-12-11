const inactivo = document.querySelector('.inactivo')
const inactive = document.querySelector('#inactive')
const elemParrafo = document.getElementById("parrafo")


inactive.addEventListener('click', aviso)

function aviso(){
  alert('Lo siento, página en construción :(')
}

function toggle(){
  //elemParrafo.style.display="block";
  elemParrafo.classList.toggle("hidden")
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


