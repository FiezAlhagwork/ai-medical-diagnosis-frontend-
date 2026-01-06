import { useTranslation } from "react-i18next";
import { SEVERITY_CONFIG } from "../../constant";
import type { SeveritySelectorProps } from "../../types";

const SeveritySelector = ({ value, onSelect, errors }: SeveritySelectorProps) => {
    const { t } = useTranslation("symptoms")
    return (
        <div className="glass  w-full">
            <h2 className="md:text-2xl text-lg font-bold mb-3">{t("symptoms.severityLabel")}</h2>
            <p className="text-gray-700  text-[14px] pb-4">{t("symptoms.severityHint")}</p>
            <div className="flex gap-3 flex-wrap">
                {Object.values(SEVERITY_CONFIG).map((config) => {
                    const active = value === config.id;
                    return (
                        <button
                            type="button"
                            key={config.id}
                            onClick={() => onSelect(config.id)}
                            className={`px-4 py-3 rounded-xl w-full text-lg border transition  ${active ? config.activeClass : "border-gray-500 text-gray-500 bg-white"}`}
                        >
                            {t(`severity.${config.id}`)}
                        </button>
                    )
                })}
            </div>

            {errors && (
                <p className="text-xs text-red-500 mt-1">
                    {errors.message}
                </p>
            )}
        </div>
    )
}

export default SeveritySelector