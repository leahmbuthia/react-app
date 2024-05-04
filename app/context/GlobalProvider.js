import { createContext, useContext, useEffect, useState } from "react";
import { getCurrentUser } from "../../lib/appwrite";

export const GlobalContext = createContext();
export const useGlobalContext = () => useContext(GlobalContext);

const GlobalProvider = ({ children }) => {
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try{
        getCurrentUser
    .then((res) =>{
      if(res) {
        setIsLoggedIn(true);
        setUser(res)
      } else{
        setIsLoggedIn(false)
        setUser(null)
      } 
    })}
    catch (error){
throw Error(eror);
    }
  }, []);

  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider
