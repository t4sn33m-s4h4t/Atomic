"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import { FaFlask } from "react-icons/fa6";

const ProjectsIcon = () => {
  const Route = usePathname();
  return (
    <Suspense>
      <Link
        href="/projects"
        title="Science Projects"
        className={`${Route.includes("club") ? "hidden" : ""} transition-all hover:scale-125`}
      >
        <FaFlask className="h-7 w-7" />
      </Link>
    </Suspense>
  );
};

export default ProjectsIcon;