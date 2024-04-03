import LayoutAdmin from "@/components/admin/LayoutAdmin";
import React, { useEffect, useReducer, useState } from "react";
import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useRouter } from "next/router";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = ["รูปภาพ", "ข้อความ", "Status", "วันที่อัพโหลด", ""];

export default function AdminKnowHow() {
  const [TABLE_ROWS, setTABLE_ROWS] = useState([]);
  const [id, setID] = useState([]);
  const router = useRouter();
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("/api/data")
      .then((response) => response.json())
      .then((data) => setTABLE_ROWS(data))
      .catch((error) => console.error("Error:", error));
  });

  const Delete = () => {
    fetch("/api/dataProduct", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        console.log(data);

        router.reload;
      })
      .catch((error) => console.error("Error:", error));
  };

  const [startIndex, setStartIndex] = useState(0);

  const handleForward = () => {
    setStartIndex((prevIndex) => Math.min(prevIndex + 10));
  };

  const handleRewind = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 10, 0));
  };

  return (
    <LayoutAdmin>
      <div>
        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className="mb-8 flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5" color="blue-gray">
                  ความรู้ก่อสร้าง
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  หน้าสำหรับเเก้ไข หน้าความรู้ก่อสร้าง
                </Typography>
              </div>
              <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                <Button variant="outlined" size="sm">
                  <Typography
                    as="a"
                    href={`/admin/configAdminKnowHow/New`}
                    className="font-medium"
                  >
                    New
                  </Typography>
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                />
              </div>
            </div>
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head, index) => (
                    <th
                      key={head}
                      className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      >
                        {head}{" "}
                        {index !== TABLE_HEAD.length - 1 && (
                          <ChevronUpDownIcon
                            strokeWidth={2}
                            className="h-4 w-4"
                          />
                        )}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.slice(startIndex, startIndex + 10)
                  .filter((item) => {
                    return search.toLocaleLowerCase() === ""
                      ? item
                      : item.name.toLocaleLowerCase().includes(search);
                  })
                  .map(
                    (
                      { img, name, email, details, org, online, date, id },
                      index
                    ) => {
                      const isLast = index === TABLE_ROWS.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Avatar src={img} alt={name} size="sm" />
                              <div className="flex flex-col">
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {name}
                                </div>
                                <div
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal opacity-70"
                                >
                                  {email}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex flex-col">
                              <div
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {details}
                              </div>
                              <div
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70"
                              >
                                {org}
                              </div>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="w-max">
                              <Chip
                                variant="ghost"
                                size="sm"
                                value={online ? "online" : "offline"}
                                color={online ? "green" : "blue-gray"}
                              />
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {date}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Tooltip content="เเก้ไข">
                              <IconButton variant="text">
                                <Typography
                                  as="a"
                                  href={`/admin/configAdminKnowHow/${id}`}
                                  className="font-medium"
                                >
                                  <PencilIcon className="h-4 w-4" />
                                </Typography>
                              </IconButton>
                            </Tooltip>
                            <Tooltip content="ลบ">
                              <IconButton
                                variant="text"
                                onPointerDown={(e) => setID(id)}
                              >
                                <div className="font-medium">
                                  <svg
                                    onClick={Delete}
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
                                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                                    />
                                  </svg>
                                </div>
                              </IconButton>
                            </Tooltip>
                          </td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </table>
          </CardBody>

          <CardFooter>
            <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal"
              >
                Page {Math.ceil(startIndex / 10) + 1} of{" "}
                {Math.ceil(TABLE_ROWS.length / 10)}
              </Typography>
              <div className="flex gap-2">
                <Button
                  variant="outlined"
                  size="sm"
                  disabled={Math.ceil(startIndex / 10) + 1 === 1}
                  onClick={handleRewind}
                >
                  Previous
                </Button>
                <Button
                  variant="outlined"
                  size="sm"
                  disabled={
                    Math.ceil(startIndex / 10) + 1 ===
                    Math.ceil(TABLE_ROWS.length / 10)
                  }
                  onClick={handleForward}
                >
                  Next
                </Button>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
    </LayoutAdmin>
  );
}
