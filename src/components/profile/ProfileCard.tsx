import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button'
import { FaRegEdit } from "react-icons/fa";
import { useTranslation } from 'react-i18next';


const ProfileCard = () => {
    const { user } = useAuth()
    const { t } = useTranslation("profile")
    return (
        <>
            <h1 className="text-center text-3xl  md:text-5xl font-bold">{t("title")}</h1>
            <div className="bg-white flex flex-col md:flex-row items-center text-center  gap-4 mt-20 py-10 shadow-lg rounded-3xl">
                <div className="w-20 h-20 rounded-full bg-linear-to-r from-cyan-500 to-blue-500 text-white flex items-center justify-center text-3xl font-bold md:ms-9">
                    F
                </div>
                <div className="text-center md:text-start flex-1 md:ms-3 ">
                    <h2 className="text-2xl  font-semibold  ">
                        {user?.name}
                    </h2>
                    <p className=" text-gray-500">
                        {user?.email || ""}
                    </p>
                </div>
                <div className="md:pe-7">
                    <Link to="/symptoms" >
                        <Button icon={<FaRegEdit size={22} />} variant="primary">
                            {t("create_diagnosis")}
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProfileCard