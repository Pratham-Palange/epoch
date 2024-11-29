"use client";

import React, { useEffect, useRef } from "react";
import { LiaArrowDownSolid } from "react-icons/lia";
import { motion } from "framer-motion";

import Img1 from "../assets/images/about/anna.webp";
import Img2 from "../assets/images/about/johannes.webp";
import Img3 from "../assets/images/about/sophie.webp";
import Img4 from "../assets/images/about/felix.webp";
import Img5 from "../assets/images/about/aboutImg5.webp";

import Image from "next/image";

export default function page() {
  const steps = [
    { number: 1, title: "BRAND IDENTITIES" },
    { number: 2, title: "DIGITAL MARKETING" },
    { number: 3, title: "MEDIA STRATEGY" },
    { number: 4, title: "ADVERTISING" },
    { number: 5, title: "WEB DESIGN" },
    { number: 6, title: "ICON DESIGN" },
  ];

  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const textWidth = marquee.scrollWidth / 2;

    const animate = () => {
      let startTime = null;
      const duration = 20000; // Adjust speed here

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

  const projects = [
    {
      title: "ANNA MULLER",
      subtitle: "Creative Director",
      image: Img1, // Replace with the actual image path
    },
    {
      title: "JOHANNES WAGNER",
      subtitle: "Web Designer",
      image: Img2, // Replace with the actual image path
    },
    {
      title: "SOPHIE SCHMIDT",
      subtitle: "Graphic Designer",
      image: Img3, // Replace with the actual image path
    },
    {
      title: "FELIX BECKER",
      subtitle: "Copy Writer",
      image: Img4, // Replace with the actual image path
    },
  ];

  return (
    <main className="bg-rootColor">
      <section className="max-w-[82.5rem] mx-auto justify-end flex flex-col md:flex-row-reverse gap-8 md:items-end px-6 md:px-0 py-14 md:pt-28 md:pb-14">
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

        <div className="flex flex-col w-[48%] open-semibold gap-12">
          <p className="text-[42px] md:text-[68px] leading-[46.2px] md:leading-[74.8px]">
            Crafting excellence,
            <br />
            shaping brands
          </p>
          <p className="open-regular text-base leading-6">
            Discover Epoch, where creativity and precision converge to craft
            brand excellence. Since our inception, we've been dedicated to
            shaping brands that resonate deeply with audiences. With a
            passionate team of innovators, we strive to push boundaries and
            redefine industry standards.
          </p>
        </div>
      </section>

      <section className="max-w-[82.5rem] mx-auto py-28 px-6 md:px-0">
        <div className="flex flex-col gap-14 md:gap-28">
          <p className="text-lg open-semibold">02/</p>
          <div className="flex flex-col gap-28">
            <div className="flex flex-col md:flex-row justify-start gap-14 md:gap-28">
              <div className="flex flex-col gap-8">
                <h2 className="open-semibold text-[32px] leading-[38.4px]">
                  WHAT?
                </h2>
                <p className="open-regular text-base leading-6 max-w-80">
                  Epoch is a forward-thinking design branding agency dedicated
                  to crafting exceptional brand identities and experiences for
                  top-tier clients.
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <h2 className="open-semibold text-[32px] leading-[38.4px]">
                  WHY?
                </h2>
                <p className="open-regular text-base leading-6 max-w-80">
                  At Epoch, we believe in the transformative power of strategic
                  branding. Our purpose is to empower businesses to stand out in
                  a crowded marketplace.
                </p>
              </div>
            </div>
            <div className="h-[380px] md:h-[768px] w-full overflow-hidden">
              <img
                src={Img5.src}
                alt="About Us Image"
                sizes="max((min(100vw - 128px, 1320px) - 48px) / 2, 200px)"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[82.5rem] mx-auto py-28 px-6 md:px-0">
        <div className="flex flex-col gap-14 md:gap-28">
          <p className="text-lg open-semibold">02/</p>
          <div className="flex flex-col gap-14">
            <div className="flex items-start md:items-end">
              <h2 className="open-semibold text-[32px] leading-[38.4px]">
                OUR TEAM
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {projects.map((project, index) => (
                <div key={index} className="flex flex-col items-start gap-6">
                  <div className="h-[380px] md:h-[640px] w-full overflow-hidden">
                    <img
                      src={project.image.src}
                      alt={project.title}
                      sizes="max((min(100vw - 128px, 1320px) - 48px) / 2, 200px)"
                      className="h-full w-full object-cover object-[60.9%_27.6%]"
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

      <section className="max-w-[82.5rem] mx-auto mb-14 mt-28 px-6 md:p-0">
        <div className="flex flex-col gap-12 md:gap-28">
          <p className="text-lg open-semibold">03/</p>
          <div className="flex flex-col md:flex-row">
            <h2 className="text-[32px] w-full open-semibold leading-[38.4px] whitespace-nowrap">
              OUR SERVICES
            </h2>
            <div className="flex flex-col w-full">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex justify-between py-6 w-full ${
                    index === 0
                      ? "border-t-[0.5px] border-b-[0.5px] border-gray-500"
                      : "border-b-[0.5px] border-gray-500"
                  }`}
                >
                  <div className="open-semibold text-base">0{step.number}</div>
                  <p className="open-semibold text-base leading-4">
                    {step.title}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen flex py-28">
        <div className="overflow-hidden whitespace-nowrap flex items-center relative">
          <div ref={marqueeRef} className="flex">
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Le Buzz
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Nouri
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              On For
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Glowify
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Luxora
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Kinfolk
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Le Buzz
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Nouri
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              On For
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Glowify
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Luxora
            </div>
            <div className="text-[42px] w-auto md:text-[68px] open-semibold leading-[42.2px] md:leading-[74.8px] whitespace-nowrap mr-28">
              Kinfolk
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-[82.5rem] mx-auto py-28 flex flex-col justify-center items-center gap-12 px-6 md:px-0 h-[100vh]">
        <h2 className="text-center open-semibold leading-[1.1em] text-[42px] md:text-[68px]">
          An unparalleled <br /> creative hub for <br /> premier brands
        </h2>
        <p className="open-semibold text-center text-base pb-2 border-b-2 border-black max-w-36 whitespace-nowrap">
          Let's work together
        </p>
      </section>
    </main>
  );
}
