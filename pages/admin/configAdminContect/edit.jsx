import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import axios  from "axios";

export default function edit() {
    const [dataInfo , setDataInfo] = useState(null)

    useEffect(() => {
        const data = async () => {
            const res = await axios.get('/api/dataContect?id=83')
            setDataInfo(res.data)
                
        }
        data()
    },[dataInfo])

  return (
    <LayoutAdmin>
      
      {dataInfo && (
        <Form {...dataInfo} />
      )}
    </LayoutAdmin>
  );
}
