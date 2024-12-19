import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { request } from '../../api'

const Details = () => {
  const {id} = useParams()
  const [data,setData] = useState(null)
  useEffect(()=> {
    request.get(`/movie/${id}`).then(res=>setData(res.data))
  },[id])
  return (
    <div>
      <img src={import.meta.env.VITE_IMAGE_URL + data?.backdrop_path} alt="" />
    </div>
  )
}

export default Details