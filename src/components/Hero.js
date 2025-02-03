import Image from "next/image";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY);
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Remove event listener on cleanup
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const scale = Math.max(0.5, 1 - scrollY / 1000);
  // const opacity = Math.max(0, 1 - scrollY / 500);

  return (
    <>
      <div className="w-full h-[90vh]">
        <div
          className="w-full h-[90vh] flex justify-center items-center sticky top-0 bg-gradient-to-r from-[#dd6114] to-[#ff9238]"
          style={{
            // visibility: opacity === 0 ? "hidden" : "visible",
          }}
        >
          {/* <video
            style={{ opacity: "0.6" }}
            className="absolute w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="/bg1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}

          {/* New overlay div */}
          {/* <div
            className="absolute inset-0 bg-black"
            style={{ opacity: 0.4 }}
          ></div> */}

          <div
            className="w-[90%] lg:w-full md:w-full flex justify-center items-center flex-col relative z-10 "
            style={{
              // transform: `scale(${scale})`,
              // opacity: opacity,
              transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
            }}
          >
            <div className="bg-white bg-opacity-100 rounded-[30px] px-20 flex flex-col justify-center items-center py-10">
              <Image
                src="/heroLogo1.svg"
                width={600}
                height={200}
                alt="logo"
                className="opacity-100"
              />
              {/* <h4 className="text-center text-xs md:text-xl lg:text-2xl lg:-mt-[40px]">
    Find Your Space, Find Your People.
  </h4> */}

              <a href="/#logohero" className="bg-[#282a29] text-white font-semibold py-3 px-6 rounded-full shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                Sign Up Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
