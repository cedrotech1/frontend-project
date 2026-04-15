import axios from "axios";
import { useState, useEffect } from "react";

function ServiceRecord() {
    const [SeviceDate, setSeviceDate] = useState("");
    const [done, setDone] = useState(false);
    const [editingRecord, setEditingRecord] = useState(null);
    const [serviceRecords, setServiceRecords] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            if (editingRecord) {
                const res = await axios.put("http://localhost:4000/update-service-record", { 
                    RecordNumber: editingRecord.RecordNumber, 
                    SeviceDate
                });
                console.log(res);
                setDone(true);
            } else {
                const res = await axios.post("http://localhost:4000/add-service-record", { SeviceDate });
                console.log(res);
                setDone(true);
            }
            
            setSeviceDate("");
            setEditingRecord(null);
            fetchServiceRecords();
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchServiceRecords() {
        try {
            const res = await axios.get("http://localhost:4000/display-service-records");
            console.log(res);
            setServiceRecords(res.data);
        } catch (error) {
            console.error(error);
        }
    }

    const handleEdit = (record) => {
        setSeviceDate(record.SeviceDate);
        setEditingRecord(record);
    };

    const handleDelete = async (recordNumber) => {
        if (window.confirm("Are you sure you want to delete this service record?")) {
            try {
                const res = await axios.delete("http://localhost:4000/delete-service-record", { 
                    data: { RecordNumber: recordNumber } 
                });
                console.log(res);
                fetchServiceRecords();
                setDone(true);
            } catch (error) {
                console.error(error);
            }
        }
    };

    useEffect(() => {
        fetchServiceRecords();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">
                {editingRecord ? "Edit Service Record" : "Service Record form"}
            </h1>
            <form action="" className="flex flex-col gap-6 p-6" onSubmit={handleSubmit}>
                <input 
                    className="border border-gray-300 rounded p-2" 
                    type="date" 
                    placeholder="Service Date"
                    value={SeviceDate} 
                    onChange={(e)=>setSeviceDate(e.target.value)}
                />
                <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600" type="submit">
                    {editingRecord ? "Update" : "Submit"}
                </button>
                {editingRecord && (
                    <button
                        type="button"
                        className="bg-gray-500 text-white rounded p-2 hover:bg-gray-600"
                        onClick={() => {
                            setEditingRecord(null);
                            setSeviceDate("");
                        }}
                    >
                        Cancel
                    </button>
                )}
            </form>
            {done && <p className="text-green-500">Operation completed successfully!</p>}
            
            <h2 className="text-xl font-bold mb-4 mt-8">Service Records</h2>
            <table className="border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">RecordNumber</th>
                        <th className="border border-gray-300 p-2">ServiceDate</th>
                        <th className="border border-gray-300 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {serviceRecords.map((record) => (
                        <tr key={record.RecordNumber} className="border border-gray-300">
                            <td className="border border-gray-300 p-2">{record.RecordNumber}</td>
                            <td className="border border-gray-300 p-2">{record.SeviceDate}</td>
                            <td className="border border-gray-300 p-2">
                                <button
                                    onClick={() => handleEdit(record)}
                                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2 hover:bg-yellow-600"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(record.RecordNumber)}
                                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ServiceRecord;