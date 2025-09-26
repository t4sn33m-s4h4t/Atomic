import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center pt-[75px] md:flex-row md:justify-between">
      {/* Text Section */}
      <div className="order-2 flex flex-col items-center md:order-1 md:max-w-[40vw] md:items-start md:gap-1 lg:max-w-[35vw]">
        <h1 className="w-fit text-center text-5xl font-medium tracking-wide md:text-left lg:tracking-widest 2xl:text-6xl">
          JOIN THE
        </h1>
        <h1 className="text-center text-5xl font-medium tracking-wide md:text-left lg:tracking-widest 2xl:text-6xl">
          COMMUNITY OF
        </h1>
        <h1 className="text-center text-5xl font-medium tracking-wide text-[#486581] md:text-left lg:tracking-widest 2xl:text-6xl">
          SCIENCE ENTHUSIASTS
        </h1>
        <p className="mt-3 w-[85vw] break-words text-center text-lg md:w-fit md:text-left 2xl:text-[1.375rem] 2xl:leading-8">
          Connect with passionate researchers and curious minds. Explore physics,
          chemistry, biology, and space science. Together, let’s push the
          boundaries of knowledge and discovery.
        </p>
        <Link
          href="/about"
          className="before:ease relative mb-2 me-2 mt-5 flex items-center justify-center overflow-hidden rounded-lg border border-gray-600 bg-black px-7 py-2 font-Bebas text-xl font-medium text-white shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-[#ff9900] before:duration-300 hover:border-[#ff9900] hover:bg-zinc-700 hover:text-white hover:shadow-[#ff9900] hover:before:h-64 hover:before:-translate-y-32 focus:z-10 focus:ring-4 focus:ring-gray-700"
        >
          <span className="relative z-10">LEARN MORE</span>
        </Link>
      </div>

      {/* Hero Image */}
      <img
        src={"/BigImg-science.png"} // replace with science-themed illustration
        alt="Science Club"
        className="relative order-1 aspect-square max-h-[87vh] max-w-[95vw] object-contain sm:max-w-[80vw] md:order-2 md:-ml-6 md:-mr-6 md:-mt-12 md:max-w-[55vw] md:object-right lg:mt-0 xl:ml-0 2xl:max-h-[82vh]"
        width={850}
        height={850}
      />

      {/* Background Decoration */}
      <img
        src="/image/bg2.svg"
        className="absolute bottom-[-4vh] right-0 -z-10"
        alt=""
      />
    </section>
  );
};

export default Hero;
