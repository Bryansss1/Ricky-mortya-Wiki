import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import RickItems from './RickItems';
import Autocomplete from './Autocomplete';


const RickandMorty = () => {
const[id,setId]=useState("")
const [location,setLoca]=useState({})
const[search,setSearch]=useState(false)
const[full,setfull]=useState([])

useEffect(()=>{
    const result=[]
    axios.get(`https://rickandmortyapi.com/api/location?page=1`)
    .then(res=>result.push(res.data))
    axios.get(`https://rickandmortyapi.com/api/location?page=2`)
    .then(res=>result.push(res.data))
    axios.get(`https://rickandmortyapi.com/api/location?page=3`)
    .then(res=>result.push(res.data))
    axios.get(`https://rickandmortyapi.com/api/location?page=4`)
    .then(res=>result.push(res.data))
    axios.get(`https://rickandmortyapi.com/api/location?page=5`)
    .then(res=>result.push(res.data))
    axios.get(`https://rickandmortyapi.com/api/location?page=6`)
    .then(res=>result.push(res.data))
    axios.get(`https://rickandmortyapi.com/api/location?page=7`)
    .then(res=>result.push(res.data))
    setfull(result)
},[])

const keyInput="bryansss1"

useEffect(()=>{
    const ramdonid=Math.floor(Math.random()*120)+1
    axios.get(`https://rickandmortyapi.com/api/location/${ramdonid}`)
    .then(res=>setLoca(res.data))
    .catch(error=>console.error("falta la busqueda"))
},[])


const buscador=(e)=>{

   const value=e.target.value.toLowerCase()
setId(value)
/*
const fil=full.map((objs)=>{
    const filtros=objs.results.filter((ubi)=>{
            value.some(ubi.id)===value?setSearch(!search):""
         })
         return filtros
})
*/
  }
   
const lista=()=>{
  setSearch(true)
}

const listaend=()=>{
    setSearch(false)
}

const muestra=(e)=>{
e.preventDefault()
setId( axios.get(`https://rickandmortyapi.com/api/location/${id}`)
.then(res=>setLoca(res.data)))
setId("")
}

    return (
        <div key={location.id}>  
        <div className='portada'>
            <img src="https://images.squarespace-cdn.com/content/v1/51548a58e4b0cf906c653f22/1554172376096-TR4JO5FMMHRPCDWHTB11/Comp_1.gif?format=1500w"/>
        </div>
            <section className='header-search'>
            <h1>{location.name}</h1>
            <ul className="Search">
                <li>Location: {location.type}</li>
                <li>Dimension: {location.dimension}</li>
                <li>Population: {location.residents?.length}</li>
            </ul>
            
            <form onSubmit={muestra} >
            <input type="text" value={id} onFocus={lista} onBlur={listaend} placeholder="Buscador de ID-solo existen 126 id de ubicaciones" onChange={buscador}  key={keyInput} />
                <button>Buscar</button>
            </form>
            <div className='AutoComplete'>
         {search?<Autocomplete key={full.length} coms={full}/>:""}
            </div>
            </section>

            <article className='cards-container'>
            {location.residents?.length===0?<h2 className='h2-nobody' key={location.id}>nobody live here...</h2>:location.residents?.map(urlz=>{
                    return(
                        <RickItems key={urlz.id} url={urlz}/>
                    )
            })}
            </article>
            <footer className='Footer'>
            <ul>
                <li>Creador:Bryansss1/Bryan David Sanabria Azuaje</li>
                <li>Wiki Rick and Morty  </li>
                <li>Fecha de creacion: 6/november/2022</li>
                <li><a href='https://github.com/Bryansss1'target="_blank"><i className='bx bxl-github bx-md'></i></a></li>
            </ul>
            </footer>
        </div>
    );
};

export default RickandMorty;