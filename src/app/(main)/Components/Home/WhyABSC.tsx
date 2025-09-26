import React from "react";

const WhyAbsc = () => {
  return (
    <div className="relative w-screen overflow-x-clip">
      <img
        className="absolute left-0 top-[20%] -z-10 w-[125%] max-w-[750px] md:-top-1/2 md:w-[80%]"
        src="/image/lbg.svg"
        alt=""
      />
      <section className="container relative mb-10 mt-8 flex flex-col items-center gap-7 md:mb-20 md:mt-16">
        {/* Heading */}
        <div className="flex flex-col gap-1 md:flex-row">
          <h1 className="text-center text-4xl md:text-5xl">WHY YOU SHOULD</h1>
          <h1 className="text-center text-4xl text-[#486581] md:text-5xl">
            JOIN ABSC?
          </h1>
        </div>

        {/* Cards */}
        <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
          {/* Card 1 */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={"/Ellipse1.png"}
              alt="Hands-on Science"
              width={150}
              height={150}
              className="transition-all hover:scale-110"
              loading="lazy"
            />
            <h1 className="px-3 text-center text-2xl 2xl:text-3xl">
              GAIN EXPERIENCE THROUGH HANDS-ON EXPERIMENTS
            </h1>
            <p className="text-center text-base">
              At ABSC, you will actively participate in real scientific projects
              and experiments, building practical knowledge in physics,
              chemistry, biology, and astronomy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={"/Ellipse2.png"}
              alt="Workshops and Seminars"
              width={150}
              height={150}
              className="transition-all hover:scale-110"
              loading="lazy"
            />
            <h1 className="px-3 text-center text-2xl 2xl:text-3xl">
              EXPLORE A LEARNING-BASED JOURNEY WITH ABSC
            </h1>
            <p className="text-center text-base">
              Join our workshops, seminars, and science fairs to broaden your
              perspective, enhance your skills, and stay curious about the
              wonders of science.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center gap-3">
            <img
              src={"/Ellipse3.png"}
              alt="Networking"
              width={150}
              height={150}
              className="transition-all hover:scale-110"
              loading="lazy"
            />
            <h1 className="px-3 text-center text-2xl 2xl:text-3xl">
              NETWORK WITH PEERS & MENTORS, SHOWCASE YOUR TALENTS
            </h1>
            <p className="text-center text-base">
              Be part of a vibrant community of young researchers. Collaborate
              with mentors, share your ideas, and present your findings in
              science exhibitions and academic events.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyAbsc;
