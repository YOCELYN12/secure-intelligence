import { traerCookie } from "./Fetch/cookie"

const administrador=()=>{
    const valorAdmin = traerCookie('super')
    if(valorAdmin == 'true'){
        return true
    }else{
        return false
    }
}
const RutasPrivadas=({children})=>{
      return  administrador() ? children : <h1>NO</h1>
}
export default RutasPrivadas