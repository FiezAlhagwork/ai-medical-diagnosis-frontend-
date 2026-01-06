import { useTranslation } from "react-i18next";
import { QUICK_SYMPTOMS } from "../../constant";
import type { QuickSymptomsSelectorProps } from "../../types";

const QuickSymptomsSelector = ({ onToggle, value, errors }: QuickSymptomsSelectorProps) => {
    const { t } = useTranslation("symptoms")
    return (
        <div className="glass mt-6">
            <h2 className="md:text-2xl text-lg font-bold mb-3 ">{t("symptoms.quickSymptomsTitle")}</h2>
            <p className="text-gray-700  text-[14px] pb-4">{t("symptoms.quickSymptomsHint")}</p>
            <div className="flex flex-wrap gap-2">
                {QUICK_SYMPTOMS.map((symptom) => {
                    const active = value.includes(symptom.id);
                    return (
                        <button
                            type="button"
                            key={symptom.id}
                            onClick={() => onToggle(symptom.id)}
                            className={`px-4 py-2 rounded-xl  text-sm border transition
              ${active
                                    ? "bg-blue-100 border-blue-600 text-blue-600"
                                    : "border-gray-500 text-gray-500 bg-white"
                                }
            `}
                        >
                            {t(`quickSymptoms.${symptom.id}`)}
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

export default QuickSymptomsSelector