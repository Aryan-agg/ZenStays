// import {createContext} from "react";
import React, { useState, createContext, useEffect } from "react";
import axios from "axios";


export const UserContext= createContext({});

export function UserContextProvider({children}) {
    const [user,setUser] =useState(null);
    const [ready,setready] = useState(false);
    useEffect(() =>{
        if(!user){
        axios.get('/profile').then(({data}) =>{
            setUser(data);
            setready(true);
        });
        
        }
    },[]);
    return(
        <UserContext.Provider value={{user,setUser,ready}}>
        {children}
        </UserContext.Provider>
    );
}


