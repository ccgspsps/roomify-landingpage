import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <>
      <div id="logohero" className="w-full flex flex-row flex-wrap justify-center py-10">
        <div className="w-[80%] flex flex-row flex-wrap justify-center lg:justify-between gap-10 lg:gap-5">
          <div className="flex justify-center items-center flex-col">
            <Image
              src={"/LogoHero.svg"}
              width={200}
              height={200}
              alt="comingSoon"
            />{" "}
            <h6 className="text-center text-xs md:text-xl lg:text-xl">
              Find Your Space, Find Your People.
            </h6>
          </div>
          <div className="flex flex-col justify-center gap-4">
            <h5 className="text-center mb-3">Contact Us</h5>
            <span className="flex flex-row justify-start items-center  gap-10">
              <span className="font-bold">Hassan Khan</span>
              <span className="flex flex-col items-start gap-3">
                <span className=" flex flex-row gap-2">
                  <img
                    width="24s"
                    height="24"
                    src="https://img.icons8.com/ios-glyphs/60/phone--v1.png"
                    alt="phone--v1"
                  />
                  Phone : +91-7358746114
                </span>
                <span className=" flex flex-row gap-2">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/mail.png"
                    alt="mail"
                  />
                  hassan.roomify@gmail.com
                </span>
              </span>
            </span>
            <span className="flex flex-row justify-start items-center gap-10">
              <span className="font-bold">Pranay Siddu</span>
              <span className="flex flex-col items-start gap-3">
                <span className=" flex flex-row gap-2">
                  <img
                    width="24s"
                    height="24"
                    src="https://img.icons8.com/ios-glyphs/60/phone--v1.png"
                    alt="phone--v1"
                  />
                  +1(602)796-7817
                </span>
                <span className=" flex flex-row gap-2">
                  <img
                    width="24"
                    height="24"
                    src="https://img.icons8.com/material-outlined/24/mail.png"
                    alt="mail"
                  />
                  pranay.roomify@gmail.com
                </span>
              </span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
