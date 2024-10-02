//Post
const Post = async(datos,endpoint) => {
    try {
        const respuesta = await fetch("http://localhost:8000/api/registro"+endpoint,{
            method:"POST",
            headers:
            {
                "Content-Typer": "aplication/json"
            },
            body:JSON.stringify(datos)
        })
        const data = await respuesta.json()
        console.log(data)

    } catch (error) {
        console.log(error)
    }
}
export{Post}