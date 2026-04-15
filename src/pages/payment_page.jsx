import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Payment_page() {
    const [AmountPaid, setAmountPaid] = useState("");
    const [PaymentDate, setPaymentDate] = useState("");
    const [ServiceCode, setServiceCode] = useState("");
    const [PlateNumber, setPlateNumber] = useState("");
    const [done, setDone] = useState(false);
    const [payments, setPayments] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4000/add-payment", { AmountPaid, PaymentDate, ServiceCode, PlateNumber });
            console.log(res);
            fetchPayments();
            setDone(true);
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchPayments() {
        try {
            const res = await axios.get("http://localhost:4000/display-payments");
            console.log(res);
            setPayments(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchPayments();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">Payment Record form</h1>
            <form action="" className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
                <input 
                    className="border border-gray-300 rounded p-2" 
                    type="number" 
                    placeholder="Amount Paid" 
                    value={AmountPaid}
                    onChange={(e)=>setAmountPaid(e.target.value)}
                />
                <input 
                    className="border border-gray-300 rounded p-2" 
                    type="date" 
                    placeholder="Payment Date" 
                    value={PaymentDate}
                    onChange={(e)=>setPaymentDate(e.target.value)}
                />
                <input 
                    className="border border-gray-300 rounded p-2" 
                    type="number" 
                    placeholder="Service Code" 
                    value={ServiceCode}
                    onChange={(e)=>setServiceCode(e.target.value)}
                />
                <input 
                    className="border border-gray-300 rounded p-2" 
                    type="number" 
                    placeholder="Plate Number" 
                    value={PlateNumber}
                    onChange={(e)=>setPlateNumber(e.target.value)}
                />
                <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600" type="submit">Submit</button>
            </form>
            {done && <p className="text-green-500">Payment added successfully!</p>}
            <table className="border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">PaymentNumber</th>
                        <th className="border border-gray-300 p-2">AmountPaid</th>
                        <th className="border border-gray-300 p-2">PaymentDate</th>
                        <th className="border border-gray-300 p-2">ServiceCode</th>
                        <th className="border border-gray-300 p-2">PlateNumber</th>
                    </tr>
                </thead>
                <tbody>
                    {payments.map((payment) => (
                        <tr key={payment.PaymentNumber} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{payment.PaymentNumber}</td>
                            <td className="border border-gray-300 p-2">{payment.AmountPaid}</td>
                            <td className="border border-gray-300 p-2">{payment.PaymentDate}</td>
                            <td className="border border-gray-300 p-2">{payment.ServiceCode}</td>
                            <td className="border border-gray-300 p-2">{payment.PlateNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Payment_page;