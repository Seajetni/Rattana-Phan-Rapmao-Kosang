import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTransition, animated, config } from 'react-spring';

export default function Product() {
  const [startIndex, setStartIndex] = useState(0);


    const content = [
        {
          id: "1",
          img: "https://media.istockphoto.com/id/1025397702/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99-%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95.jpg?s=1024x1024&w=is&k=20&c=no01pItAxUz4mzss3QrHsiobzFCt70nQDrzXrVOZK8M=",
          title:
            "😍😍    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium molestias porro. Nihil animi placeat dolores. Suscipit maiores deleniti nulla eius, dolorem doloremque, veritatis, sed expedita totam voluptatibus in commodi.",
        },
    
        {
          id: "2",
          img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
          title:
            "🎉🎊Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "3",
          img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
          title:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "4",
          img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
          title:
            "🎇Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "5",
          img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
          title:
            "🎉🎊Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "6",
          img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
          title:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "7",
          img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
          title:
            "🎇Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "8",
          img: "https://media.istockphoto.com/id/1025397702/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99-%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95.jpg?s=1024x1024&w=is&k=20&c=no01pItAxUz4mzss3QrHsiobzFCt70nQDrzXrVOZK8M=",
          title:
            "😍😍    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium molestias porro. Nihil animi placeat dolores. Suscipit maiores deleniti nulla eius, dolorem doloremque, veritatis, sed expedita totam voluptatibus in commodi.",
        },
    
        {
          id: "9",
          img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
          title:
            "🎉🎊Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "10",
          img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
          title:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "11",
          img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
          title:
            "🎇Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "12",
          img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
          title:
            "🎉🎊Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "13",
          img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
          title:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "14",
          img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
          title:
            "🎇Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "15",
          img: "https://media.istockphoto.com/id/1025397702/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%83%E0%B8%99-%E0%B9%81%E0%B8%9F%E0%B8%A3%E0%B8%87%E0%B8%81%E0%B9%8C%E0%B9%80%E0%B8%9F%E0%B8%B4%E0%B8%A3%E0%B9%8C%E0%B8%95.jpg?s=1024x1024&w=is&k=20&c=no01pItAxUz4mzss3QrHsiobzFCt70nQDrzXrVOZK8M=",
          title:
            "😍😍    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium molestias porro. Nihil animi placeat dolores. Suscipit maiores deleniti nulla eius, dolorem doloremque, veritatis, sed expedita totam voluptatibus in commodi.",
        },
    
        {
          id: "16",
          img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
          title:
            "🎉🎊Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "17",
          img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
          title:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "18",
          img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
          title:
            "🎇Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "19",
          img: "https://media.istockphoto.com/id/1225226885/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%B2%E0%B8%84%E0%B8%B2%E0%B8%A3%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9E%E0%B8%B1%E0%B8%81%E0%B8%AD%E0%B8%B2%E0%B8%A8%E0%B8%B1%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2.jpg?s=1024x1024&w=is&k=20&c=vbAq-TeEFizFnvkLEZmUM9mgvC5uOZ67fZ8SpynjUgI=",
          title:
            "🎉🎊Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "20",
          img: "https://media.istockphoto.com/id/1669856147/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%97%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%97%E0%B9%8C%E0%B8%97%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%A1%E0%B8%B1%E0%B8%A2%E0%B8%9E%E0%B8%A3%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%9E%E0%B8%B7%E0%B9%89%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%99%E0%B8%B1%E0%B9%88%E0%B8%87%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%AA%E0%B8%B1%E0%B8%A1%E0%B8%9C%E0%B8%B1%E0%B8%AA%E0%B9%84%E0%B8%94%E0%B9%89.jpg?s=1024x1024&w=is&k=20&c=q_8V1bD_ZEEotY9yCPzi317qRkIxiKMfHDWIdLnEmOs=",
          title:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
        {
          id: "21",
          img: "https://media.istockphoto.com/id/105636397/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%AD%E0%B8%9E%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%95%E0%B9%80%E0%B8%A1%E0%B8%99%E0%B8%95%E0%B9%8C.jpg?s=1024x1024&w=is&k=20&c=_gXIdmsP_KhXcRyeV4A4lyHgJ5bLLS5nEsD8k9m4sew=",
          title:
            "🎇Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, quis. Optio numquam rerum ducimus mollitia, itaque delectus ratione odit. Quam consectetur esse mollitia omnis iste temporibus itaque est ipsam pariatur!",
        },
      ];

      const itemsPerPage = 15;
      const totalPages = Math.ceil(content.length / itemsPerPage);
  
 

      function isMobileDevice() {
        if (typeof window !== 'undefined') {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        }
        return false; // Return false if running on the server-side
    }
    
    let transitions;

    if (typeof window !== 'undefined' && isMobileDevice()) {
        transitions = useTransition(
            content.slice(startIndex, startIndex + itemsPerPage), // รายการที่ต้องการแสดงในหน้านี้
            {
                trail: 400, // เวลาในการแสดงผลรายการต่อๆกัน
                from: { opacity: 0, transform: 'translateY(100px)' },
                enter: { opacity: 1, transform: 'translateY(0px)' },
                config: config.slow,
            }
        );
    } else {
        transitions = useTransition(
            content.slice(startIndex, startIndex + itemsPerPage), // รายการที่ต้องการแสดงในหน้านี้
            {
                trail: 400, // เวลาในการแสดงผลรายการต่อๆกัน
                from: { opacity: 0, transform: 'translateX(300px)' },
                enter: { opacity: 1, transform: 'translateX(0px)' },
                config: config.slow,
            }
        );
    }
    
    
    
  
      return (
          <div className="flex flex-col items-center">
              <div>
                  <ul className="bg-white px-10 py-2 rounded-xl mt-2">
                      {transitions((style, item) => (
                          <animated.li style={style} key={item.id}>
                              <Link
                                  className="lg:flex bg-white text-[#A8741A] rounded-xl mb-2 h-[250px]"
                                  href={"/"}
                              >
                                  <Image
                                      src={item.img}
                                      alt="condo"
                                      priority
                                      width={500}
                                      height={100}
                                      className="w-auto h-auto"
                                  />
                                  <div className="lg:w-full mx-10 my-10">
                                      <div className="h-full lg:w-[600px]">
                                          <div className="h-full flex justify-center items-center">
                                              <p>{item.title}</p>
                                          </div>
                                      </div>
                                  </div>
                              </Link>
                              <hr />
                              <hr className="mb-1" />
                          </animated.li>
                      ))}
                  </ul>
              </div>
              {totalPages > 1 && (
                  <div className="mt-2 flex justify-end lg:right-96 relative w-full">
                      {[...Array(totalPages).keys()].map((page) => (
                          <button
                              key={page}
                              onClick={() => setStartIndex(page * itemsPerPage)}
                              className={`mx-1 px-2 rounded-full focus:outline-none ${
                                  startIndex === page * itemsPerPage
                                      ? "bg-blue-500 text-white"
                                      : "bg-gray-300"
                              }`}
                          >
                              {page + 1}
                          </button>
                      ))}
                  </div>
              )}
          </div>
      );
  }