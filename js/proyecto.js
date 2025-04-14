
let contBasePro = document.querySelector("#contBasePro")
let templatePro = document.querySelector("#templatePro").content
let fragmentProyect = document.createDocumentFragment()


document.addEventListener("DOMContentLoaded",() =>{
    loadingProject()
})


const loadingProject = async () =>{
    try{
        const dataP = await fetch("proyect.json")
        const resP = await dataP.json()
        mostrarProjectA(resP)
        //templatePro.querySelector("titlePro").textContent = resP[0].id



    }catch(error){
        console.log(" Error al carga mierda")
    }
}



const mostrarProjectA = ( resP ) =>{
    console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[0].titlePro
    templatePro.querySelector("#descPro").textContent = resP[0].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[0].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[0].titlePro)





    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

}
