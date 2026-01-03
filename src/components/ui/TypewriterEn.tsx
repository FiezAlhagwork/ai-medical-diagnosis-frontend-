import { useRef } from "react";
import type { TypewriterProps } from "../../types";
import useTypewriter from "../../hooks/useTypewriter";

const TypewriterEn = ({
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
      className="text-xl font-semibold text-primary "
    ></h2>
  );
};

export default TypewriterEn;
