import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function ServicesCrudPage() {
    const [ServiceName, setServiceName] = useState("");
    const [ServicePrice, setServicePrice] = useState("");
    const [done, setDone] = useState(false);
    const [services, setServices] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/add-service", { ServiceName, ServicePrice });
            console.log(res);
            fetchServices();
            setDone(true);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchServices() {
        try {
            const res = await axios.get("http://localhost:4000/display-services");
            console.log(res);
            setServices(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">
                Add Service
            </h1>
            <form action="" className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
                <input
                    className="border border-gray-300 rounded p-2"
                    type="text"
                    placeholder="Service Name"
                    value={ServiceName}
                    onChange={(e)=>setServiceName(e.target.value)}
                />
                <input
                    className="border border-gray-300 rounded p-2"
                    type="number"
                    placeholder="Service Price"
                    value={ServicePrice}
                    onChange={(e)=>setServicePrice(e.target.value)}
                />
                <button
                    className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                    type="submit"
                >
                    Submit
                </button>
            </form>
            {done && <p className="text-green-500">Service added successfully!</p>}
            <table className="border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">ServiceCode</th>
                        <th className="border border-gray-300 p-2">ServiceName</th>
                        <th className="border border-gray-300 p-2">ServicePrice</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service) => (
                        <tr key={service.ServiceCode} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{service.ServiceCode}</td>
                            <td className="border border-gray-300 p-2">{service.ServiceName}</td>
                            <td className="border border-gray-300 p-2">{service.ServicePrice}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServicesCrudPage;