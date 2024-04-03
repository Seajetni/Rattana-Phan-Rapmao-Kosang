import React, { useState } from "react";
import {
  Card,
  CardBody,
  Typography,
  Button,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
export default function Form({
  id,
  video: existingVideo,
  title: existingTitle,
  metadescription: existingMetadescription,
}) {
  const [video, setVideo] = useState(existingVideo || "");
  const [title, setTitle] = useState(existingTitle || "");
  const [metadescription, setMetadescription] = useState(
    existingMetadescription || ""
  );
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = {
        video: video,
        title: title,
        metadescription: metadescription
      };

      await axios.put("/api/dataContect?id=83", data);
      router.push("/admin/AdminContect");
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
            Video Link Youtube
          </Typography>
          <Textarea
            size="lg"
            label="กรอกข้อมูล"
            value={video}
            onChange={(e) => setVideo(e.target.value)}
          />
        </CardBody>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Title SEO
          </Typography>
          <Textarea
            size="lg"
            label="กรอกข้อมูล"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </CardBody>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Meta Description
          </Typography>
          <Textarea
            size="lg"
            label="กรอกข้อมูล"
            value={metadescription}
            onChange={(e) => setMetadescription(e.target.value)}
          />
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
