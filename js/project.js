
let contProyectosBase = document.querySelector("#contProyectosBase")
let tempProyect = document.querySelector("#tempProyect").content
let fragmentProyect = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded",() =>{
    loadingProject()
})


const loadingProject = async () =>{
    try{
        const dataP = await fetch("proyect.json")
        const resP = await dataP.json()
        mostrarProjectA(resP)


    }catch(error){
        console.log(" Error al carga")
    }
}



const mostrarProjectA = ( resP ) =>{
    //console.log(resP[0].titlePro)
    resP.forEach( element => {
        console.log(element.titlePro)

        tempProyect.querySelector("#titlePro").textContent = element.titlePro

        let cloneNoT = tempProyect.cloneNode(true)
        fragmentProyect.appendChild(cloneNoT)
        contProyectosBase.appendChild(fragmentProyect)
    });

  


}