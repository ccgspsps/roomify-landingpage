import Image from "next/image";
import React from "react";

const FeatureCard = ({ icon, title, className }) => (
  <div
    className={`lg:h-[200px] md:h-[200px] bg-gradient-to-r from-[#dd6114] to-[#ff9238] rounded-[20px] p-4 flex flex-col items-start justify-end text-left text-white ${className}`}
  >
    <Image src={icon} width={50} height={50} />
    <p className="mt-2 text-left text-2xl">{title}</p>
  </div>
);

const FeaturesSection = () => {
  return (
    <div className="bg-[#282a29] p-4 sm:p-8">
      <div className="flex lg:flex-row md:flex-row flex-col gap-5 justify-center lg:items-end sm:items-center ">
        <div className="test">
          <div>
            <h2 className="text-white text-3xl font-bold mb-4 border-l-4 border-orange-500 text-left pl-2">
              Features
            </h2>
          </div>
          <div
            className={`bg-gradient-to-r from-[#dd6114] to-[#ff9238] rounded-[20px] p-4 flex flex-col items-start justify-end text-white lg:h-[350px] md:h-[350px] lg:w-[300px] `}
          >
            <Image src={"/media/ai.svg"} width={60} height={60} />
            <p className="mt-2 text-center">AI Roommate Matching</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:grid-rows-2 md:grid-flow-col">
          <FeatureCard
            icon={"/media/marketplace.svg"}
            title="Integrated Marketplace"
          />
          <FeatureCard icon={"/media/community.svg"} title="Community" />
          <FeatureCard icon={"/media/6.svg"} title="Engaging Interface" />
          <FeatureCard icon={"/media/storage.svg"} title="Storage Options" />
          <FeatureCard
            icon={"/media/StudentVerification.svg"}
            title="Student Verification"
          />
          <FeatureCard
            icon={"/media/User-Friendly.svg"}
            title="User-Friendly"
          />
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
