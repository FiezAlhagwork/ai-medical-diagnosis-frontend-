import { useEffect, useState } from "react"
import { Link, } from "react-router-dom"
import type { Doctor } from "../../types/Doctor"
import { getAllDoctors } from "../../services/Doctor"
import moment from "moment"
import Loading from "../../components/ui/Loading"
import { FaStar } from "react-icons/fa"

const ManageDoctor = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [doctors, setDoctors] = useState<Doctor[] | null>([])

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const doctorRes = await getAllDoctors()
      if (doctorRes.doctors && !doctorRes.error) {
        setDoctors(doctorRes.doctors)
      }
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className=" space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground"> ادراة الطبيب
          </h1>
          <p className="text-muted-foreground mt-1 ">
            نظرة عامة على الاطباء
          </p>
        </div>
        <Link to="/admin/createDoctor">

          <button className="bg-primary text-white hover:bg-blue-800 hover:text-white font-medium p-2.5 shadow-sm rounded-md text-md flex  items-center justify-center capitalize transition-color duration-150 ">اضافة طبيب</button>
        </Link>
      </div>

      <div className="">
        <div className="overflow-x-auto mt-6   ">
          {isLoading ? (
            <Loading message="جاري تحميل التشخيصات" />
          ) : (
            <table border={1} className="min-w-full  border-[0.3px] border-gray-200  bg-white shadow-lg  p-5">
              <thead className="bg-gray-100  ">
                <tr className="">
                  <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">صورة</th>
                  <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">اسم الدكتور</th>
                  <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">السعر</th>
                  <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">تاريخ التسجيل</th>
                  <th className="px-4 py-4 text-right text-sm font-medium text-gray-700">تقيم</th>

                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {doctors?.map((d, idx) => (
                  <tr key={idx} className="hover:bg-gray-50">
                    <td className="px-4 py-3 text-right text-gray-800">
                      <img className="w-15 h-15 rounded-full" src={d.image?.url} />
                    </td>
                    <td className="px-4 py-2 text-right text-gray-800">{d.name}</td>

                    <td className="px-4 py-2 text-right text-gray-500">{d.price} S.Y</td>
                    <td className="px-4 py-2 text-right text-gray-600">
                      {moment().format("YYYY/MM/DD")}
                    </td>
                    <td className="px-4 py-2 text-center text-sm ">
                      <div className="flex items-center  gap-1">
                        <FaStar size={15} className="text-yellow-500 ms-1" />
                        {d.rating}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>

  )
}

export default ManageDoctor