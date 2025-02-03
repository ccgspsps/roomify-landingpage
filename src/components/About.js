import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-row justify-evenly items-center text-center ">
        <div className=" w-[90%] flex lg:flex-row md:flex-row flex-col justify-evenly items-center text-left lg:p-20 p-10 bg-[#282a29] text-white  gap-10">
          <div className="flex justify-center items-center lg:w-[40%] w-[100%] lg:min-h-[200px] md:min-h-[200px] md:border-r-[1px] md:border-r-[#db5e11] lg:border-r-[1px] lg:border-r-[#db5e11]">
            <h2>About Roomify</h2>
          </div>
          <div className="lg:w-[60%] w-[100%]">
            <p>
              Roomify is a student-focused platform designed to simplify finding
              roommates and housing. We help students across the USA connect
              with like-minded roommates, discover verified rental listings, and
              access an easy-to-use marketplace for second-hand goods. Whether
              you are moving to a new city or looking for a roommate to split
              rent&#39;, Roomify has you covered.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
