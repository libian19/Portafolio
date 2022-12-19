const inactivo = document.querySelector('.inactivo')
const inactive = document.querySelector('#inactive')
inactivo.addEventListener('click', aviso)
inactive.addEventListener('click', aviso)

function aviso(){
    alert('Lo siento, página en construción :(')
}