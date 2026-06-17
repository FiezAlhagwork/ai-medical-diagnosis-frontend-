import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

import Layout from "./components/layouts/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";

import { DiagnosisProvider } from "./context/DiagnosisContext";
import { AuthProvider } from "./context/AuthContext";
import Loading from "./components/ui/Loading";

// Lazy Loaded Pages
const Login = lazy(() => import("./pages/Auth/Login"));
const SignUp = lazy(() => import("./pages/Auth/SignUp"));

const Landing = lazy(() => import("./pages/User/Landing"));
const Profile = lazy(() => import("./pages/User/Profile"));
const Symptoms = lazy(() => import("./pages/User/Symptoms"));
const Doctors = lazy(() => import("./pages/User/Doctors"));
const DoctorProfile = lazy(() => import("./pages/User/DoctorProfile"));
const Diagnosis = lazy(() => import("./pages/User/Diagnosis"));

const AdminDashboard = lazy(() => import("./pages/Admin/AdminDashboard"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const ManageDoctor = lazy(() => import("./pages/Admin/ManageDoctor"));
const ManageUser = lazy(() => import("./pages/Admin/ManageUser"));
const CreateDoctor = lazy(() => import("./pages/Admin/CreateDoctor"));

function App() {
  return (
    <AuthProvider>
      <DiagnosisProvider>
        <Router>
          <Suspense fallback={<Loading title="جاري تحميل ..." fullScreen />}>
            <Routes>
              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />

              {/* User Routes */}
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

              {/* Admin Routes */}
              <Route element={<ProtectedRoute role="admin" />}>
                <Route path="/admin" element={<AdminDashboard />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="manageDoctor" element={<ManageDoctor />} />
                  <Route path="manageUser" element={<ManageUser />} />
                  <Route path="createDoctor" element={<CreateDoctor />} />
                </Route>
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </DiagnosisProvider>
    </AuthProvider>
  );
}

export default App;
