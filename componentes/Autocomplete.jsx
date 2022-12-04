import React, { useEffect } from 'react';
import Autosuggest from "react-autosuggest"
import { useState } from 'react';


const Autocomplete = ({coms,buscarg,iddd}) => {
 
    const[ubi,setUbi]=useState([])

useEffect(()=>{
setUbi(coms)
},[iddd])




    return (
        <>
            {ubi.map((objs)=>{
                
            const filtros=objs.results.map((ubi)=>{
                if(iddd.includes(ubi.id)){
                    return(
                        <div key={ubi.id}>
                        <p onClick={()=>buscarg(ubi.id)} >{ubi.id}-{ubi.name} {ubi.type}</p>
                        </div>
                    )
                }

                 })
                 return filtros
            })}
        </>
    );
};


export default Autocomplete;
export function idchange() {};
