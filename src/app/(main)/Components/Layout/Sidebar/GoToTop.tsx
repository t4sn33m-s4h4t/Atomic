"use client";

import { MdKeyboardArrowUp } from "react-icons/md";

const GoToTop = () => {
  return (
    <div
      className="cursor-pointer rounded-full bg-white p-1 shadow-[5px_5px_20px_15px_#00000024]"
      onClick={() => {
        document
          .querySelector("#scrollToTop")
          ?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      <MdKeyboardArrowUp className="h-6 w-6" />
    </div>
  );
};

export default GoToTop;