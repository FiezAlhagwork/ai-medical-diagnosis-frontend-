import { useEffect, useState } from "react"
import { StatCard } from "../../components/ui/StatCard"
import { FaUserAlt } from "react-icons/fa";
import { FaStethoscope } from "react-icons/fa6";
import { BsFileText } from "react-icons/bs";
import { FiActivity } from "react-icons/fi";
import { PieChart, Pie, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { getBySpecialty, getMockDashboardStats } from "../../services/admin";
import type { DashboardState, SpecialtyStats } from "../../types";
import Table from "../../components/ui/Table";





const Dashboard = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [mockDashboardStats, setMockDashboardStats] = useState<DashboardState>({ totalDiagnoses: 0, todayDiagnoses: 0, totalDoctors: 0, totalUsers: 0 })
    const [specialtiesData, setSpecialtiesData] = useState<SpecialtyStats[]>([]);
    const COLORS = ["#3182ce", "#e53e3e", "#ff9204", "#38a169", "#d69e2e"];

    const fetchStats = async () => {
        setIsLoading(true)
        try {
            const stateRes = await getMockDashboardStats()
            setMockDashboardStats(stateRes)
            const specialtiesRes = await getBySpecialty()
            setSpecialtiesData(specialtiesRes.data)
        } catch (error) {
            console.error("Error fetching stats:", error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchStats()
    }, [])

    
    return (
        <div className=" space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-foreground">
                    لوحة التحكم                </h1>
                <p className="text-muted-foreground mt-1 ">
                    نظرة عامة على منصة التشخيص الطبي                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                <StatCard
                    title={"إجمالي المستخدمين"}
                    value={mockDashboardStats.totalUsers}

                    Icon={FaUserAlt}
                    isLoading={isLoading}
                    variant="primary"
                />
                <StatCard
                    title={"إجمالي الأطباء"}
                    value={mockDashboardStats.totalDoctors}
                    Icon={FaStethoscope}
                    isLoading={isLoading}
                    variant="success"
                />
                <StatCard
                    title="إجمالي التشخيصات"
                    value={mockDashboardStats.totalDiagnoses}
                    Icon={BsFileText}
                    isLoading={isLoading}
                    variant="default"
                />
                <StatCard
                    title='تشخيصات اليوم'
                    value={mockDashboardStats.todayDiagnoses}
                    Icon={FiActivity}
                    isLoading={isLoading}
                    variant="destructive"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                <div className="bg-white/50 rounded-lg shadow-sm p-4 border-[0.3px] border-gray-200">
                    <h2 className="text-lg font-semibold text-slate-800 mb-4 ">
                        التخصصات الأكثر طلباً
                    </h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={specialtiesData}
                                dataKey="count"
                                nameKey="specialty"
                                cx="50%"
                                cy="50%"
                                outerRadius={120}
                                innerRadius={80}
                                label={({ value }) => `${value}`}
                                labelLine={false}
                            >

                                {specialtiesData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip
                                content={({ active, payload }) => {
                                    if (active && payload && payload.length) {
                                        const data = payload[0].payload; // العنصر الحالي
                                        return (
                                            <div style={{
                                                backgroundColor: '#fff',
                                                border: '1px solid #e2e8f0',
                                                borderRadius: '8px',
                                                padding: '8px 12px',
                                                fontSize: '14px',
                                                color: '#1a202c'
                                            }}>
                                                <div><strong>التخصص:</strong> {data.specialty}</div>
                                                <div><strong>العدد:</strong> {data.count}</div>
                                            </div>
                                        );
                                    }
                                    return null;
                                }}
                            />

                            <Legend verticalAlign="bottom" height={36} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>

            <div className="">
                <Table />
            </div>
        </div>
    )
}

export default Dashboard