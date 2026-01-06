import { useTranslation } from "react-i18next"
import { IoIosSearch } from "react-icons/io"
import type { SymptomsTextareaProps } from "../../types"

const SymptomsTextarea = ({ register, errors, symptomsText }: SymptomsTextareaProps) => {
    const { t } = useTranslation("symptoms")
    return (
        <div className="flex flex-col glass mt-6 ">
            <div className="flex items-center gap-3 ">
                <IoIosSearch size={24} />
                <h2 className="md:text-2xl text-lg font-bold mb-2  ">{t("symptoms.descriptionPlaceholder")}</h2>
            </div>
            <p className="text-gray-700 text-sm md:text-[16px] pb-4">{t("symptoms.descriptionHint")}</p>
            <textarea
                placeholder={t("symptoms.descriptionExample")}
                className="min-h-32 border border-gray-300 bg-white outline-none rounded-2xl  resize-none placeholder:text-[14px] p-2 text-gray-600"
                {...register}
            />

            {
                errors && <span className="text-red-500 text-xs mt-2">{errors.message}</span>
            }
            <p className="text-xs text-gray-400 mt-2">
                {symptomsText.length}/500
            </p>
        </div>

    )
}

export default SymptomsTextarea