import { useEffect, useState } from 'react'
import './App.css'
import Axios  from 'axios'

function App() {
  const [data, setData] = useState([])

  useEffect(()=>{
     Axios.get('https://dog.ceo/api/breeds/image/random')
     .then((res)=>{
      console.log(res.data)
        setData(res.data)
     }).catch((err)=>{
      console.log(err)
     })
  })
  return (
    <>
    <img src={data.message} alt="" />
    </>
  )
}

export default App
