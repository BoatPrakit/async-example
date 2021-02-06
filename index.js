import React, { useState,useEffect, Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


function App(){
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [img,setImg] = useState('');
    useEffect(() => {
        async function getData(){
            const rawData = await axios.get('https://randomuser.me/api/');
            setUser(rawData.data.results[0])
            setImg(rawData.data.results[0].picture.large)
            setLoading(false);
        }
        getData();
    },[])

    if(loading){
        return (
            <div> <h1>Loading...</h1></div>
        )
    }
    if(!user) {
        return (
            <h1>Not Found Person</h1>
        )
    }
    return (
        <div>
            <h1>{ user.name.first && user.name.last }</h1>
            <img src={img} />
         </div>
    )
}


ReactDOM.render(<App />, document.getElementById('app'));