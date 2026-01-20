import { BiHistory } from "react-icons/bi";
import type { DiagnosisCardProps } from "../../types";
import { Link } from "react-router-dom";
const DiagnosisCard = ({ _id, confidence, createdAt, possible_condition }: DiagnosisCardProps) => {
    return (
        <Link to={`/diagnosis/${_id}`}>
            <div className="flex items-center justify-between bg-white w-full py-4 px-5 rounded-2xl shadow-md hover:shadow-xl hover:bg-gray-200 transition-colors cursor-pointer">
                <div className="flex flex-row ">
                    <div className="w-10 h-10 bg-blue-50 text-blue-500 rounded-4xl flex justify-center items-center me-4 " >
                        <BiHistory size={25} />
                    </div>
                    <div>
                        <h1 className="text-lg font-semibold mb-1 ">{possible_condition}</h1>
                        <span className="text-[14px] text-gray-500">{createdAt}</span>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-700 text-white flex items-center justify-between text-[13px]">
                    <span className="ms-1.5">{confidence}</span>
                </div>
            </div>
        </Link>
    )
}

export default DiagnosisCard