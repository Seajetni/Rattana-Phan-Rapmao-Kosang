import Layout from "@/components/Layout";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "@/components/contect/Slider";
export default function contect() {
  const content = {
    details: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, laboriosam. Numquam, dolores. Rem velit dicta natus temporibus assumenda corrupti ad, amet sunt adipisci eligendi quis suscipit id cum sapiente! Est.
            Molestiae dicta, laboriosam dolores harum dolor odio. Eaque nemo perferendis reiciendis placeat adipisci sunt eligendi minus, quas, inventore consequatur hic sapiente nostrum! Illum, deserunt maiores. Blanditiis doloribus facilis veritatis provident.
            Assumenda placeat libero eaque, porro quidem, odit, fuga reprehenderit voluptates quis facere mollitia facilis molestiae error aspernatur doloribus quaerat corrupti commodi nam! Totam, voluptate nisi! Tenetur vero eos exercitationem laborum!`,
  };

  return (
    <Layout>
      <div className=" flex flex-col">
        <div className="flex">
          <h1 className=" text-[#ffd900] border-4 border-slate-300  p-2 my-2 mx-3 text-xl">
            เกี่ยวกับเรา
          </h1>
        </div>


          <p  className="text-lg border border-black p-2 my-2">
            {content.details}
          </p>

      </div>

      <div>
        <Slider />
      </div>
<div>
<div className="flex  mt-10">
        <div  >
        <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/z6BHe5o3kMI?si=ZZcwtgODKGbEU2JR"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
        </div>
        <div className=" text-xl ml-10">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima corporis architecto cumque perferendis consequatur necessitatibus, voluptate odio culpa eos atque dolores officiis quas fugit nesciunt repellat minus ullam. Ratione, exercitationem.
            Dolor dolore illum omnis accusantium ut temporibus aliquam eaque molestiae magni eos, explicabo adipisci sapiente, expedita non quas perspiciatis. Voluptatem, rerum rem omnis at nisi laboriosam. Minima nisi quas illo!
            Reiciendis quis totam temporibus, quo eum blanditiis quibusdam sunt natus. Ducimus amet quo cupiditate eum recusandae laudantium, iste qui eveniet necessitatibus sit neque id consequuntur odio, ut sed omnis tempora!
            Minus amet molestias suscipit numquam nam placeat itaque ipsum cupiditate dolores adipisci, distinctio vitae natus vel? Laboriosam, repellat omnis similique, minus maxime enim, ea accusamus reiciendis veritatis explicabo itaque! Dignissimos.
            laborum sed, quae quod iure, voluptatibus quis dignissimos. Obcaecati, voluptates rerum aspernatur laboriosam, reprehenderit labore explicabo possimus eos, culpa porro quasi esse velit?
            Dignissimos, praesentium iure? Blanditiis fugit perspiciatis dicta soluta magni voluptates omnis, voluptatem quos in ipsam nemo ut incidunt, nisi vitae cum.
        </div>
      </div>
      <div className=" text-xl mt-4">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos omnis ducimus, maxime delectus molestiae nihil fugit nostrum amet similique quis. Ipsam repellendus tempora officiis minima pariatur facilis vel sed laudantium?
        Minima numquam aperiam facilis optio quam, velit obcaecati nostrum officia neque odit qui nobis, in tempore! Saepe a quia optio vitae. Pariatur natus fugiat, aut dignissimos eligendi animi blanditiis provident.
        Aperiam, est architecto placeat natus, culpa enim vel veniam quae alias nam blanditiis aliquid. Autem earum, maxime, quibusdam doloribus tenetur qui dolorum debitis id cupiditate nam animi nihil adipisci molestias.
      </div>
</div>
      

    </Layout>
  );
}
