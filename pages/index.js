import Slider from "@/components/home/Slider";
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const [message, setMessage] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can send the form data to a server
    console.log('Form submitted:', { name, tel, message, address });
  };
  const handleClear = () => {
    // Clear all form fields
    setName('');
    setTel('');
    setMessage('');
    setAddress('');
  };

  return (
    <Layout>
      <Slider />

      <div className="flex   justify-around  mx-40 ">
        <div className="  border-4 border-yellow-500  h-full items-center justify-center flex">
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xyUmcRkQthk?si=w45_EpGk5gTNWh-2"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
        </div>
        <div className=" flex    border border-slate-300  p-10 rounded-3xl  text-[#ffd900] ml-10   w-full items-center justify-center">
        <form onSubmit={handleSubmit} className="flex flex-col h-full w-full ">
      <h2 className="border-4 p-2 ml-3 border-slate-300 w-40 font-bold ">Contact form</h2>

      <div className="flex justify-between  ">
        <label htmlFor="name" className="border-4 px-1 py-2 border-slate-300 w-full my-2 ml-3">ชื่อ-นามสกุลผู้ติดต่อ</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="กรอกชื่อและนามสกุล"
          className="border-4 p-2 border-slate-300 w-full my-2 mx-3 "
        />
      </div>

      <div className="flex justify-between ">
        <label htmlFor="tel" className="border-4 px-1 py-2 border-slate-300 w-full my-2 ml-3">เบอร์โทร</label>
        <input
          type="text"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
          placeholder="กรอกหมายเลขโทรศัพท์"
          className="border-4 p-2 border-slate-300 w-full my-2 mx-3 "
        />
      </div>

      <div className="flex justify-between ">
        <label htmlFor="message" className="border-4 p-2 border-slate-300 w-full my-2 mx-3 ">เรื่องที่ต้องการติดต่อ</label>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="กรอกเรื่องที่ต้องการติดต่อ"
          className="border-4 p-2 border-slate-300 w-full my-2 mx-3 "
        />
      </div>

      <div className="flex justify-between ">
        <label htmlFor="address" className="border-4 p-2 border-slate-300 w-full my-2 mx-3 ">สถานที่ที่ต้องการ</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="กรอกสถานที่ที่ต้องการ"
          className="border-4 p-2 border-slate-300 w-full my-2 mx-3 "
        />
      </div>

      <div className="flex justify-between ">
        <button type="submit" className="bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-4 border-yellow-400 hover:border-yellow-500 rounded">ส่งอีเมลล์</button>
        <button onClick={handleClear} className="bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-4 border-yellow-400 hover:border-yellow-500 rounded">ล้างข้อมูล</button>
      </div>
    </form>
        </div>
      </div>
    </Layout>
  );
}
