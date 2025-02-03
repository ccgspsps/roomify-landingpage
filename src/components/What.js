import Image from "next/image";
import React from "react";
import { Home, Users, Box } from "lucide-react"; // Make sure to import these icons

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
  },{
    title: "What we do?",
    description:
      "Roomify is a platform designed to simplify the process of finding housing and compatible roommates for college students. Our app allows users to search for apartments and subleases based on criteria such as budget, location, and number of roommates needed. ",
    icon: <Box className="w-6 h-6" />,
    color: "bg-purple-500",
    img: "/StorageSolutions.svg",
    tags: [],
  },
  {
    title: "Marketplace",
    description:
      "Buy and sell essentials within the student community. Our peer-to-peer marketplace helps students exchange furniture, textbooks, and more, fostering a supportive, budget-friendly environment.",
    icon: <Users className="w-6 h-6" />,
    color: "bg-green-500",
    img: "/RoommateMatching.svg",
    tags: ["Student marketplace", "Buy & sell", "Affordable deal"],
  },
  
];

const What = () => {
  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-8 ">
          <div className="bg-white border border-orange-200 rounded-2xl p-8 md:p-12 mb-8 h-full relative">
            <h2 className="text-gray-900 text-3xl md:text-5xl font-extrabold mb-2 text-left">
              {services[0].title}
            </h2>
            <p className="text-lg font-normal text-gray-500 mb-6">
              {services[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {services[0].tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-200 text-gray-600 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
           
            <div className="hidden md:block absolute bottom-0 right-0 w-96 h-96">
              <Image src={services[0].img} alt="Illustration" fill />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-y-8">
            {services.slice(1).map((service, index) => (
              <div
                key={index}
                className="bg-[#fafafa] border border-orange-200 rounded-2xl p-8 md:p-12 h-full"
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
               
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default What;
