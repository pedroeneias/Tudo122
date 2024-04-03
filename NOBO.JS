const ligada = document.getElementById ('ligada')
const desligada = document.getElementById ('desligada')
const DefaltLamp = document.getElementById ('DefaltLamp')

function nova1 (){
    DefaltLamp.src = './ligada.jpg'
}

function nova2 (){
    DefaltLamp.src = './desligada.jpg'
}


ligada.addEventListener('click',nova1)
desligada.addEventListener('click',nova2)