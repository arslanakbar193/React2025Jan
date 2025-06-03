import { createContext } from "react";

export const BioContext = createContext();

export const BioProvider = ({children}) => {
    const myname = "Arslan";
    const myage = 30;
    return <BioContext.Provider value={{myname,myage}}>{children}</BioContext.Provider>
}