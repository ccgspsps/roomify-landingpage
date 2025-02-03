"use client";
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: gridRef,
    offset: ["start start", "end start"],
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -1500]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -1500]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third );
  const thirdPart = images.slice(2 * third);

  return (
    <div
      className={cn("h-[200vh] overflow-y-auto hide-scrollbar w-full", className)}
      ref={gridRef}
    >
      <div className="grid grid-cols-3 items-start max-w-5xl mx-auto gap-4 sm:gap-10 py-10 sm:py-20 px-4 sm:px-10 min-h-[150vh]">
        <div className="grid gap-4 sm:gap-10">
          {firstPart.map((el, idx) => (
            <motion.div style={{ y: translateFirst }} key={`grid-1-${el}`}>
              <Image
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt={`Image ${idx + 1} in first column`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={`grid-2-${el}`}>
              <Image
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt={`Image ${idx + 1} in second column`}
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={`grid-3-${el}`}>
              <Image
                src={el}
                className="h-auto w-full object-cover object-left-top rounded-lg !m-0 !p-0"
                height={400}
                width={400}
                alt={`Image ${idx + 1} in third column`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
