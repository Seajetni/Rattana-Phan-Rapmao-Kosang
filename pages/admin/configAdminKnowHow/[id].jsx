import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import { useRouter } from "next/router";
import axios from "axios";

export default function edit() {
  const router = useRouter();
  const { id } = router.query;
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    if (id) {
      const data = async () => {
        const res = await axios.get("/api/data?id=" + id);
        setDataInfo(res.data);
      };
      data();
    }
  }, [id]);



  return <LayoutAdmin>{dataInfo && <Form {...dataInfo} />}</LayoutAdmin>;
}
