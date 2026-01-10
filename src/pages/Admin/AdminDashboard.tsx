import { Outlet } from "react-router-dom"

const AdminDashboard = () => {
    return (
        <>
            <header>header</header>
            <main><Outlet /></main>
            <footer>footer</footer>
        </>
    )
}

export default AdminDashboard