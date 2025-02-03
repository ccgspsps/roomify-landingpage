import React from "react";
import { motion } from "framer-motion";
import { Home, Users, Box } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Living Space",
    description:
      "Find affordable, student-friendly housing. Our platform connects you to safe, budget-friendly apartments with ease.",
    icon: <Home className="w-6 h-6" />,
    color: "bg-blue-500",
    img: "/LivingSpace1.svg",
    tags: [
      "Affordable housing",
      "Find your home",
      "Easy search",
      "Safe living",
    ],
  },
  {
    title: "MArketplace",
    description:
      "AI-powered roommate matching connects you with like-minded students for a perfect living arrangement.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-green-500",
    img: "/RoommateMatching.svg",
    tags: ["Personalized matching", "Find your match", "Student housing"],
  },
  {
    title: "Storage Solutions",
    description:
      "Easily find or offer temporary storage space to fellow students, ensuring your belongings are safe and accessible.",
    icon: <Box className="w-6 h-6" />,
    color: "bg-purple-500",
    img: "/StorageSolutions.svg",
    tags: ["Temporary storage", "Hassle-free storage", "Secure belongings"],
  },
];

const ServicesCards = () => {
  return (
    <div className="flex flex-row gap-8 justify-center flex-wrap py-10">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-[#fafafa] border border-gray-200 rounded-2xl p-5 md:p-8 h-full w-[90%] md:w-[500px] lg:w-[400px] lg:h-[300px]" 
        >
          <h2 className="text-gray-900 text-3xl font-extrabold mb-2 text-left">
            {service.title}
          </h2>
          <p className="text-lg font-normal text-gray-500 mb-4">
            {service.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {service.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="bg-orange-200 text-gray-600 px-3 py-1 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          {/* <a
            href="#"
            className="bg-[#dc6115] inline-flex justify-center items-center py-2.5 px-5 text-base font-medium text-center text-white rounded-lg"
          >
            Know more
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a> */}
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;
