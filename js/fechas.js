
//FUNCION MOSTRAR ELEMEMTO CUANDO VA TRANSCURRIENDO EL SCROLL
function mostrarScroll(elemento, scroll, clase){
    window.addEventListener("scroll", () => {
        if(window.scrollY >= scroll){
            elemento.classList.add(clase);
        }else{
            elemento.classList.remove(clase);
        }
    });
}

//FUNCION APRETA UN BOTON PARA DESPLAZAR UN ELEMENTO Y OCULTAR
function togglePanel(boton, elemento, clase){

    boton.addEventListener("click", (e) => {
        e.stopPropagation();
        elemento.classList.toggle(clase);

    });

    document.addEventListener("click", (e) => {
        if(
            !elemento.contains(e.target) &&
            !boton.contains(e.target)
        ){
            elemento.classList.remove(clase);
        }
    });

}






//////////////////////
let contBlockExp__btn = document.getElementById("contBlockExp__btn")
let cajaFechas = document.getElementById("cajaFechas")
togglePanel(contBlockExp__btn, cajaFechas, "mostrar")



////////////////////
let btnProyectos = document.getElementById("btnProyectos")
let contProyectos__block = document.getElementById("contProyectos__block")
togglePanel(btnProyectos, contProyectos__block, "contProyectos__block_JS")
