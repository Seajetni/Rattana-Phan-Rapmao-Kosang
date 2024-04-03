import LayoutAdmin from '@/components/admin/LayoutAdmin'
import axios  from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Form from './form'

export default function Edit() {

  const [dataInfo, setDataInfo] = useState(null)
  const router = useRouter()
  const {id} = router.query

useEffect(() => {
  if(!id){
    return
  }
  axios.get('/api/dataProduct?id= ' + id).then(res => {
    setDataInfo(res.data[0])
  })
},[id])
  

  return (
    <LayoutAdmin>
      {dataInfo && (
        <Form {...dataInfo} />
      )}
         

         
    </LayoutAdmin>
  )
}
