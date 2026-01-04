import type { ButtonProps } from "../../types";

const variants = {
  primary: `
    bg-primary text-white 
    hover:bg-blue-800 hover:text-white
  `,

  outline: `
      text-primary
    hover:bg-primary hover:text-white bg-white
  `,
};

const Button = ({
  children,
  isLoading,
  classNameButton,
  variant = "primary",
  icon,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      // ${isLoading ? "bg-blue-400" : "bg-primary"}
      className={`
        w-full font-medium p-2.5 shadow-sm rounded-md text-md flex gap-4 items-center justify-center capitalize transition-color duration-150 
        ${variants[variant]}
        ${props.disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-blue-800 hover:text-white"
        }
        ${classNameButton || ""}
      `}
    >
      {icon && <span className="">{icon}</span>}
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button;
