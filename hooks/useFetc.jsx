import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const useFetc = (url,accesdata) => {

const [location,setLocation]=useState([])

    useEffect(()=>{
        axios.get(url)
        .then(res=>setLocation(accesdata(res)))        
    },[])

    
  return{location}  
};

export default useFetc;