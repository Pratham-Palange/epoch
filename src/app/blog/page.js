"use client";
import React from "react";
import blogImg1 from "../assets/images/blog/blogImg1.webp";
import blogImg2 from "../assets/images/blog/blogImg2.webp";
import blogImg3 from "../assets/images/blog/blogImg3.webp";
import blogImg4 from "../assets/images/blog/monitors.jpg";
import { LiaArrowDownSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import Image from "next/image";

export default function page() {
  const projects = [
    {
      title: "February 1, 2024",
      subtitle: "The power of brand storytelling",
      image: blogImg1, // Replace with the actual image path
    },
    {
      title: "February 1, 2024",
      subtitle: "Unlocking the secrets of visual branding",
      image: blogImg2, // Replace with the actual image path
    },
    {
      title: "February 1, 2024",
      subtitle: "Mastering the art of social media branding",
      image: blogImg3, // Replace with the actual image path
    },
    {
      title: "February 1, 2024",
      subtitle: "The future of branding",
      image: blogImg4, // Replace with the actual image path
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
            Explore our latest perspectives
          </p>
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
                  <h2 className=" text-base open-regular">{project.title}</h2>
                  <h3 className=" text-2xl open-semibold leading-[28.8px]">
                    {project.subtitle}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
