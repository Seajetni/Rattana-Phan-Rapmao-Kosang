import Layout from "@/components/Layout";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/Slider";
import axios from "axios";

export default function about() {
  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!content) {
      const data = async () => {
        const res = await axios.get("/api/dataAbout?id=1");
        setContent(res.data);
      };
      data();
    }
  }, [content]);

  return (
    <Layout>
      {content && (
        <div>
          <div className="flex justify-center  mt-10">
            <h1 className=" text-2xl text-[#A8741A]">เกี่ยวกับเรา</h1>
          </div>
          <div className=" mx-10 sm:mx-20 my-10">
            <p className=" text-lg ">{content.title}</p>
          </div>
          <Slider  />

          <div className="">
            <div>
              <div className="mx-auto max-w-screen-xl px-4 py-8  ">
                <div className="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
                  <div className="lg:py-24">
                    <h3 className="text-2xl  font-semibold sm:text-2xl text-[#A8741A]">
                      {content.name}
                    </h3>
                    <p className="mt-4 ">{content.details}</p>
                  </div>
                  <div>
                    <Image
                      width={100}
                      height={100}
                      alt={content.name}
                      src={content.img}
                      className=" w-auto h-auto"
                    />
                  </div>
                </div>

                <div className="  grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16  ">
                  <div>
                    <iframe
                      className="h-full w-full rounded-lg"
                      src={`https://www.youtube.com/embed/${content.video}`}
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <div className="lg:py-24">
                    <h3 className="text-2xl  font-semibold sm:text-2xl text-[#A8741A]">
                      {content.name2}
                    </h3>
                    <p className="mt-4 ">{content.details2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
