import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    
  const [auth, setAuth] = useState("This is coming from Context JS");
  const [islogin ,setIsLoogin] = useState(false)  
  const [token, setToken] = useState("");   


 const API_URL = `https://tame-blue-hedgehog-coat.cyclic.app/`

   




  return (
    <AuthContext.Provider value={{auth, setAuth,API_URL,islogin,setIsLoogin,token,setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 