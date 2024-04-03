import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React, { useState } from "react";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import  axios  from "axios";
import { useRouter } from "next/router";
import Image from 'next/image'
export default function Form({
    id ,
    name:existingName ,
    details:existingDetails ,
    date:existingDate ,
    img:existingImg
    
}) {
  const [name, setName] = useState(existingName  || "");
  const [details, setDetails] = useState(existingDetails || "");
  const [img, setImg] = useState(existingImg || "");
  const [date, setDate] = useState(existingDate || "");
  const router = useRouter();

 
  const handleSummit = async (e) => {
    e.preventDefault();

    if(id){
        try {
            fetch('/api/data', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: name,
                  details: details,
                  img: img,
                  date: date,
                }),
              })
              .then(response => response.text())
              .then(data => console.log(data))
              .catch(error => console.error('Error:', error));
              
        } catch (error) {
            console.error("Error:", error);
        }
        router.push('/admin/AdminKnowHow')
    }else{
    try {
        fetch('/api/data?id=' + id , {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: name,
              details: details,
              img: img,
              date: date,
            }),
          })
          .then(response => response.text())
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
          
    } catch (error) {
        console.error("Error:", error);
    }
    router.push('/admin/AdminKnowHow')
}
};



const ImgeUpload = (e) => {
   
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]); // Accessing files property to get the selected file
    reader.onload = () => {
      setImg(reader.result);
    };
    reader.onerror = (error) => {
      console.log("Error :", error);
    };
  };

  return (
    <>
      <div className=" flex justify-center my-20 ">
        <form onSubmit={handleSummit} className="flex w-72 flex-col gap-6">
          <Input
            variant="static"
            label="Name"
            placeholder="Static"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            variant="standard"
            label="Img"
            type="file"
            placeholder="Standard"
            accept="image/*"
            onChange={ImgeUpload}
          />
                    {img == "" || img == null ? (
            ""
          ) : (
            <img width={100} height={100} src={img} />
          )}
          <Textarea
            variant="outlined"
            label="Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <div>
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  label="Select a Date"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                    day: "h-9 w-9 p-0 font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <Button color="amber" type="submit">
            Save
          </Button>
        </form>
      </div>
    </>
  );
}
