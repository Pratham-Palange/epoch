"use client";

import React from "react";

import Img2 from "../assets/images/homeImages/kinfolkwork.webp";
import Img3 from "../assets/images/homeImages/lebuzzwork.webp";
import Img4 from "../assets/images/homeImages/nouriwork.webp";
import Img5 from "../assets/images/homeImages/onforwork.webp";

import { LiaArrowDownSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
  const projects = [
    {
      title: "Kinfolk",
      subtitle: "Editorial Design",
      image: Img2, // Replace with the actual image path
    },
    {
      title: "Le Buzz",
      subtitle: "Web Design & Development",
      image: Img3, // Replace with the actual image path
    },
    {
      title: "Daily Nouri",
      subtitle: "Brand Design & Packaging",
      image: Img4, // Replace with the actual image path
    },
    {
      title: "On For",
      subtitle: "Brand Design",
      image: Img5, // Replace with the actual image path
    },
  ];
  return (
    <main className="w-screen bg-rootColor">
      <section className="max-w-[83rem] mx-auto justify-end flex flex-col-reverse gap-8 md:items-start px-6 md:px-0 py-14 md:pt-28 md:pb-14">
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <LiaArrowDownSolid className="h-auto w-[20%] md:size-24 -ml-5" />
        </motion.div>

        <div className="flex flex-col w-full open-semibold gap-12">
          <p className="text-[42px] md:text-[68px] leading-[46.2px] md:leading-[74.8px]">
            Explore our
            <br />
            creative endeavor
          </p>
          <div className="open-regular w-full flex justify-end text-base">
            <p className="w-[48%] leading-6">
              Dive into our vibrant portfolio, a testament to our creative
              prowess and strategic vision. Explore the diverse range of
              projects we've crafted for esteemed clients, each one a unique
              fusion of innovation and excellence. From captivating brand
              identities to immersive digital experiences, our work speaks
              volumes about our dedication to crafting impactful solutions that
              resonate with audiences worldwide.
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[83rem] mx-auto pt-14 pb-28 px-6 md:px-0">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className="flex flex-col items-start gap-6">
                <div className="h-[380px] md:h-[640px] w-full overflow-hidden">
                  <img
                    src={project.image.src}
                    alt={project.title}
                    className="h-full w-full object-cover hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col w-full gap-3">
                  <h2 className="mt-4 text-2xl open-semibold uppercase">
                    {project.title}
                  </h2>
                  <h3 className="text-base open-regular">{project.subtitle}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
