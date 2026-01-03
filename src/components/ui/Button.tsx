import type { ButtonProps } from "../../types";

const variants = {
  primary: `
    bg-primary text-white p-2.5  
    hover:bg-blue-800 hover:text-white
  `,

  outline: `
    border-2 border-primary p-1 text-primary
    hover:bg-primary hover:text-white
    duration-75 transition-all shadow-lg
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
        btn text-md flex gap-4 items-center justify-center capitalize
        ${variants[variant]}
        ${
          props.disabled
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
