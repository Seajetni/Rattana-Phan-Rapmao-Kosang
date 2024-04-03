import { Typography } from "@material-tailwind/react";
import Image from "next/image";
export default function Footer() {
  return (
    <div className=" w-full  ">
      <div className=" w-full  ">
        <div className="flex flex-col  w-full h-full  px-8 py-4 sm:px-8   sm:py-8 items-center justify-center gap-y-6 gap-x-12  bg-[#A77419]   text-center  ">
          <ul className=" flex  sm:flexflex-center sm:flexitems-center   gap-y-2 gap-x-8 ">
            <li>
              <Typography
                as="a"
                href="/"
                color="blue-gray"
                className=" sm:font-normal font-bold transition-colors text-white  hover:border-b-2   text-xs sm:text-lg"
              >
                หน้าเเรก
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/knowhow"
                color="blue-gray"
                className=" sm:font-normal font-bold transition-colors text-white hover:border-b-2 text-xs sm:text-lg "
              >
                เกี่ยวกับเรา
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/products"
                color="blue-gray"
                className=" sm:font-normal font-bold transition-colors text-white hover:border-b-2 text-xs sm:text-lg"
              >
                ผลงานของเรา
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="/about"
                color="blue-gray"
                className="sm:font-normal font-bold transition-colors text-white hover:border-b-2  text-xs sm:text-lg"
              >
                ติดต่อเรา
              </Typography>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <Typography
          color="blue-gray"
          className="!text-white text-center px-8 py-4 sm:px-8   sm:py-8   bg-[#755211] font-normal "
        >
          &copy; 2024 ห้างหุ้นส่วนจำกัด รัตนพรรณรับเหมาก่อสร้าง

        </Typography>
      </div>
    </div>
  );
}
