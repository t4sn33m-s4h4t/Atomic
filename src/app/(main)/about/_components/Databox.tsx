import React from "react";
import Timeline from "./Timeline";
import DataCard from "./DataCard";
import { FaFlask } from "react-icons/fa6";
import { PiUserList } from "react-icons/pi";
import ExecutiveData from "@/data/executives";
import Link from "next/link";

const Databox = () => {
  return (
    <>
      <h1 className="mb-7 text-4xl md:text-5xl">
        Our<span className="text-primary"> Scientific Journey</span>
      </h1>
      <div className="mb-10 rounded-xl bg-white p-3 md:mb-16 md:p-6">
        <div className="mb-4 flex flex-col gap-4 md:mb-8 md:gap-8 lg:flex-row">
          <Timeline />
          <DataCard />
        </div>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8">
          <div className="flex flex-1 flex-wrap items-center justify-between gap-2 rounded-xl bg-white">
            <h1 className="Bebas flex items-center gap-2 align-middle text-3xl leading-[0.7_!important] md:text-4xl">
              <PiUserList className={"h-10 w-10 text-3xl text-primary"} />
              Active Members{" "}
              <span className="leading-[0.7_!important] text-primary">
                {ExecutiveData.sessions[0].members.length}
              </span>
            </h1>
            <div className="flex w-full flex-col gap-2 sm:w-auto md:flex-row">
              <Link
                href="/executive"
                className="flex w-full items-center gap-3 rounded-lg bg-primary px-4 py-2 font-bold text-white hover:bg-primary_dark sm:w-auto md:px-8 md:text-lg"
              >
                <PiUserList className={"h-8 w-8"} />
                Meet Our Team
              </Link>
              <Link
                href="/projects"
                className="flex w-full items-center gap-3 rounded-lg bg-secondary px-4 py-2 font-bold text-white hover:bg-secondary_light sm:w-auto md:px-8 md:text-lg"
              >
                <FaFlask className={"h-8 w-8"} />
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Databox;