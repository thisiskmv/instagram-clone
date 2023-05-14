import { useContext } from "react"
import { AuthContext } from "./AuthContext"
import { Navigate } from "react-router-dom"

const PrivateRoute=({children})=>{
    const {currentUser}=useContext(AuthContext)
    console.log(currentUser)
    if(currentUser){
      return children
    }else {
      return <Navigate to='/login'/>
    }
  }
  export default PrivateRoute