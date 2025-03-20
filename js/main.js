

let contBaseExp = document.querySelector("#contBaseExp")
let contTemplateExp = document.querySelector("#contTemplateExp").content
let contFragmentExp = document.createDocumentFragment()

document.addEventListener("DOMContentLoaded", ()=>{
    mostrarFuncionPrincipal()
})



const mostrarFuncionPrincipal = async () =>{
    try{
        const data = await fetch("api.json")
        const res = await data.json() 
        pintarExpConecta(res)     



    }catch(error){
        console.log("Error en la carga de datos")
    }
}



const pintarExpConecta = (res) =>{
    console.log(res)
    
    contTemplateExp.querySelector("#title1").textContent = res[0].title1
    contTemplateExp.querySelector("#text1").textContent = res[0].description1
    contTemplateExp.querySelector("#textWeb").textContent = res[0].sitioWeb
    contTemplateExp.querySelector("#textWeb").setAttribute("href",res[0].sitioWeb)            



    contFragmentExp.appendChild(contTemplateExp)
    contBaseExp.appendChild(contFragmentExp)

}

