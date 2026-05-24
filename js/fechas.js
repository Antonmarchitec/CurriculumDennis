
//FUNCION MOSTRAR ELEMEMTO CON SCROLL
function mostrarScroll(elemento, scroll, clase){
    window.addEventListener("scroll", () => {
        if(window.scrollY >= scroll){
            elemento.classList.add(clase);
        }else{
            elemento.classList.remove(clase);
        }
    });
}

//FUNCION MOSTRAR ELEMEMTO CON SCROLL
function togglePanel(boton, elemento, clase){
    boton.addEventListener("click", () => {
        elemento.classList.toggle(clase);
    });
}




//////////////////////

const cajaFechas = document.getElementById("cajaFechas");
mostrarScroll(cajaFechas, 2000, "mostrar");


let btnProyectos = document.getElementById("btnProyectos")
let contProyectos__block = document.getElementById("contProyectos__block")
togglePanel(btnProyectos, contProyectos__block, "contProyectos__block_JS")
