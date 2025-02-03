import Image from "next/image";
import { useState } from "react";
import Head from "next/head";

const ComingSoon = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Sending...");

    const formData = new FormData();
    formData.append("email", email);
    formData.append("access_key", "a476e2ed-777d-4434-ae92-0ecdf9dd49fb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Thank you for subscribing!");
        setEmail("");
      } else {
        setMessage("An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Head>
        <title>
          Coming Soon | Roomify - Find Your Perfect Roommate and Home
        </title>
        <meta
          name="description"
          content="Roomify is coming soon! Sign up to get notified when we launch and simplify your search for the perfect roommate and home."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="bg-gradient-to-r from-[#dd6114] to-[#ff9238] w-full flex justify-center items-center py-20">
        <div className="w-[90%] flex lg:flex-row md:flex-row flex-col gap-15 justify-center items-center bg-white rounded-[15px] p-10">
          <div className="text-2xl text-bold lg:w-[60%] md:w-[60%] w-[100%] flex flex-col justify-center items-start gap-10">
            <h1 className="text-6xl font-medium text-gray-800 mb-2">
              Coming Soon
            </h1>
            <div className="relative">
              <Image
                className="absolute z-[10] lg:-top-[21%] md:-top-[20%] -top-[10%]"
                src="/media/bg.svg"
                alt="Background decoration"
                width={150}
                height={80}
              />
              <p className="relative z-[20]">
                Get ready! Roomify is almost here to simplify your search for
                the perfect roommate and home.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-medium text-gray-800 mb-4 md:text-start md:pl-2">
                Sign up to get Notified
              </h2>

              <div className="flex justify-center">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col md:flex-row gap-4"
                >
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full md:w-96 px-4 py-3 z-9 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Enter your email"
                    required
                    aria-required="true"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-black text-white font-bold rounded-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    Notify Me
                  </button>
                </form>
              </div>
              {message && (
                <p aria-live="polite" className="mt-4 text-center">
                  {message}
                </p>
              )}
            </div>
          </div>

          <div className="lg:w-[40%] md:w-[40%] w-[100%] flex flex-row justify-center items-center">
            <Image
              src="/illus.png"
              width={300}
              height={400}
              alt="Roomify illustration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
