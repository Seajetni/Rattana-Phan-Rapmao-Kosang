import React from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

export default function NavAdmin() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav className="flex   justify-between shadow-2xl">
      <Link href={"/admin"} className="flex items-center">
        <div className="flex justify-center">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            alt="รัตนพรรณรับเหมาก่อสร้าง"
            className="h-24 w-24 sm:w-auto sm:h-auto"
          />
        </div>

        <div className=" sm:ml-10">
          <h2 className=" sm:text-3xl text-xs text-[#A77419]">
            ระบบรับเหมาก่อสร้างหัวหิน ทีมงานรัตนพรรณ
          </h2>
          <h3 className=" text-xs  text-[#A77419]">RATTANAPHAN DEVELOPMENT</h3>
        </div>
      </Link>
      <div className=" flex  items-center justify-center mr-10">
        <IconButton
          variant="text"
          size="lg"
          onClick={openDrawer}
          className="!text-white bg-[#A77419]"
        >
          {isDrawerOpen ? (
            <XMarkIcon className="h-8 w-8 stroke-2" />
          ) : (
            <Bars3Icon className="h-8 w-8 stroke-2" />
          )}
        </IconButton>
      </div>

      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <Link href={"/admin"} className="mb-2 flex items-center gap-4 p-4">
            <Image
              src={"/logo.png"}
              width={50}
              height={50}
              alt="รัตนพรรณรับเหมาก่อสร้าง"
              className="h-24 w-24 sm:w-auto sm:h-auto"
            />
            <Typography color="blue-gray" className=" !text-sm">
              รัตนพรรณรับเหมาก่อสร้าง
            </Typography>
          </Link>
          <List>
            <Accordion
              open={open === 2}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Page
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography
                      as="a"
                      href="/admin/AdminHome"
                      className="font-medium"
                    >
                      Top Slide
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography
                      as="a"
                      href="/admin/AdminAbout"
                      className="font-medium"
                    >
                      เกี่ยวกับเรา
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography
                      as="a"
                      href="/admin/AdminProduct"
                      className="font-medium"
                    >
                      ผลงานของเรา
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography
                      as="a"
                      href="/admin/AdminKnowHow"
                      className="font-medium"
                    >
                      ความรู้ก่อสร้าง
                    </Typography>
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    <Typography
                      as="a"
                      href="/admin/AdminContect"
                      className="font-medium"
                    > 
                      ติดต่อเรา เเละ Meta Tag
                    </Typography>
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>

            <hr className="my-2 border-blue-gray-50" />

            <ListItem>
              <ListItemPrefix>
                <PowerIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Link href={"/"}>Log Out</Link>
            </ListItem>
          </List>
        </Card>
      </Drawer>
    </nav>
  );
}
