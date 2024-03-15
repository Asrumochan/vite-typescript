import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
const photos = () => {
  const [data,setData] = useState([]);
  const getData=()=>{
    Axios.get("https://jsonplaceholder.typicode.com/photos")
      .then((res)=> {
        setData(res.data.filter((data) =>{
          return data.id < 20
        }))  
  }).catch((err)=>{
    console.log(err);
  })
  }
  const getID=(e)=>{
    alert(e)
    setData(data.filter((data)=> e != data.id))
  }
  return (
    <div>
      <button onClick={getData}>Get Data</button><br></br>
      {
        data.map((data)=>{
          return <img src={data.thumbnailUrl} alt="" onDoubleClick={()=>getID(data.id)} key={data.id}/>
        })
      }
    </div>
  )
}

export default photos
