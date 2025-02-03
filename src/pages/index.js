import Hero from "@/components/Hero";
import What from "@/components/What";
import Gallary from "@/components/Gallary";
import FAQS from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import FeaturesSection from "@/components/Featured";
import Comming from "@/components/Comming";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="flex flex-col justify-center align-center">
        {/* <section className="bg-[#282a29] py-[5rem]" id="Services">
          <About />
        </section> */}
        <section id="Services" className=" bg-[#282a29] text-white">
           <What />
        </section>
        {/* <section className="bg-[#282a29] py-[5rem]" id="Services">
          <FeaturesSection />
        </section> */}
        {/* <section className="bg-[#cc8053] py-[5rem]" id="Gallery">
          {" "}
          <h2 className="pb-5"> A Sneak Peek of our App</h2>
          <Gallary />
        </section> */}
        <section className="py-20">
          <h2>Frequently Asked Questions</h2>
          <FAQS />
        </section>
        <section>
          <Comming />
        </section>
        <div id="Contact">
          <Footer />
        </div>
      </section>
    </>
  );
}
