import Error from "@/components/Error";
import Layout from "@/components/Layout";
import Slider from "@/components/Slider";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function pageProduct() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();
  const [error, setError] = useState(null);
  const [label, setlabel] = useState();
  const [slider, setSlider] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        if (id) {
          const res = await axios.get("/api/dataProduct?id=" + id);
          setData(res.data);

          if (res.data[0].head_id === 1) {
            setlabel("งานปรับปรุงต่อเติม");
          } else if (res.data[0].head_id === 2) {
            setlabel("งานระบบไฟฟ้า");
          } else if (res.data[0].head_id === 3) {
            setlabel("งานก่อสร้าง");
          } else if (res.data[0].head_id === 4) {
            setlabel("งานซ่อมเเซม");
          }

          if (res.data[0].status === 1) {
            setStatus("ส่งมอบงานเรียบร้อย");
          } else {
            setStatus("กำลังจะส่งงาน");
          }

          if (res.data[0].gallery) {
            setSlider(res.data[0].gallery);
          }
        }
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Error 404: API not found");
        } else {
          setError("An error occurred:", error);
        }
      }
    };
    getData();
  }, [id]);

  if (!error) {
    return (
      <Layout>
        {data.map(({ name, area, where1 }, index) => (
          <div className="flex justify-center items-center my-20" key={index}>
            <div>
              <div className="flex justify-center my-10">
                <h1 className="text-4xl">{name}</h1>
              </div>

              <div className="flow-root rounded-lg border border-gray-100 py-3 shadow-sm w-screen">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">ประเภทงาน</dt>
                    <dd className="text-gray-700 sm:col-span-2">{label}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">สถานที่</dt>
                    <dd className="text-gray-700 sm:col-span-2">{where1}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">
                      ขนาดพื้นที่ทั้งหมด
                    </dt>
                    <dd className="text-gray-700 sm:col-span-2">{area}</dd>
                  </div>

                  <div className="grid grid-cols-1 gap-1 p-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                    <dt className="font-medium text-gray-900">สถานะงาน</dt>
                    <dd className="text-gray-700 sm:col-span-2">{status}</dd>
                  </div>
                </dl>
              </div>
              <div>
                <div className=" my-10">
                  <Slider slider={slider} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Layout>
    );
  } else {
    return <Error />;
  }
}
