import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

function ParallaxScrollDemo() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "/1.png",
  "/2.png",
  "/6.png",
  "/5.png",
  "/3.png",
  "/4.png",
  "/6.png",
  "/7.png",
  "/8.png",
  "/6.png",
  "/9.png",
  "/10.png",
  // "/4.png",
  // "/5.png",
  // "/6.png",
  // "/1.png",
  // "/5.png",
  // "/6.png",
  // "/7.png",
  // "/8.png",
  // "/9.png",
  // "/10.png",
  // "/1.png",
  // "/2.png",
  // "/3.png",
];
const gallary = () => {
  return (
    <>
      <ParallaxScrollDemo />
    </>
  );
};

export default gallary;
