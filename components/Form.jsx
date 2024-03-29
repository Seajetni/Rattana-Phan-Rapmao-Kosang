import React, { useState } from "react";
import { Input, Textarea } from "@material-tailwind/react";

export default function Form({ color, label }) {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [message, setMessage] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can send the form data to a server
    console.log("Form submitted:", { name, tel, message, address });
  };
  const handleClear = () => {
    // Clear all form fields
    setName("");
    setTel("");
    setMessage("");
    setAddress("");
  };

  const inputStyle = {
    "#A8741A": color,
    "--input-focus-border-color": color,
    "--input-placeholder-color": color,
  };

  return (
    <section className="bg-gray-100">
      <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12 h-full">
            <div className="w-full h-full">
              <iframe
                src="https://www.youtube.com/embed/FvOpPeKSf_4?si=CscrQx_jfApy1Bb8"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div className="w-full flex justify-between  ">
              <label htmlFor="ชื่อ-นามสกุลผู้ติดต่อ" className=" hidden   sm:w-1/5 sm:flex items-center mr-20">ชื่อ-นามสกุลผู้ติดต่อ</label>
                <Input
                  label="ชื่อ-นามสกุลผู้ติดต่อ"
                  color="amber"
                  className=" !border-0 focus:!border-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

     
                <div className="w-full flex justify-between ">
                  <label htmlFor="เบอร์โทร" className="hidden sm:w-1/5 mr-20 sm:flex  items-center">เบอร์โทร</label>
                  <Input
                    label="เบอร์โทร"
                    value={tel}
                    color="amber"
                    className=" !border-0 focus:!border-2"
                    onChange={(e) => setTel(e.target.value)}
                  />
                </div>

                <div className="w-full flex justify-between ">
                 <label htmlFor="สถานที่ที่ต้องการ" className="hidden sm:w-1/5 mr-20 sm:flex  items-center" >สถานที่ที่ต้องการ</label>
                  <Input
                    label="สถานที่ที่ต้องการ"
                    color="amber"
                    className=" !border-0 focus:!border-2"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
      

              <div className="w-full flex">
                <label htmlFor="เรื่องที่ต้องการติดต่อ" className="hidden sm:w-1/5 sm:flex  mr-20 " >เรื่องที่ต้องการติดต่อ</label>
                <Textarea
                  label="เรื่องที่ต้องการติดต่อ"
                  color="amber"
                  className=" !border-0 focus:!border-2"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="flex justify-between">
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#FFA405] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    ส่งอีเมล 
                  </button>
                </div>
                <div className="mt-4">
                  <button
                     onClick={handleClear}
                     type="button"
                    className="inline-block w-full rounded-lg bg-[#FFA405] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    ล้างข้อมูล
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
