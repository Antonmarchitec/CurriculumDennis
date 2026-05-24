
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



const cajaFechas = document.getElementById("cajaFechas");
mostrarScroll(cajaFechas, 2000, "mostrar");



