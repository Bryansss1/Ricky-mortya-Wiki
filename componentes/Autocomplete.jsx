import React, { useEffect } from 'react';
import Autosuggest from "react-autosuggest"
import { useState } from 'react';


const Autocomplete = ({coms,buscarg}) => {
 
    const[ubi,setUbi]=useState([])

useEffect(()=>{
setUbi(coms)
},[])



    return (
        <>
            {ubi.map((objs)=>{
                
            const filtros=objs.results.map((ubi)=>{
                    return(
                        <div key={ubi.id}>
                        <p onClick={()=>buscarg(ubi)} >{ubi.id}-{ubi.name} {ubi.type}</p>
                        </div>
                    )
                 })
                 return filtros
            })}
        </>
    );
};


export default Autocomplete;
export function idchange() {};
