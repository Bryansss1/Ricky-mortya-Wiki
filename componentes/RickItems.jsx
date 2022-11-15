import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const RickItems = ({url,key}) => {
    const [characterss,setCharacters]=useState({})
   
    useEffect(()=>{
        axios.get(url)
        .then(res=>setCharacters(res.data))
        .catch(error=>console.error("falta la busqueda"))
    },[])


    return (
        
        <div key={key} className='card'>
            <small>{characterss.status==="Dead" ||characterss.status==="unknown" ?characterss.status+"🔴":characterss.status +"🟢"}</small>
            <img src={characterss.image}/>
            <h3 className='name-card'>{characterss.name}</h3>
            
            <ul>
                <li>Specie:{characterss.species}</li>
                <li>Origin:{characterss.origin?.name}</li>
                <li>Type:{characterss.type===""?characterss.species:characterss.type}</li>
                <li>Number of Episodes:{characterss.episode?.length}</li>
            </ul>
           
        </div>
        
    );
};

export default RickItems;