import Layout from "@/components/Layout";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import Product from "@/components/KnowHow/product";
export default function KnowHow() {

  const slider = [
    {
       img: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
    },
    {
      img: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
   },
   {
     img: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
   },

]

  

  return (
    <Layout className="mt-10 w-full h-full ">

      <div className=" flex justify-center my-10">
      <h1 className="inline-block w-full rounded-lg  px-5 py-3 text-[#A8741A] font-medium  sm:w-auto text-2xl">ความรู้ก่อสร้าง</h1>
      </div>
      

      
      <Slider slider={slider} />

      
      <Product/>

    </Layout>
  );
}
