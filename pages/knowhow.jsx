import Layout from "@/components/Layout";
import React, { useState } from "react";
import Slider from "@/components/Slider";
import Product from "@/components/KnowHow/product";
export default function KnowHow() {



  

  return (
    <Layout className="mt-10 w-full h-full ">

      <div className=" flex justify-center my-10">
      <h1 className="inline-block w-full rounded-lg  px-5 py-3 text-[#A8741A] font-medium  sm:w-auto text-2xl">ความรู้ก่อสร้าง</h1>
      </div>
      

      
      <Slider  />

      
      <Product/>

    </Layout>
  );
}
