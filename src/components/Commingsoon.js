import Image from "next/image";
import React from "react";

const Commingsoon = () => {
  return (
    <>
      <div className="w-full lg:h-[80vh] flex flex-row flex-wrap-reverse py-20 gap-20 justify-evenly items-center bg-[#cc8053]">
        <div className="flex flex-col justify-center z-10 ">
          <div className="container mx-auto text-center flex flex-col gap-5">
            {/* Main Heading */}
            <div>
              <h1 className="text-5xl font-extrabold text-white mb-4">
                We Are Coming Soon!
              </h1>

              {/* Subheading */}
              <p className="text-lg text-white mb-8">
                Exciting things are on the way. Be the first to know when we
                launch!
              </p>
            </div>
            <div>
              {/* Call to Action */}
              <p className="text-xl font-medium text-gray-800 mb-6 text-star">
                Sign up to get notified:
              </p>

              {/* Contact Details / Form */}
              <div className="flex justify-center">
                <form className="flex flex-col md:flex-row gap-4">
                  <input
                    type="email"
                    className="w-full md:w-96 px-4 py-3 z-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    Notify Me
                  </button>
                </form>
              </div>
            </div>

            {/* Additional Contact Details */}
            <p className="mt-6 text-black">
              Or reach us directly at{" "}
              <a href="mailto:info@yourcompany.com" className="text-white">
                <u>info@yourcompany.com</u>
              </a>
            </p>
          </div>
        </div>
        <div>
          <Image
            src={"/comingSoon.svg"}
            width={400}
            height={400}
            alt="comingSoon"
          />
        </div>
      </div>
    </>
  );
};

export default Commingsoon;
