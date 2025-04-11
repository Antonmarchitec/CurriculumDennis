let contProyectosBase = document.querySelector("#contProyectosBase")
let tempProyect = document.querySelector("#tempProyect").content
let fragmentProyect = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded",() =>{
    loadingProject()
})


const loadingProject = async () =>{
    try{
        const res = await fetch("proyect.json")
        const data = await res.json()
        mostrarProjectA(data)


    }catch( error ){
        console.log(" Error al cargar informacion")
    }
}



const mostrarProjectA = ( data ) =>{
    console.log(data[0].descPro)

    tempProyect.querySelector("#titlePro"),textContent = data[0].titlePro
    tempProyect.querySelector("#descriptionPro"),textContent = data[0].descPro


    let cloneProject = tempProyect.cloneNode(true)
    fragmentProyect.appendChild(cloneProject)
    contProyectosBase.appendChild(fragmentProyect)


}