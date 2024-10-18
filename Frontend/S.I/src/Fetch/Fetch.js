const API_URL = "http://localhost:8000/api"
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





//Delete 
const Delete = async(ID_Ticket,endpoint) => {
   try {
        const eliminar = await fetch (`${API_URL}${endpoint}${ID_Ticket}`, {
            method:"DELETE",
        }) 
        const salida = await eliminar.json()

        if(eliminar.ok){
            alert("Se elimino exitosamente")
        }else{
            console.log("error")
        }
        console.log(salida)
    
   } catch (error) {
     console.log("error")
   }
}

export {Delete}