// import logo from './logo.svg';
// import './App.css';
import Login from "./Component/Login/Login";
// import NavBar from "./Component/NavBar/Navbar";
import EmpStatus from "./Component/employeStatus/EmployeStatus.jsx";
import EmpTime from "./Component/employeTime/EmployeTime.jsx";
import Employe from "./Component/employe/Employe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dash from "../src/Component/AdminDash/DashBored";
import Adding from "./Component/Adding/Adding";
import Admins from "./Component/AdminComponent/Admin";
import AdminPro from "./Component/AdminProjects/AdminPro";
import AdminReports from "./Component/AdminReports/AdminRepo";
import AdminSettings from "./Component/AdminSettings/AdminSett";
import AdminTeam from "./Component/AdminTeam/AdminTeam";
import Forgot from "./Component/Login/Forgot";
import Reset from "./Component/Changepsw/Changepsw";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/employe" element={<Employe />} />
          <Route path="/employe/timeSheet" element={<EmpTime />} />
          <Route path="/employe/timeStatus" element={<EmpStatus />} />
          <Route path="/Admin" element={<Admins />} />
          <Route path="/Admin/Dash" element={<Dash />} />
          <Route path="/Admin/Project" element={<AdminPro />} />
          <Route path="/Admin/Reports" element={<AdminReports />} />
          <Route path="/Admin/Settings" element={<AdminSettings />} />
          <Route path="/Admin/Team" element={<AdminTeam />} />
          <Route path="/forgot/psw" element={<Forgot />} />
          <Route path="/reset/psw" element={<Reset />} />
        </Routes>
      </BrowserRouter>
      {/* <Adding /> */}
    </>
  );
}

export default App;
