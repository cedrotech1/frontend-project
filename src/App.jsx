
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home_page";
import Car from "./pages/cars_page";
import Service from "./pages/services_crud_page";
import Payment_page from "./pages/payment_page";
import Report from "./pages/report_page";
import ServiceRecord from "./pages/service_record";
import Menu from "./component/menu";
import Login from "./pages/login_page";
import Logout from "./pages/logout_page";



function App() {
    return (
        <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path="/car" element={<Car/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/payment" element={<Payment_page/>} />
            <Route path="/report" element={<Report/>} />
            <Route path="/service-record" element={<ServiceRecord/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/logout" element={<Logout/>} />

        </Routes>
           
        </BrowserRouter>
    );
}

export default App;
