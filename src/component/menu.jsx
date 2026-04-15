import { Link } from "react-router-dom";
function Menu() {
    return (
        <div className="bg-blue-500 text-white p-4">
           
            <ul className="flex gap-4 p-4">
                <li className="hover:bg-blue-600 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/">Home</Link></li>
                <li className="hover:bg-blue-600 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/car">Car</Link></li>
                <li className="hover:bg-blue-600 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/service">Service</Link></li>
                <li className="hover:bg-blue-600 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/payment">Payment</Link></li>
                <li className="hover:bg-blue-600 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/report">Report</Link></li>
                <li className="hover:bg-blue-600 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/service-record">Service Record</Link></li>
                <li className="bg-red-500 p-1 transition-all duration-300 hover:p-1.5 hover:rounded cursor-pointer"><Link to="/logout">Logout</Link></li>
            </ul>
        </div>
    );
}

export default Menu;