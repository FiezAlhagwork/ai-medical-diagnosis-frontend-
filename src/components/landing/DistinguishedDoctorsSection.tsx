import { CiStethoscope } from "react-icons/ci";
import Title from "../ui/Title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { useTranslation } from "react-i18next";
import type { Doctor } from "../../types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import DoctorCard from "../ui/DoctorCard";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";


const DistinguishedDoctorsSection = () => {
    const { t } = useTranslation("landing")
    const DoctorData: Doctor[] = [
        {
            id: 1,
            name: "فايز الحاج",
            image:
                "https://res.cloudinary.com/dnxc7gwpq/image/upload/v1763899142/doctors/a2_gmail_com/profile-1763899142349.jpg",
            province: "دمشق",
            rating: 4.5,
            specialty: "القلب والاوعية الدموية",
        },
        {
            id: 2,
            name: "خالد العلي",
            image:
                "https://res.cloudinary.com/dnxc7gwpq/image/upload/v1763899142/doctors/a2_gmail_com/profile-1763899142349.jpg",
            province: "دمشق",
            rating: 4.7,
            specialty: "طب أسنان",
        },
        {
            id: 3,
            name: "محمد الحاج",
            image:
                "https://res.cloudinary.com/dnxc7gwpq/image/upload/v1763899142/doctors/a2_gmail_com/profile-1763899142349.jpg",
            province: "دمشق",
            rating: 3.9,
            specialty: "أنف وأذن وحنجرة",
        },
        {
            id: 4,
            name: "محمود ياسين ",
            image:
                "https://res.cloudinary.com/dnxc7gwpq/image/upload/v1763899142/doctors/a2_gmail_com/profile-1763899142349.jpg",
            province: "دمشق",
            rating: 4.2,
            specialty: "أمراض معدية",
        },
    ];
    return (
        <section className="relative z-10  py-16 md:py-20 bg-[#EBF5FF]">
            <div className="container_custom px-4 relative">
                <Title
                    icons={<CiStethoscope size={33} />}
                    title={t("our_distinguished_doctors.our_distinguished_doctors")}
                />
                <Swiper

                    // install Swiper modules
                    //  dir={i18n.language === "ar" ? "rtl" : "ltr"}
                    dir="rtl"
                    modules={[Navigation, Pagination]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={{
                        nextEl: ".swiper-button-next-custom",
                        prevEl: ".swiper-button-prev-custom",
                    }}
                    pagination={{
                        el: ".swiper-pagination-custom",
                        clickable: true,
                        dynamicBullets: true,
                        dynamicMainBullets: 3,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 16,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 24,
                        },
                    }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                    className="relative"
                >
                    {DoctorData.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <DoctorCard item={item} />
                            </SwiperSlide>
                        );
                    })}

                    <button className="swiper-button-next-custom flex justify-center items-center absolute left-0  top-1/2  -translate-y-1/2   z-10 p-2.5 bg-white  hover:bg-slate-100  rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary-500">
                        <MdArrowBackIos />
                    </button>

                    <button className="swiper-button-prev-custom flex justify-center items-center absolute right-0 top-1/2 -translate-y-1/2  z-10 p-2.5 bg-white  hover:bg-slate-100 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none ">
                        <MdArrowForwardIos />
                    </button>

                    <div className="swiper-pagination-custom mt-20 gap-2 flex justify-center items-center w-fit mx-auto"></div>
                </Swiper>
            </div>
        </section>
    )
}

export default DistinguishedDoctorsSection;