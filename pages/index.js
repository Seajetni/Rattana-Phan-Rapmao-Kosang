import Slider from "@/components/home/Slider";
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState();
  const [tel, setTel] = useState();
  const [message, setMessage] = useState();
  const [address, setAddress] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you can send the form data to a server
    console.log("Form submitted:", { name, tel, message, address });
  };
  const handleClear = () => {
    // Clear all form fields
    setName("");
    setTel("");
    setMessage("");
    setAddress("");
  };

  return (
    <Layout>
      <Slider />

      <section className="bg-gray-100">
        <div className="mx-auto  px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <div className="">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/FvOpPeKSf_4?si=CscrQx_jfApy1Bb8"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg  p-3 text-sm border-[#A8741A] outline-none focus:border-2 focus:ring-0"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg  p-3 text-sm border-[#A8741A] outline-none focus:border-2 focus:ring-0"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg  p-3 text-sm border-[#A8741A] outline-none focus:border-2 focus:ring-0"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg  p-3 text-sm  border-[#A8741A] outline-none focus:border-2 focus:ring-0  "
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-[#A8741A] px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
