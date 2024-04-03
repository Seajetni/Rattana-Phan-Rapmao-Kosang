import React, { useEffect, useState } from "react";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Textarea,
  Button,
  Select,
  Option,
  Checkbox,
} from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Form({
  id,
  name: existingName,
  where1: existingWhere,
  area: existingArea,
  status: existingStatus,
  imageLink: existingImageLink,
  gallery: existingImgGallery,
}) {
  const [label, setLabel] = useState("");
  const [idLabel, setIDLabel] = useState("");
  const [imageLink, setImageLink] = useState(existingImageLink || "");
  const [where, setWhere] = useState(existingWhere || "");
  const [status, setStatus] = useState(existingStatus || true);
  const [area, setArea] = useState(existingArea || "");
  const [name, setName] = useState(existingName || "");
  const [imgGallery, setImgGallery] = useState(existingImgGallery || []);
  const [idGallery, setIdGallery] = useState("");
  const [gallery, setGallery] = useState({});
  const router = useRouter();

  const ImgeUpload = (e) => {

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImageLink(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error :", error);
    };
  };

  const ImgeUpload2 = (e) => {

    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setGallery(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error :", error);
    };
  };

  const uploadImg = async () => {
    if (!idLabel) {
      alert("คุณลืมใส่หัวข้อ");
    } else {
      const response = await fetch("/api/uploadimg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          head_id: idLabel,
          images_id: id,
          img: gallery,
        }),
      });
      router.reload();
      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to add image and gallery: ${errorMessage}`);
      }
    }
  };

  const handleDeleteGallery = () => {
    fetch("/api/uploadimg", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: idGallery }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);

        router.reload;
      })
      .catch((error) => console.error("Error:", error));
  };

  const handleStatusChange = (value) => {
    setStatus(value === "เสร็จ");
  };

  const postData = async () => {
    if (!idLabel) {
      alert("คุณลืมใส่หัวข้อ");
    } else {
      const headId = idLabel;
      const imageData = {
        imageLink: imageLink,
        status: status,
        area: area,
        where1: where,
        name: name,
      };
      const galleryData = imgGallery; // Replace with actual gallery data
      try {
        if (id) {
          const response = await fetch("/api/dataProduct?id=" + id, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              imageLink: imageLink,
              status: status,
              area: area,
              where1: where,
              name: name,
              head_id: idLabel,
            }),
          });
          router.push("/admin/AdminProduct");
          if (!response.ok) {
            const errorMessage = await response.text();
            window.alert(`ขนาดไฟล์ ใหญ่เกินไป`);
          }
          const data = await response.json();
          alert(data.message); // Output success message
        } else {
          const response = await fetch("/api/dataProduct", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ headId, imageData, galleryData }),
          });
          if (!response.ok) {
            const errorMessage = await response.text();
            window.alert(`ขนาดไฟล์ ใหญ่เกินไป`);
          }

          const data = await response.json();
          router.push("/admin/AdminProduct");
          alert(data.message); // Output success message
        }
      } catch (error) {
        console.error("Error posting data:", error);
      }
    }
  };

  useEffect(() => {
    const checkLabel = async () => {
      const res = await axios.get("/api/dataProduct");
      const data = res.data;
      const datacheck = data;
      const checkLabel = datacheck.map((item) => item.label);
      const getID = datacheck.map((item) => item.id);

      if (label === checkLabel[0]) {
        setIDLabel(getID[0]);
      } else if (label === checkLabel[1]) {
        setIDLabel(getID[1]);
      } else if (label === checkLabel[2]) {
        setIDLabel(getID[2]);
      } else if (label === checkLabel[3]) {
        setIDLabel(getID[3]);
      }
    };
    checkLabel();
  }, [label]);

  return (
    <>
      <div className=" flex justify-center">
        <form className=" my-10">
          <Select
            color="blue"
            label="เลือกหัวข้องาน"
            onChange={(value) => setLabel(value)}
            value={label}
            className=" !text-black"
          >
            <Option value="งานก่อสร้าง">งานก่อสร้าง</Option>
            <Option value="งานซ่อมเเซม">งานซ่อมเเซม</Option>
            <Option value="งานปรับปรุงต่อเติม">งานปรับปรุงต่อเติม</Option>
            <Option value="งานระบบไฟฟ้า">งานระบบไฟฟ้า</Option>
          </Select>

          <div className="flex w-72 flex-col gap-6 mt-10">
            <Input
              color="amber"
              label="ชื่อผลงาน"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              color="amber"
              label="สถานที่"
              value={where}
              onChange={(e) => setWhere(e.target.value)}
            />
            <Select
              variant="standard"
              label="สถานะ"
              value={status ? "ไม่เสร็จ" : "เสร็จ"}
              onChange={(value) => handleStatusChange(value)}
            >
              <Option value="เสร็จ">เสร็จ</Option>
              <Option value="ไม่เสร็จ">ไม่เสร็จ</Option>
            </Select>

            <Input
              color="amber"
              label="ขนาดเท่าพื้นที่เท่าไหร่ (ใส่หน่วยด้วย)"
              value={area}
              onChange={(e) => setArea(e.target.value)}
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

              {imageLink == "" || imageLink == null ? (
                ""
              ) : (
                <div className=" flex justify-center">
                  <Image
                    width={200}
                    height={100}
                    className="  w-auto h-auto"
                    src={imageLink}
                    alt={name}
                  />
                </div>
              )}
            </div>
            {id && (
              <div>
                <div className="flex">
                  <Input
                    color="amber"
                    variant="static"
                    placeholder="รูปข้างในผลงาน (กด Upload ทีละรูป) "
                    label="รูปข้างในผลงาน (กด Upload ทีละรูป) "
                    type="file"
                    accept="image/*"
                    onChange={ImgeUpload2}
                  />
                  <Button
                    color="amber"
                    className="!h-10 !flex !items-center"
                    onClick={uploadImg}
                  >
                    UPLOAD IMG
                  </Button>
                </div>
                <div className="flex ">
                  {imgGallery ? (
                    <div className="grid grid-cols-2">
                      {imgGallery.length > 0 &&
                        imgGallery.map((item, index) => (
                          <div key={index} className="relative">
                            <Image
                              width={300}
                              height={100}
                              src={item.img}
                              alt={name}
                              className=" h-48 w-48 object-cover"
                              onPointerDown={(e) => setIdGallery(item.id)}
                            />
                            <button
                              className="absolute top-0 right-0 p-2 bg-red-500 text-white rounded-full"
                              onClick={handleDeleteGallery}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <div>No images to display</div>
                  )}
                </div>
              </div>
            )}
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
