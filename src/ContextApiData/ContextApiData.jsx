/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

const ContextApiData = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetch("./data.json")
        .then((res)=>res.json())
        .then((data)=>{
            setData(data)
           
        })
    },[])


    return (
        <ApiContext.Provider value={{data}} >{children}</ApiContext.Provider>
    );
};

export default ContextApiData;