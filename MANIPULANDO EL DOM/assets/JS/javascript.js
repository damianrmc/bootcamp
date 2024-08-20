
// Primera parte
function ocultarTexto(){
    const text2 = document.querySelector(".text2")
    text2.style.display = "none"
}

function mostrarTexto(){
    const text2 = document.querySelector(".text2")
    text2.style.display = "block"
}


let text1 = document.getElementById("text1")
text1.onmouseover = ocultarTexto
text1.onmouseout = mostrarTexto

// Segunda parte

function agrandar(){
    const img = document.getElementById('img')
    img.style.width = "40%"
}

function achicar(){
    const img = document.getElementById('img')
    img.style.width = "20%"
}

img.onclick = agrandar
img.onmouseout = achicar

// Tercera parte

function agrandarTexto() {
    const caja3 = document.getElementById('caja3')
    caja3.style.fontSize = "2em"
}

const caja3 = document.getElementById('caja3')
caja3.ondblclick = agrandarTexto