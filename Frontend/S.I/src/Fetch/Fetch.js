
const API_URL = "http://localhost:8000/api"

const API_URL_DB_JSON = "http://localhost:2929/"
//Post
const Post = async(datos,endpoint) => {
    try {
        const respuesta = await fetch(`${API_URL}${endpoint}`,{
            method:"POST",
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(datos)
        })
        const data = await respuesta.json();

        if (!respuesta.ok) {
            console.log (data.error)
        } else{
            console.log(data.success)
        }
        console.log(data);
        return data 
        
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


// Get
const Get = async(endpoint)=>{
    try {
        const peticion = await fetch(`${API_URL}${endpoint}`)
        const datos = await peticion.json()
        return datos
    } catch (error) {
        console.log(error)

    }
}

export {Get}

// const GetJSON = async(endpoint)=>{
//     try {
//         const peticion = await fetch(`${API_URL_DB_JSON}${endpoint}`)
//         const datos = await peticion.json()
//         return datos
//     } catch (error) {
//         console.log(error)

//     }
// }

// export {GetJSON}