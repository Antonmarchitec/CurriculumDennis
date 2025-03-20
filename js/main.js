

let contBaseExp = document.querySelector("#contBaseExp")
let contTemplateExp = document.querySelector("#contTemplateExp").content
let contFragmentExp = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", () =>{
    mostrarFuncionPrincipal()
})



const mostrarFuncionPrincipal = async () =>{
    try{
        const data = await fetch("api.json")
        const res = await data.json() 
        pintarInvertronic(res)

      

    }catch(error){
        console.log("Error en la carga de datos")
    }
}




const pintarInvertronic = (res) =>{
    //console.log(res)
        
    contTemplateExp.querySelector("#title1").textContent = res[4].title1
    contTemplateExp.querySelector("#title1").style.paddingBottom = "20px"


    contTemplateExp.querySelector("#title2").textContent = res[4].vacio
    contTemplateExp.querySelector("#title3").textContent = res[4].vacio
    contTemplateExp.querySelector("#title4").textContent = res[4].vacio

    contTemplateExp.querySelector("#text1").textContent = res[4].description1
    contTemplateExp.querySelector("#text1").style.paddingBottom = "20px"

    contTemplateExp.querySelector("#text2").textContent = res[4].description2
    contTemplateExp.querySelector("#text2").style.paddingBottom = "20px"

    contTemplateExp.querySelector("#text3").textContent = res[4].vacio
    contTemplateExp.querySelector("#text4").textContent = res[4].vacio
    

    contTemplateExp.querySelector("#textWeb").textContent = res[4].sitioWeb
    contTemplateExp.querySelector("#textWeb").setAttribute("href",res[4].sitioWeb)            

    //Bases apendChild
    contFragmentExp.appendChild(contTemplateExp)
    contBaseExp.appendChild(contFragmentExp)


}


const pintarSTProvin = (res) =>{
    console.log(res)
        
    contTemplateExp.querySelector("#title1").textContent = res[3].title1
    contTemplateExp.querySelector("#title2").textContent = res[3].title2
    contTemplateExp.querySelector("#title3").textContent = res[3].title3
    contTemplateExp.querySelector("#title4").textContent = res[3].title4

    contTemplateExp.querySelector("#text1").textContent = res[3].description1
    contTemplateExp.querySelector("#text2").textContent = res[3].description2
    contTemplateExp.querySelector("#text3").textContent = res[3].description3
    contTemplateExp.querySelector("#text4").textContent = res[3].description4

    contTemplateExp.querySelector("#textWeb").textContent = res[3].sitioWeb
    contTemplateExp.querySelector("#textWeb").setAttribute("href",res[3].sitioWeb)            

    //Bases apendChild
    contFragmentExp.appendChild(contTemplateExp)
    contBaseExp.appendChild(contFragmentExp)

}

/*
const pintarSTLive = (res) =>{
    console.log(res)
        
    contTemplateExp.querySelector("#title1").textContent = res[2].title1
    contTemplateExp.querySelector("#title2").textContent = res[2].title2
    contTemplateExp.querySelector("#title3").textContent = res[2].title3
    contTemplateExp.querySelector("#title4").textContent = res[2].title4

    contTemplateExp.querySelector("#text1").textContent = res[2].description1
    contTemplateExp.querySelector("#text2").textContent = res[2].description2
    contTemplateExp.querySelector("#text3").textContent = res[2].description3
    contTemplateExp.querySelector("#text4").textContent = res[2].description4

    contTemplateExp.querySelector("#textWeb").textContent = res[2].sitioWeb
    contTemplateExp.querySelector("#textWeb").setAttribute("href",res[2].sitioWeb)            

    //Bases apendChild
    contFragmentExp.appendChild(contTemplateExp)
    contBaseExp.appendChild(contFragmentExp)

}


const pintarFrontend = (res) =>{
    console.log(res)
        
    contTemplateExp.querySelector("#title1").textContent = res[1].title1
    contTemplateExp.querySelector("#title2").textContent = res[1].title2
    contTemplateExp.querySelector("#title3").textContent = res[1].title3
    contTemplateExp.querySelector("#title4").textContent = res[1].title4

    contTemplateExp.querySelector("#text1").textContent = res[1].description1
    contTemplateExp.querySelector("#text2").textContent = res[1].description2
    contTemplateExp.querySelector("#text3").textContent = res[1].description3
    contTemplateExp.querySelector("#text4").textContent = res[1].description4

    contTemplateExp.querySelector("#textWeb").textContent = res[1].sitioWeb
    contTemplateExp.querySelector("#textWeb").setAttribute("href",res[1].sitioWeb)            

    //Bases apendChild
    contFragmentExp.appendChild(contTemplateExp)
    contBaseExp.appendChild(contFragmentExp)

}


const pintarExpConecta = (res) =>{
    console.log(res)
        
    contTemplateExp.querySelector("#title1").textContent = res[0].title1
    contTemplateExp.querySelector("#title2").textContent = res[0].title2
    contTemplateExp.querySelector("#title3").textContent = res[0].title3
    contTemplateExp.querySelector("#title4").textContent = res[0].title4

    contTemplateExp.querySelector("#text1").textContent = res[0].description1
    contTemplateExp.querySelector("#text2").textContent = res[0].description2
    contTemplateExp.querySelector("#text3").textContent = res[0].description3
    contTemplateExp.querySelector("#text4").textContent = res[0].description4

    contTemplateExp.querySelector("#textWeb").textContent = res[0].sitioWeb
    contTemplateExp.querySelector("#textWeb").setAttribute("href",res[0].sitioWeb)            

    //Bases apendChild
    contFragmentExp.appendChild(contTemplateExp)
    contBaseExp.appendChild(contFragmentExp)

}

*/