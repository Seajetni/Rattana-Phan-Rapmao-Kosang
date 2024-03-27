
import Card from "@/components/home/Card";
import Form1 from "@/components/home/Form";
import Form from "@/components/home/Form";
import Slider from "@/components/home/Slider";
import Layout from "@/components/Layout";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {


  return (
    <Layout>
      <Slider />

      <Card/>

      <Form/>
     

    </Layout>
  );
}
