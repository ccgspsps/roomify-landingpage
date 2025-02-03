"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "What is Roomify?",
    answer:
      "Roomify is a platform designed to help international students coming to the USA find affordable housing. We focus on creating a community where students can connect with potential roommates, list or inquire about shared rooms, and access affordable rentals.",
  },
  {
    question: "How does Roomify differ from other rental platforms?",
    answer:
    "Roomify is built for students, offering easy roommate matching and a marketplace to buy and sell items like furniture and electronics."  },
  {
    question: "Who can use Roomify?",
    answer:
      "Roomify is primarily for students, but property owners and landlords can also list their properties. Students can also use the platform to find roommates, buy/sell items, or rent storage space.",
  },
  {
    question: "Is there a fee to use Roomify?",
    answer:
      "No! Roomify is free to use for everyone—whether you're listing a room, finding a roommate, or using the marketplace. There are no listing or transaction fees.",
  },
  {
    question: "How do I find a roommate on Roomify?",
    answer:
      "You can browse through listings of students who have inquired about apartments and are looking for roommates. Use filters like location, rent range, or shared interests to find a perfect match.",
  },
  {
    question: "How do I list a property on Roomify?",
    answer:
      'Simply sign up, click on "List a Property," and fill in the details about the room or property. Include photos, rental price, location, and any roommate preferences.',
  },
  {
    question: "What can I sell on the marketplace?",
    answer:
      "The Roomify marketplace is designed for students to buy and sell items like furniture, electronics, textbooks, or any other goods they no longer need, especially during moves.",
  },
];
const FAQS = () => {
  const [openIndex, setOpenIndex] = useState(1);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const tag = "FAQ";
  return (
    <section className="flex items-center" id={tag}>
      <div className="container mx-auto p-4" style={{ width: "90%" }}>
        <hr className="mt-8 border-gray-200 dark:border-gray-700" />

        {faqs.map((faq, index) => (
          <React.Fragment key={index}>
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-8"
            >
              <div className="flex items-center focus:outline-none">
                <svg
                  className={`flex-shrink-0 w-6 h-6 ${
                    openIndex === index ? "text-[#cc8053]" : "text-gray-500"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={openIndex === index ? "M6 12h12" : "M12 6v12M6 12h12"}
                  />
                </svg>
                <h1 className="mx-4 text-xl text-left text-gray-700 dark:text-white">
                  {faq.question}
                </h1>
              </div>

              <div
                className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <div className="flex mt-4 md:mx-10">
                  <span className="border border-[#cc8053]"></span>
                  <p
                    className="max-w-full px-4 text-gray-500 dark:text-gray-300"
                    style={{ textAlign: "left" }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </button>
            <hr className=" border-gray-200 dark:border-gray-700" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
