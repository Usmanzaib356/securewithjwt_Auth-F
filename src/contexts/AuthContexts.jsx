import React, { createContext, useEffect, useState } from "react";
import { read_cookie } from "sfcookies";
export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {

    
  const [auth, setAuth] = useState("This is coming from Context JS");
  const [islogin ,setIsLoogin] = useState(read_cookie("islogin"))  
  const [token, setToken] = useState(false);   


 const API_URL = `https://tame-blue-hedgehog-coat.cyclic.app/`

   
useEffect(()=>{

  const cookies = read_cookie("islogin")

  if(cookies === true){
      return setIsLoogin(true)
  }

})



  return (
    <AuthContext.Provider value={{auth, setAuth,API_URL,islogin,setIsLoogin,token,setToken}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 