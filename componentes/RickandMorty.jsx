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
const [nputIdd,setIdinput]=useState("")





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
    .catch(error=>console.error(error
        ))
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

const Buscarg=(ubica)=>{
setId(ubica)
setId( axios.get(`https://rickandmortyapi.com/api/location/${id}`)
.then(res=>setLoca(res.data)))
setId("")
}

const muestra=(e)=>{
e.preventDefault()
setId( axios.get(`https://rickandmortyapi.com/api/location/${id}`)
.then(res=>setLoca(res.data)))
setId("")
}

const [page,setPage]=useState(1)
const pagepase=6
const lastIndex=page*pagepase
const firstIndex=lastIndex-pagepase
const pagesCha=location.residents?.slice(firstIndex,lastIndex)
const totalPagers=Math.ceil(location.residents?.length/pagepase)

const numbersPage=[]
for(let i=1;i<=totalPagers;i++){
    numbersPage.push(i)
}

const [pass,setPass]=useState(1)
const passte=6
const lastzz=pass*passte
const firstzz=lastzz-passte
const PageOrgani=numbersPage.slice(firstzz,lastzz)


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
            <Autocomplete buscarg={Buscarg} coms={full} iddd={id}/>
            </div>

            </section>


            <article  className='cards-container'>
            {location.residents?.length===0?<h2 className='h2-nobody'>nobody live here...</h2>:pagesCha?.map((urlz)=>{
                    return(
                        <RickItems key={urlz} url={urlz}/>
                    )
            })}
            </article>



<section className='buttons-pages'>
           
                <button onClick={()=>setPass(pass-1)} disabled={pass===1}>prev</button>
              {PageOrgani.map(number=>{
                return(
                <button className='pagesssbuton' key={number} onClick={()=>setPage(number)}>{number}</button>
                )
            })}
            <button onClick={()=>setPass(pass+1)} disabled={PageOrgani<pass}>next</button>
            
</section>


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