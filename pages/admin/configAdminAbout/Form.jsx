import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Textarea,
  Input,
} from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import Image from 'next/image'
export default function Form({
  id,
  name: existingName,
  name2: existingName2,
  details: existingDetails,
  details2: existingDetails2,
  img: existingImg,
  video: existingVideo,
  title: existingTitle,
}) {
  const [name, setName] = useState(existingName || "");
  const [title, setTitle] = useState(existingTitle || "");
  const [details, setDetails] = useState(existingDetails || "");
  const [video, setVideo] = useState(existingVideo || "");
  const [img, setImg] = useState(existingImg || "");
  const [details2, setDetails2] = useState(existingDetails2 || "");
  const [name2, setName2] = useState(existingName2 || "");
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: name,
        name2: name2,
        details: details,
        details2: details2,
        title: title,
        img: img,
        video: video,
      };

      await axios.put("/api/dataAbout?id=1", data);
      router.push("/admin/AdminAbout");
    } catch (error) {
      console.error("Error:", error);
    }
  };

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

  return (
    <form onSubmit={handleSubmit}>
      <Card className="mt-6 w-full">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Main
          </Typography>
          <Textarea
            size="lg"
            label="เนื้อเรื่องหลัก"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardBody>
      </Card>
      <Card className="mt-6 w-full">
        <CardBody>
          <Input
            label="หัวข้อ"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            size="lg"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </CardBody>
      </Card>
      <Card className="mt-6 w-full">
        <CardBody>
          <Input
            label="หัวข้อ"
            value={name2}
            onChange={(e) => setName2(e.target.value)}
          />
          <Textarea
            size="lg"
            value={details2}
            onChange={(e) => setDetails2(e.target.value)}
          />
        </CardBody>
      </Card>
      <Card className="mt-6 w-full">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Video Link Youtube
          </Typography>
          <Textarea
            size="lg"
            label="Textarea Large"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </CardBody>
      </Card>
      <Card className="mt-6 w-full">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            img
          </Typography>
          <Input
            type="file"
            accept="image/*"
            size="lg"
            label="Textarea Large"
            onChange={ImgeUpload}
          />
             {img == "" || img == null ? (
                ""
              ) : (
                <div className="my-5">
                  <Image
                    width={200}
                    height={100}
                    className=" "
                    src={img}
                    alt={name}
                  />
                </div>
              )}
        </CardBody>
      </Card>
      <div className="flex justify-center my-10">
        <Button size="lg" color="blue" type="submit">
          Save
        </Button>
      </div>
    </form>
  );
}
