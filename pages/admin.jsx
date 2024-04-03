import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
export default function admin() {

  const adminPage = [
    {
      name: "ผลงานของเรา" ,
      detals: "เเก้ไขหน้า ผลงานของเรา เเละดู Data" ,
      href : "/admin/AdminProduct"
    },
    {
      name: "เกี่ยวกับเรา" ,
      detals: "เเก้ไขหน้า เกี่ยวกับเรา เเละดู Data" ,
      href : "/admin/AdminAbout"
    },
    {
      name: "Top slide" ,
      detals: "เเก้ไขหน้า Slider เเละดู Data" ,
      href : "/admin/AdminHome"
    },
    {
      name: "ความรู้เกี่ยวกับงานก่อสร้าง" ,
      detals: "เเก้ไขหน้า ความรู้เกี่ยวกับงานก่อสร้าง เเละดู Data" ,
      href: "/admin/AdminKnowHow"
    },
    {
      name: "ติดต่อเรา" ,
      detals: "เเก้ไขหน้า ติดต่อเรา เเละดู Data" ,
      href: "/admin/AdminContect"
    }
  ]



  return (
    <LayoutAdmin>
      <div>
        <div className="flex justify-center my-10">
          <h1   className=" text-lg sm:text-3xl">ยินดีต้อนรับเข้าสู่ ระบบ Admin รัตนพรรณรับเหมาก่อสร้าง </h1>
        </div>

        <div  className=" grid grid-cols-1 sm:grid-cols-5">
          {adminPage.map(( item , index) => (
            <Card className="mt-6 w-96 " key={index}>
            <CardBody >
              <Typography variant="h5" color="blue-gray" className="mb-2">
               {item.name}
              </Typography>
              <Typography>
                {item.detals}
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button color="blue"><Link href={item.href}>ไปที่หน้า</Link></Button>
            </CardFooter>
          </Card>
          ))}
          
        </div>


      </div>
    </LayoutAdmin>
  );
}
