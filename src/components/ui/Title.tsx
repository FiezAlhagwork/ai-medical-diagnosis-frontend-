import { useGSAP } from "@gsap/react";
import type { TitleProps } from "../../types";
import { animateWithGsap } from "../../utils/animations";
import { useRef } from "react";

const Title = ({ icons, title }: TitleProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    if (!titleRef.current) return;
    animateWithGsap(titleRef.current, {
      opacity: 1,
      y: 0,
     ease: "power3.out"
    });
  }, []);
  return (
    <div
      ref={titleRef}
      className="mb-12 md:mb-16 flex flex-col justify-center items-center opacity-0 translate-y-20"
    >
      <div className=" bg-blue-100  text-primary font-bold p-3 rounded-full  mb-4 md:mb-5  ">
        {/*  */}
        {icons}
      </div>
      <h2
        id="text"
        className="text-lg md:text-xl lg:text-2xl font-semibold text-slate-900  tracking-tight leading-tight"
      >
        {title}
      </h2>
      <div className="mt-4 h-1 w-20 md:w-28 bg-primary rounded-full mx-auto"></div>
    </div>
  );
};

export default Title;
