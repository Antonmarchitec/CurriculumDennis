
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
const cajaFechas = document.getElementById("cajaFechas");
mostrarScroll(cajaFechas, 2000, "mostrar");

////////////////////
let btnProyectos = document.getElementById("btnProyectos")
let contProyectos__block = document.getElementById("contProyectos__block")
togglePanel(btnProyectos, contProyectos__block, "contProyectos__block_JS")
