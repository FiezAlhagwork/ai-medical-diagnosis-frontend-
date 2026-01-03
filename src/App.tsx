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

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />

          {/* Users Routes */}
          {/* <Route element={<ProtectedRoute />}> */}
          <Route element={<Layout />}>
            <Route path="/" element={<Landing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/symptoms" element={<Symptoms />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/diagnosis" element={<Diagnosis />} />
          </Route>
          {/* </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
