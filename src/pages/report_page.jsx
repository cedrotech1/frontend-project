import axios from "axios";
import { useState, useEffect } from "react";

function ReportPage() {
    const [reportData, setReportData] = useState([]);

    async function fetchReportData() {
        try {
            // Get all data from different tables
            const [carsRes, servicesRes, paymentsRes] = await Promise.all([
                axios.get("http://localhost:4000/display-cars"),
                axios.get("http://localhost:4000/display-services"),
                axios.get("http://localhost:4000/display-payments")
            ]);
            
            // Create a simple joined view
            const joinedData = [];
            
            // Combine payment data with car and service info
            paymentsRes.data.forEach(payment => {
                const car = carsRes.data.find(c => c.PlateNumber === payment.PlateNumber);
                const service = servicesRes.data.find(s => s.ServiceCode === payment.ServiceCode);
                
                joinedData.push({
                    PlateNumber: payment.PlateNumber,
                    CarType: car?.type || 'N/A',
                    CarModel: car?.Model || 'N/A',
                    MechanicName: car?.MechanicName || 'N/A',
                    ServiceName: service?.ServiceName || 'N/A',
                    ServicePrice: service?.ServicePrice || 0,
                    AmountPaid: payment.AmountPaid || 0,
                    PaymentDate: payment.PaymentDate || 'N/A'
                });
            });
            
            setReportData(joinedData);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchReportData();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">Simple Report</h1>
            
            <div className="mb-4">
                <button 
                    onClick={fetchReportData}
                    className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Refresh Report
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Car Services & Payments Report</h2>
                
                <table className="border-collapse border border-gray-300 w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2 text-left">Plate Number</th>
                            <th className="border border-gray-300 p-2 text-left">Car Type</th>
                            <th className="border border-gray-300 p-2 text-left">Model</th>
                            <th className="border border-gray-300 p-2 text-left">Mechanic</th>
                            <th className="border border-gray-300 p-2 text-left">Service</th>
                            <th className="border border-gray-300 p-2 text-left">Service Price</th>
                            <th className="border border-gray-300 p-2 text-left">Amount Paid</th>
                            <th className="border border-gray-300 p-2 text-left">Payment Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reportData.map((record, index) => (
                            <tr key={index} className="border border-gray-300 hover:bg-gray-50">
                                <td className="border border-gray-300 p-2">{record.PlateNumber}</td>
                                <td className="border border-gray-300 p-2">{record.CarType}</td>
                                <td className="border border-gray-300 p-2">{record.CarModel}</td>
                                <td className="border border-gray-300 p-2">{record.MechanicName}</td>
                                <td className="border border-gray-300 p-2">{record.ServiceName}</td>
                                <td className="border border-gray-300 p-2">{record.ServicePrice}</td>
                                <td className="border border-gray-300 p-2">{record.AmountPaid}</td>
                                <td className="border border-gray-300 p-2">{record.PaymentDate}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
                {reportData.length > 0 && (
                    <div className="mt-4 p-4 bg-blue-100 rounded">
                        <h3 className="font-bold">Summary</h3>
                        <p>Total Records: {reportData.length}</p>
                        <p>Total Revenue: {reportData.reduce((sum, record) => sum + (parseInt(record.AmountPaid) || 0), 0)} Rwf</p>
                    </div>
                )}
                
                {reportData.length === 0 && (
                    <div className="text-center p-8 text-gray-500">
                        <p>No payment records found. Add some payments to see the report.</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ReportPage;