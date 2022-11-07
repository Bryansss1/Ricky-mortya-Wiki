import React, { useEffect } from 'react';
import Autosuggest from "react-autosuggest"
import { useState } from 'react';


const Autocomplete = ({coms}) => {
 
    const[ubi,setUbi]=useState([])

useEffect(()=>{
setUbi(coms)
},[])



    return (
        <>
            {ubi.map((objs)=>{
                
            const filtros=objs.results.map((ubi)=>{
                    return(
                        <>
                        <p key={ubi.id}>{ubi.id}-{ubi.name} {ubi.type}</p>
                        </>
                    )
                 })
                 return filtros
            })}
        </>
    );
};


export default Autocomplete;
export function idchange() {};
