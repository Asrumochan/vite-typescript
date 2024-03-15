import React from 'react'
import Axios from 'axios'
import { useState } from 'react';
const post = () => {
  const [data,setData] = useState([]);
  const getData=()=>{
    Axios.get("https://jsonplaceholder.typicode.com/posts")
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
          return <h5 onDoubleClick={()=>getID(data.id)} key={data.id}>{data.body}</h5>
        })
      }
    </div>
  )
}

export default post
