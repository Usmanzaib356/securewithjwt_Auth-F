import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";

const useAuth = ()=> {

    return useContext(AuthContext)
}

export default useAuth;