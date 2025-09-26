import Link from "next/link";
import React from "react";
import { BsCalendar2EventFill } from "react-icons/bs";
import { GrWorkshop } from "react-icons/gr";
import { FaFlask } from "react-icons/fa";
import { BiSolidBook } from "react-icons/bi";
import { MdScience } from "react-icons/md";
import { IconType } from "react-icons";

const NavItem = ({
  type,
  name,
  href,
  icon,
}: {
  type: string | null;
  name: string;
  href: string;
  icon: IconType;
}) => {
  return (
    <Link
      href={`/activities?type=${href}&scroll=true`}
      type="button"
      className={`flex shrink-0 grow-0 basis-[calc(50%-0.25rem)] items-center gap-2 rounded-lg px-5 py-4 font-Nunito text-sm font-bold shadow-md transition-colors focus:outline-none focus:ring-4 focus:ring-gray-200 sm:basis-auto sm:shadow-lg md:mb-2 md:me-2 md:rounded-xl md:py-3 md:text-base ${
        type == href
          ? "bg-primary text-white shadow-lg hover:bg-primary_dark hover:text-white"
          : "bg-white text-black hover:bg-primary_lightest hover:text-primary"
      }`}
    >
      {React.createElement(icon, {
        className:
          "h-[1.125rem] w-[1.125rem] " +
          (type === href ? "text-primary_light" : "text-primary"),
      })}
      {name}
    </Link>
  );
};

const EventNav = ({ type }: { type: string | null }) => {
  return (
    <div className="my-auto flex flex-wrap justify-between gap-2 sm:relative sm:justify-start">
      <NavItem
        icon={BsCalendar2EventFill}
        type={type}
        href="event"
        name="Science Events"
      />
      <NavItem 
        icon={GrWorkshop} 
        type={type} 
        href="workshop" 
        name="Workshops" 
      />
      <NavItem
        icon={FaFlask}
        type={type}
        href="experiment"
        name="Experiments"
      />
      <NavItem
        icon={MdScience}
        type={type}
        href="research"
        name="Research"
      />
      <NavItem
        icon={BiSolidBook}
        type={type}
        href="publication"
        name="Publications"
      />
    </div>
  );
};

export default EventNav;