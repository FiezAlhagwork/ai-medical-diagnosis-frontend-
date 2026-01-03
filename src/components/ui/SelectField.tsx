import { useTranslation } from "react-i18next";
import type { SelectFieldProps } from "../../types";

const SelectField = ({
  label,
  options,
  registration,
  error,
}: SelectFieldProps) => {
  const {t} = useTranslation("auth")
  return (
    <div>
      <label className="text-[15px] text-slate-800">{label}</label>
      <div className="select-box mt-2">
      <select
        {...registration}
        className={` w-full bg-transparent outline-none border px-5 py-[13.5px] rounded
        ${error ? "border-red-500" : "border-gray-300"}`}
      >
        <option value="">{t("auth.select")}...</option>
        {options.map((op, index) => {
          if (typeof op === "string") {
            return (
              <option key={index} value={op}>
                {op}
              </option>
            );
          } else {
            return (
              <option key={index} value={op.value}>
                {op.label}
              </option>
            );
          }
        })}
      </select>
      </div>

      {error && <p className="text-xs text-red-500">{error.message}</p>}
    </div>
  );
};

export default SelectField;
