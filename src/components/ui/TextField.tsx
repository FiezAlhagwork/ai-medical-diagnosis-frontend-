import { useState } from "react";
import type { TextFieldProps } from "../../types";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const TextField = ({
  label,
  registration,
  error,
  placeholder,
  type,
}: TextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <label className="text-[15px] text-slate-800 ">{label}</label>
      <div
        className={`input-box mt-2  border   ${
          error
            ? "border-red-500 focus:ring-red-300 "
            : "border-gray-300 focus:ring-blue-300"
        }     `}
      >
        <input
          {...registration}
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          className={` w-full bg-transparent outline-none  

        `}
        />
        {type === "password" && (
          <>
            {showPassword ? (
              <FaRegEye
                size={22}
                className="text-primary cursor-pointer"
                onClick={() => {
                  toggleShowPassword();
                }}
              />
            ) : (
              <FaRegEyeSlash
                size={22}
                className="text-slate-400 cursor-pointer"
                onClick={() => {
                  toggleShowPassword();
                }}
              />
            )}
          </>
        )}
      </div>
      {error && <p className="text-xs text-red-500 pb-2.5">{error.message}</p>}
    </div>
  );
};

export default TextField;
