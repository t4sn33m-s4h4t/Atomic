import { GiAtomicSlashes, GiMicroscope, GiFlask, GiBookshelf } from "react-icons/gi";
import "../styles/eventCard.css";

const loading = () => {
  return (
    <div className="w-screen bg-[#F6F6F6]">
      <img
        src="/image/bg2.svg"
        className="absolute right-0 top-1/4 z-0"
        alt=""
      />
      <div className="container relative z-10 mb-5 flex flex-col items-center gap-5 bg-transparent py-10 pt-28 sm:gap-10 sm:pt-[7.5rem]">
        <section className="w-full">
          <div className="my-auto mb-5 flex flex-col justify-between gap-3 lg:mb-6 lg:flex-row lg:gap-8">
            <h1
              className="my-auto ml-1 items-center justify-center self-start text-[2.5rem] leading-none md:justify-start md:text-5xl"
              id="SCROLLHERE"
            >
              <span className="text-primary">ALL</span> PROGRAMS
            </h1>
            <div className="my-auto flex flex-wrap justify-between gap-2 sm:justify-start">
              <div
                className={`-gray-300 flex shrink-0 grow-0 basis-[calc(50%-0.25rem)] items-center gap-2 rounded-lg px-5 py-4 font-Nunito text-sm font-bold shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 sm:basis-auto sm:shadow-lg md:mb-2 md:me-2 md:rounded-xl md:py-3 md:text-base ${
                  0
                    ? "bg-primary text-white shadow-lg hover:bg-[#3d566d]"
                    : "bg-white text-black hover:bg-gray-100 hover:text-primary"
                }`}
              >
                <GiAtomicSlashes
                  className={
                    "h-[1.125rem] w-[1.125rem] " +
                    (0 ? "text-primary/40" : "text-primary")
                  }
                />
                Seminars
              </div>
              <div
                className={`-gray-300 flex shrink-0 grow-0 basis-[calc(50%-0.25rem)] items-center gap-2 rounded-lg px-5 py-4 font-Nunito text-sm font-bold shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 sm:basis-auto sm:shadow-lg md:mb-2 md:me-2 md:rounded-xl md:py-3 md:text-base ${
                  0
                    ? "bg-primary text-white shadow-lg hover:bg-[#3d566d]"
                    : "bg-white text-black hover:bg-gray-100 hover:text-primary"
                }`}
              >
                <GiMicroscope
                  className={
                    "h-[1.125rem] w-[1.125rem] " +
                    (0 ? "text-primary/40" : "text-primary")
                  }
                />
                Workshops
              </div>
              <div
                className={`-gray-300 flex shrink-0 grow-0 basis-[calc(50%-0.25rem)] items-center gap-2 rounded-lg px-5 py-4 font-Nunito text-sm font-bold shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 sm:basis-auto sm:shadow-lg md:mb-2 md:me-2 md:rounded-xl md:py-3 md:text-base ${
                  0
                    ? "bg-primary text-white shadow-lg hover:bg-[#3d566d]"
                    : "bg-white text-black hover:bg-gray-100 hover:text-primary"
                }`}
              >
                <GiFlask
                  className={
                    "h-[1.125rem] w-[1.125rem] " +
                    (0 ? "text-primary/40" : "text-primary")
                  }
                />
                Research Projects
              </div>
              <div
                className={`-gray-300 flex shrink-0 grow-0 basis-[calc(50%-0.25rem)] items-center gap-2 rounded-lg px-5 py-4 font-Nunito text-sm font-bold shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 active:outline-none sm:basis-auto sm:shadow-lg md:mb-2 md:me-2 md:rounded-xl md:py-3 md:text-base ${
                  0
                    ? "bg-primary text-white shadow-lg hover:bg-[#3d566d]"
                    : "bg-white text-black hover:bg-gray-100 hover:text-primary"
                }`}
              >
                <GiBookshelf
                  className={
                    "h-[1.125rem] w-[1.125rem] " +
                    (0 ? "text-primary/40" : "text-primary")
                  }
                />
                Publications
              </div>
            </div>
          </div>

          {/* Skeleton Loader (unchanged, still works) */}
          <div className="w-full justify-items-center gap-3 grid-fluid-fill-[16.5rem] 2xl:gap-5">
            {[...Array(8)].map((_, i) => (
              <div
                id="init"
                role="status"
                className="card flex flex-col"
                key={i}
              >
                <div className="card_banner animate-pulse bg-gray-400"></div>
                <div className="flex h-full flex-1 flex-col justify-between">
                  <div className="flex flex-col justify-center gap-2 p-5 pb-6 text-center">
                    <h1 className="grid min-h-[64px] place-items-center text-2xl">
                      Loading...
                    </h1>
                    <p className="line-clamp-5">
                      <div
                        role="status"
                        className="max-w-lg animate-pulse space-y-2.5"
                      >
                        <div className="flex w-full items-start">
                          <div className="h-2.5 w-32 rounded-full bg-gray-400"></div>
                          <div className="ms-2 h-2.5 w-24 rounded-full bg-gray-500"></div>
                          <div className="ms-2 h-2.5 w-full rounded-full bg-gray-500"></div>
                        </div>
                        <span className="sr-only">Loading...</span>
                      </div>
                    </p>
                  </div>
                  <div className="grid w-full place-items-center justify-self-end">
                    <div className="learn_more cursor-pointer text-lg text-white">
                      Learn More
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default loading;
