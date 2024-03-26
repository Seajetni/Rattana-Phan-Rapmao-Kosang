import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";
export default function Nav({
  packageRef,
  scrollTo,
  sectionRef,
  headRef,
  contactRef,
  reviewRef,
}) {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-4   lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium "
      >
        <button
          className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          onClick={() => scrollTo(headRef)}
        >
          หน้าเเรก
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <button
          className="flex items-center text-lg"
          onClick={() => scrollTo(sectionRef)}
        >
          เกี่ยวกับเรา
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <button
          className="flex items-center text-lg"
          onClick={() => scrollTo(packageRef)}
        >
          ผลงานของเรา
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <button
          className="flex items-center text-lg"
          onClick={() => scrollTo(reviewRef)}
        >
          ความรู้ก่อสร้าง
        </button>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <button
          className="flex items-center text-lg"
          onClick={() => scrollTo(contactRef)}
        >
          ติดต่อเรา
        </button>
      </Typography>
    </ul>
  );

  return (
    <>
      <div className="mt-10">
        <ul className=" flex justify-around">
          <li>
            <Link href={'/'} ></Link> <Image
              src={"/logo.png"}
              alt=""
              width={40}
              height={100}
              className=" w-auto h-auto"
            />
          </li>
          <li className="bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-2  border-yellow-400 hover:border-yellow-500 rounded">
            <Link href={'/'} > หน้าเเรก</Link>
          </li>
          <li className=" bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-2  border-yellow-400 hover:border-yellow-500 rounded">
            <Link href={'/contect'} >เกี่ยวกับเรา</Link> 
          </li>
          <li className=" bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-2  border-yellow-400 hover:border-yellow-500 rounded">
            <Link href={'/'} >ผลงานของเรา</Link> 
          </li>
          <li className=" bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-2  border-yellow-400 hover:border-yellow-500 rounded">
            <Link href={'/'} >ความรู้ก่อสร้าง</Link> 
          </li>
          <li className=" bg-[#ffd900] hover:bg-yellow-400 text-white font-bold py-2 px-4 border-t-4 border-l-2  border-yellow-400 hover:border-yellow-500 rounded">
            <Link href={'/'} >ติดต่อเรา</Link> 
          </li>
        </ul>
      </div>
    </>
  );
}
