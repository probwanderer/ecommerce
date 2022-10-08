import React, { useState ,useEffect} from 'react';
import axios from 'axios';
import Items from './Items';

function Results({selectedFilter,keyWord}){
    const [items, setitems] = useState([]);
    const [DataisLoaded,setDataisLoaded]=useState(false);

    const fetchdata=async ()=>{
        const response=await axios.get('https://fakestoreapi.com/products');
        setitems(response.data);
        setDataisLoaded(true);
    }

    useEffect(()=>{
        fetchdata();
    },[])

    if (!DataisLoaded) 
        return <div> <h1> Please wait some time.... </h1> </div> ;
    else
        return (
            <div >
            <Items items={items} selectedFilter={selectedFilter} keyWord={keyWord}/>
            </div>);
}


export default Results;
