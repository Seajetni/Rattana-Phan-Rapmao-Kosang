import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import axios from "axios";
import Image from "next/image";
export default function AdminContect() {
  const [dataInfo, setDataInfo] = useState(null);

  useEffect(() => {
    const data = async () => {
      const res = await axios.get("/api/dataContect?id=83");
      setDataInfo(res.data);
    };
    data();
  }, [dataInfo]);
  return (
    <LayoutAdmin>
      {dataInfo && (
        <div>
          <div className="flex justify-between items-center my-10 mx-10 sm:mx-20">
            <div>
              <h1 className="text-3xl">ติดต่อเรา เเละ การเเต่ง SEO MATA TAG</h1>
            </div>
            <Link href={"/admin/configAdminContect/edit"}>
              <Button color="green">
                {" "}
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </Button>
            </Link>
          </div>
          <Card className="mt-6 w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Title meta Tag
              </Typography>
              <Typography>{dataInfo.title}</Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Meta Description
              </Typography>
              <Typography>{dataInfo.metadescription}</Typography>
            </CardBody>
          </Card>
          <Card className="mt-6 w-full">
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Video Link Youtube
              </Typography>
              <Typography>
                {""} {dataInfo.video}
              </Typography>
            </CardBody>
          </Card>
        </div>
      )}
    </LayoutAdmin>
  );
}
