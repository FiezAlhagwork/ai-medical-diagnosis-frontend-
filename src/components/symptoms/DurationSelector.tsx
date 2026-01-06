import { useTranslation } from "react-i18next";
import { DURATION_LABELS, DURATIONS } from "../../constant";
import type { DurationSelectorProps } from "../../types";

const DurationSelector = ({ value, onSelect, errors, lang }: DurationSelectorProps) => {
    const { t } = useTranslation("symptoms");
    return (
        <div className="glass w-full">
            <h2 className="md:text-2xl text-lg font-bold mb-3">{t("symptoms.durationLabel")}</h2>
            <p className="text-gray-700  text-[14px] pb-4">{t("symptoms.durationHint")}</p>
            <div className="grid grid-cols-2 gap-2">
                {DURATIONS.map((d) => {
                    const isActive = value === d;
                    return (
                        <button
                            key={d}
                            type="button"
                            onClick={() => onSelect(d)}
                            className={`px-4 py-3 rounded-xl w-full text-lg border transition  ${isActive ? "bg-blue-100 border-blue-600 text-blue-600" : "border-gray-500 text-gray-500 bg-white"}`}
                        >
                            {DURATION_LABELS[lang][d]}
                        </button>
                    );
                })}
            </div>
            {errors && (
                <p className="text-xs text-red-500 mt-2">
                    {errors.message}
                </p>
            )}
        </div>
    )
}

export default DurationSelector