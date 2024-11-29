"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

import { LiaArrowDownSolid } from "react-icons/lia";
import { motion } from "framer-motion";

import Img1 from "./assets/images/homeImages/together.webp";
import Img2 from "./assets/images/homeImages/kinfolkwork.webp";
import Img3 from "./assets/images/homeImages/lebuzzwork.webp";
import Img4 from "./assets/images/homeImages/nouriwork.webp";
import Img5 from "./assets/images/homeImages/onforwork.webp";

export default function Home() {
  const steps = [
    {
      number: "01",
      title: "DISCOVERY",
      description:
        "Uncover brand essence through research, goals, & audience insights. Dive deep into context, objectives, and market dynamics to inform strategy.",
    },
    {
      number: "02",
      title: "IDEATE",
      description:
        "Spark creativity, explore possibilities, and foster innovative ideas. Collaborate to generate diverse concepts and refine solutions.",
    },
    {
      number: "03",
      title: "DEFINE",
      description:
        "Clarify vision, refine concepts, and craft strategic plans. Set clear objectives, outline key messages, and establish direction.",
    },
    {
      number: "04",
      title: "EXECUTE",
      description:
        "Bring visions to life with precision, implementing strategies effectively. Seamlessly translate plans into action, ensuring quality and impact.",
    },
  ];

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

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const textWidth = marquee.scrollWidth / 2;

    const animate = () => {
      let startTime = null;
      const duration = 25000; // Adjust speed here

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        const translateX = progress * textWidth;

        marquee.style.transform = `translateX(${-translateX}px)`;

        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          marquee.style.transform = "translateX(0)";
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(step);
    };

    animate();
  }, []);

  return (
    <main className=" bg-rootColor">
      <section className="max-w-[84rem] mx-auto justify-end flex flex-col md:flex-row gap-8 md:items-end px-6 md:px-0 py-14 md:py-28">
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <LiaArrowDownSolid className="h-auto w-[20%] -ml-2 md:ml-0 md:size-24" />
        </motion.div>

        <div className="flex flex-col  open-semibold">
          <p className="text-[42px] md:text-[68px] leading-[46.2px] md:leading-[74.8px]">
            A unique agency
          </p>
          <p className="text-[42px] md:text-[68px] leading-[46.2px] md:leading-[74.8px]">
            crafting excellence
          </p>
          <p className="text-[42px] md:text-[68px] leading-[46.2px] md:leading-[74.8px]">
            for top brands
          </p>
        </div>
      </section>
      <section className="w-screen flex">
        <div className="overflow-hidden whitespace-nowrap flex items-center relative">
          <div ref={marqueeRef} className="flex">
            <div className="text-[224px] w-auto md:text-[350px] open-semibold leading-[290px] whitespace-nowrap mr-28">
              WE'RE
            </div>
            <div className="text-[224px] w-auto md:text-[350px] open-semibold leading-[290px] whitespace-nowrap mr-28">
              EPOCH
            </div>
            <div className="text-[224px] w-auto md:text-[350px] open-semibold leading-[290px] whitespace-nowrap mr-28">
              WE'RE
            </div>
            <div className="text-[224px] w-auto md:text-[350px] open-semibold leading-[290px] whitespace-nowrap mr-28">
              EPOCH
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[84rem] mx-auto py-14 md:py-[224px] px-6 md:px-0">
        <div className="flex flex-col md:flex-row justify-center items-start gap-28 md:gap-12">
          <div className="w-full md:w-[50%] flex flex-col justify-center gap-14 md:gap-28">
            <div className="open-semibold text-lg">01/</div>
            <div className="flex flex-col gap-8">
              <h2 className="open-semibold text-[32px] leading-[38.4px]">
                CRAFTING EXCELLENCE IN DESIGN AND BRANDING
              </h2>
              <p className="open-regular text-base">
                At Epoch, we are more than just a design agency; we are the
                architects of brand narratives, the sculptors of visual
                identities, and the custodians of excellence in the world of
                branding.
              </p>
              <p className="open-regular text-base">
                Founded on the principle of pushing the boundaries of
                creativity, Epoch stands at the forefront of innovation,
                redefining the very essence of brand communication.
              </p>

              <p className="open-regular text-base">
                With a team of passionate creatives and strategic thinkers, we
                embark on every project with a commitment to excellence, weaving
                together stories that resonate with audiences and leave a
                lasting impression.
              </p>
              <div className="open-semibold text-base pb-4 border-b-2 border-black max-w-28 whitespace-nowrap">
                More about us
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%]">
            <div className="h-[512px] md:h-[768px] w-auto">
              <img
                src={Img1.src}
                alt="Work Image"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[84rem] mx-auto py-28 px-6 md:px-0">
        <div className="flex flex-col gap-14 md:gap-28">
          <p className="text-lg open-semibold">02/</p>
          <div className="flex flex-col gap-14">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-0">
              <h2 className="open-semibold text-[32px] leading-[38.4px]">
                RECENT <br />
                PROJECTS
              </h2>
              <h3 className="open-semibold pb-2 border-b-2 border-black">
                See all projects
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col items-start gap-6">
                  <div className="h-[380px] md:h-[640px] w-full overflow-hidden">
                    <img
                      className="object-cover hover:scale-110 transition-all duration-500 h-full w-full "
                      src={project.image.src}
                      alt={project.title}
                    />
                  </div>
                  <div className="flex flex-col w-full gap-3">
                    <h2 className="mt-4 text-2xl open-semibold uppercase">
                      {project.title}
                    </h2>
                    <h3 className="text-base open-regular">
                      {project.subtitle}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[84rem] mx-auto py-14 md:py-28 px-6 md:p-0">
        <div className=" min-h-screen">
          <div className="flex flex-col gap-12 md:gap-28">
            <p className="text-lg open-semibold">03/</p>
            <div className="flex flex-col md:flex-row gap-12 md:gap-28">
              <h2 className="text-[32px] open-semibold leading-[38.4px] whitespace-nowrap">
                HOW WE
                <br />
                WORK?
              </h2>
              <div className="flex flex-col">
                {steps.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row py-12 gap-14 md:gap-28 ${
                      index === 0
                        ? "border-t-[0.5px] border-b-[0.5px] border-gray-500"
                        : "border-b-[0.5px] border-gray-500"
                    }`}
                  >
                    <div className="open-semibold text-base">{step.number}</div>
                    <div className="flex flex-col gap-6">
                      <p className="open-semibold text-base">{step.title}</p>
                      <p className="open-regular text-base">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[84rem] mx-auto py-28 flex flex-col items-center gap-12 px-6 md:px-0">
        <h2 className="text-center open-semibold leading-[1.1em] text-[42px] md:text-[68px]">
          Embark on a<br /> creative journey <br />
          with Epoch
        </h2>
        <p className="open-semibold text-center text-base pb-2 border-b-2 border-black max-w-32 whitespace-nowrap">
          Connect with us
        </p>
      </section>
    </main>
  );
}
