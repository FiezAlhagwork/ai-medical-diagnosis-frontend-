import  { useRef } from "react";
import useTypewriter from "../../hooks/useTypewriter";
import type { TypewriterProps } from "../../types";

const TypewriteAr = ({
  messages,
  typingSpeed = 1.8,
  deletingSpeed = 1.2,
  delay = 1,
}: TypewriterProps) => {
  const textRef = useRef<HTMLHeadingElement>(null);
  useTypewriter({ textRef, messages, typingSpeed, deletingSpeed, delay });
  return (
    <h2
      ref={textRef}
      className="text-xl font-semibold text-primary"
    ></h2>
  );;
};

export default TypewriteAr;
