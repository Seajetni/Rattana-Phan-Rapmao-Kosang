import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React, { useEffect, useState } from "react";
import Form from "./Form";
import axios from "axios";
import { useRouter } from "next/router";
export default function edit() {
  const router = useRouter();
  const { id } = router.query;
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    if (id) {
      const data = async () => {
        const res = await axios.get("/api/dataHome?id=" + id);
        setDataInfo(res.data);
      };
      data();
    }
  }, [id]);

  console.log(dataInfo);

  return <LayoutAdmin>{dataInfo && <Form {...dataInfo} />}</LayoutAdmin>;
}
