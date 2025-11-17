import { useContext } from "react"
import { AuthContext } from "../Context/AuthContext"

const CreateArticle = () => {
    const {isInitialized} = useContext(AuthContext)
    if(isInitialized)
    return (
        <>
            
        </>
    )
    return (
        <>
            loading...
        </>
    )
}

export default CreateArticle