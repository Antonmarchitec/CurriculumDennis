
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




        document.addEventListener("click", (e) =>{
            if(e.target.id === "pro1"){
                console.log("pro1")
                contBasePro.textContent = mostrarProjectA(resP)
                mostrarProjectA(resP)




            }else if(e.target.id === "pro2"){
                console.log("pro2")
                contBasePro.textContent = mostrarProjectB(resP)
                mostrarProjectB(resP)




            }else if(e.target.id === "pro3"){
                console.log("pro3")
                contBasePro.textContent = mostrarProjectC(resP)
                mostrarProjectC(resP)

            }else if(e.target.id === "pro4"){
                console.log("pro4")
                contBasePro.textContent = mostrarProjectD(resP)
                mostrarProjectD(resP)

            }else if(e.target.id === "pro5"){
                console.log("pro5")
                contBasePro.textContent = mostrarProjectE(resP)
                mostrarProjectE(resP)

            }else if(e.target.id === "pro6"){
                console.log("pro6")
                contBasePro.textContent = mostrarProjectF(resP)
                mostrarProjectF(resP)

            }

            
        } )



    }catch(error){
        console.log(" Error al carga")
    }
}



const mostrarProjectA = ( resP ) =>{
    //console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[0].titlePro
    templatePro.querySelector("#descPro").textContent = resP[0].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[0].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[0].titlePro)
    templatePro.querySelector("#hiperProy").setAttribute("href",resP[0].HiperPro)
    templatePro.querySelector("#hiperProy").textContent = resP[0].NameHiper

    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

    let hiperProy = document.querySelector("#hiperProy")
    hiperProy.target = '_blank'; 
}


const mostrarProjectB = ( resP ) =>{
    //console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[1].titlePro
    templatePro.querySelector("#descPro").textContent = resP[1].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[1].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[1].titlePro)
    templatePro.querySelector("#hiperProy").setAttribute("href",resP[1].HiperPro)
    templatePro.querySelector("#hiperProy").textContent = resP[1].NameHiper

    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

    let hiperProy = document.querySelector("#hiperProy")
    hiperProy.target = '_blank'; 

}


const mostrarProjectC = ( resP ) =>{
    //console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[2].titlePro
    templatePro.querySelector("#descPro").textContent = resP[2].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[2].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[2].titlePro)
    templatePro.querySelector("#hiperProy").setAttribute("href",resP[2].HiperPro)
    templatePro.querySelector("#hiperProy").textContent = resP[2].NameHiper

    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

    let hiperProy = document.querySelector("#hiperProy")
    hiperProy.target = '_blank'; 

}


const mostrarProjectD = ( resP ) =>{
    //console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[3].titlePro
    templatePro.querySelector("#descPro").textContent = resP[3].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[3].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[3].titlePro)
    templatePro.querySelector("#hiperProy").setAttribute("href",resP[3].HiperPro)
    templatePro.querySelector("#hiperProy").textContent = resP[3].NameHiper

    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

    let hiperProy = document.querySelector("#hiperProy")
    hiperProy.target = '_blank'; 

}


const mostrarProjectE = ( resP ) =>{
    //console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[4].titlePro
    templatePro.querySelector("#descPro").textContent = resP[4].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[4].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[4].titlePro)
    templatePro.querySelector("#hiperProy").setAttribute("href",resP[4].HiperPro)
    templatePro.querySelector("#hiperProy").textContent = resP[4].NameHiper

    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

    let hiperProy = document.querySelector("#hiperProy")
    hiperProy.target = '_blank'; 

}


const mostrarProjectF = ( resP ) =>{
    //console.log(resP[0].id)

    templatePro.querySelector("#titlePro").textContent = resP[5].titlePro
    templatePro.querySelector("#descPro").textContent = resP[5].descPro
    templatePro.querySelector("#figurePro").setAttribute("src",resP[5].figurePro)
    templatePro.querySelector("#figurePro").setAttribute("alt",resP[5].titlePro)
    templatePro.querySelector("#hiperProy").setAttribute("href",resP[5].HiperPro)
    templatePro.querySelector("#hiperProy").textContent = resP[5].NameHiper

    //Bases apendChild
    let cloneTemp = templatePro.cloneNode(true)
    fragmentProyect.appendChild(cloneTemp)
    contBasePro.appendChild(fragmentProyect)

    let hiperProy = document.querySelector("#hiperProy")
    hiperProy.target = '_blank'; 

}