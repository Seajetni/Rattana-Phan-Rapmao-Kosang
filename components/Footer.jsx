import { Typography } from "@material-tailwind/react";
 import  Image  from "next/image";
export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
           
      <Typography color="blue-gray" className="text-center font-normal">
        &copy;  2024 ห้างหุ้นส่วนจำกัด รัตนพรรณรับเหมาก่อสร้าง

      </Typography>
       <hr className="my-8 border-blue-gray-50" />
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  bg-white text-center md:justify-between">
      <Image
                src={"/logo.png"}
                width={50}
                height={50}
                alt="รัตนพรรณรับเหมาก่อสร้าง"
                style={{ width: "auto", height: "auto" }}
              />
        <ul className="flex  flex-center items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-xl"
            >
              หน้าเเรก
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/knowhow"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-xl"
            >
              เกี่ยวกับเรา
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/products"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-xl"
            >
              ผลงานของเรา
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500 text-xs lg:text-xl "
            >
              ติดต่อเรา
            </Typography>
          </li>
        </ul>
      </div>
    </footer>
  );
}