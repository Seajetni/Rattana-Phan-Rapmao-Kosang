import React, {  useState } from "react";
import {
  Input,
  Button,
} from "@material-tailwind/react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Form({
  id,
  name: existingName,
  img: existingImg,

}) {


  const [img, setImg] = useState(existingImg || "");
  const [name, setName] = useState(existingName || "");
  const router = useRouter();

  const ImgeUpload = (e) => {
  
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error :", error);
    };
  };


  const postData = async () => {
    const imageData = {
      img: img,
      name: name,
    };
  
    if (id) {
      try {
        const response = await fetch("/api/dataHome?id=" + id, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(imageData),
        });
  
        if (!response.ok) {
          throw new Error("ขนาดไฟล์ ใหญ่เกินไป");
        }
  
        
        router.push("/admin/AdminHome");
      } catch (error) {
        window.alert(error.message);
      }
    } else {
      try {
        const response = await fetch("/api/dataHome", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(imageData),
        });
  
        if (!response.ok) {
          throw new Error("ขนาดไฟล์ ใหญ่เกินไป");
        }
  
        
        router.push("/admin/AdminHome");
      } catch (error) {
        window.alert(error.message);
      }
    }
  };
  



  return (
    <>
      <div className=" flex justify-center">
        <form className=" my-10">


          <div className="flex w-72 flex-col gap-6 mt-10">
            <Input
              color="amber"
              label="ชื่อผลงาน"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
    
    
            <div>
              <Input
                color="amber"
                variant="static"
                placeholder="รูปภาพปกผลงาน"
                label="รูปภาพปกผลงาน"
                type="file"
                accept="image/*"
                onChange={ImgeUpload}
              />

              {img == "" || img == null ? (
                ""
              ) : (
                <div className=" flex justify-center">
                  <Image
                    width={200}
                    height={100}
                    className="  w-auto h-auto"
                    src={img}
                    alt={name}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <Button
              variant="gradient"
              color="amber"
              className="flex items-center gap-3 my-5"
              type="button"
              onClick={postData}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
              Upload Data
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
