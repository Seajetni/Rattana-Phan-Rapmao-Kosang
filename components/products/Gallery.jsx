import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
  Button,
} from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
export function GalleryWithTab() {
  const [activeTab, setActiveTab] = useState("");
  const [res, setRes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/dataProduct")
      .then((response) => {
        setRes(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const data = res;

  console.log(data);

  return (
    <Tabs value="งานปรับปรุงต่อเติม">
      <TabsHeader
        className="bg-transparent  mx-5 "
        indicatorProps={{
          className: "bg-[#A77419]   shadow-none   ",
        }}
      >
        {data.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={
              activeTab === value
                ? " text-white  p-2  h-16 sm:h-full  "
                : "  bg-gray-900/10 p-2 h-16   sm:h-full"
            }
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody className="grid grid-cols-1 gap-4 ">
        {data.map(({ value, images }) => (
          <TabPanel
            className="grid grid-cols-2 gap-4 md:grid-cols-3"
            key={value}
            value={value}
          >
            {images?.map(({ imageLink, name , id  }, index) => (
              <div key={index} className="relative">
                <div className="group">
                  <Image
                    width={1000}
                    height={100}
                    className="h-40 w-full max-w-full rounded-lg object-cover object-center transition-opacity duration-300 ease-in-out group-hover:opacity-50"
                    src={imageLink}
                    alt="image-photo"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div>
                      <p className=" text-center">{name}</p>
                      <Button color="amber">
                        <Link href={`/product/${id}`} className="text-white">
                          ดูผลงาน
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
