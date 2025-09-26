import React from "react";

const Hero = () => {
  return (
    <div className="mb-10 flex flex-col gap-8 md:mb-16 lg:flex-row">
      <img
        src="/About.jpg"
        alt="Atomic BAFSK Science Club Members"
        className="w-full rounded-xl object-cover lg:max-w-[50%]"
        width={1920}
        height={1080}
      />
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-primary mb-4">About Atomic BAFSK Science Club</h2>
        <p className="text-neutral-700 leading-relaxed">
          Atomic BAFSK Science Club (ABSC) is a premier co-curricular organization 
          of BAF Shaheen College Kurmitola, established to foster scientific curiosity 
          and innovation among students. Our club serves as a platform for young 
          minds to explore the wonders of science through hands-on experiments, 
          research projects, and intellectual discussions.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mt-4">
          At ABSC, we believe in nurturing the next generation of scientists and 
          researchers by providing them with the resources, guidance, and opportunities 
          to develop their scientific temper. Our activities range from laboratory 
          experiments and science fairs to seminars with renowned scientists and 
          industrial visits, ensuring comprehensive exposure to various scientific domains.
        </p>
        
        <p className="text-neutral-700 leading-relaxed mt-4">
          As an integral part of BAF Shaheen College Kurmitola, we are committed to 
          upholding the institution's legacy of academic excellence while promoting 
          scientific awareness and technological literacy. Through our initiatives, 
          we aim to create a community of scientifically enlightened students who 
          can contribute meaningfully to national development and global scientific 
          advancement.
        </p>
      </div>
    </div>
  );
};

export default Hero;