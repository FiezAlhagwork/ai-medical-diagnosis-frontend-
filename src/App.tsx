import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Symptoms from "./pages/User/Symptoms";
import Profile from "./pages/User/Profile";
import Doctors from "./pages/User/Doctors";
import DoctorProfile from "./pages/User/DoctorProfile";
import Diagnosis from "./pages/User/Diagnosis";
import Layout from "./components/layouts/Layout";
import Landing from "./pages/User/Landing";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import ManageDoctor from "./pages/Admin/ManageDoctor";
import ManageUser from "./pages/Admin/ManageUser";
import { DiagnosisProvider } from "./context/DiagnosisContext";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <DiagnosisProvider>
        <div>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />

              {/* Users Routes */}
              <Route element={<Layout />}>
                <Route path="/" element={<Landing />} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/symptoms" element={<Symptoms />} />
                  <Route path="/doctors" element={<Doctors />} />
                  <Route path="/doctor/:id" element={<DoctorProfile />} />
                  <Route path="/diagnosis/:id" element={<Diagnosis />} />
                </Route>
              </Route>
              
              <Route element={<ProtectedRoute role="admin" />}>
                <Route path="/admin" element={<AdminDashboard />}>
                  <Route path="manageDoctor" element={<ManageDoctor />} />
                  <Route path="manageUser" element={<ManageUser />} />
                </Route>
              </Route>





            </Routes>
          </Router>
        </div>
      </DiagnosisProvider>
    </AuthProvider>
  );
}

export default App;
