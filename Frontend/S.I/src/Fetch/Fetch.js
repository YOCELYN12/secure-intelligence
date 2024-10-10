

//Post
const Post = async(datos) => {
    try {
        const respuesta = await fetch("http://localhost:8000/api/registro",{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(datos)
        })
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
export{Post}




//PostDb.Json
const PostDbJson = async(datos,endpoint) => {
    try {
        const respuesta = await fetch("http://localhost:2929/"+endpoint,{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(datos)
        })
        const data = await respuesta.json();
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
export{PostDbJson}


//Get
const Get = async()=>{
    try {
        const peticion = await fetch("http://localhost:8000/api/registro")
        const datos = await peticion.json()
        return datos
    } catch (error) {
        console.log(error)

    }
}

export {Get}