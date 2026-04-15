import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function CarsPage() {
  // all logics
  let [type, setType] = useState("");
  let [Model, setModel] = useState("");
  let [MechanicName, setMechanicName] = useState("");
  let [done, setDone] = useState(false);
  let [cars, setCars] = useState([]);
  async function Hundlesubmit (e) {
    e.preventDefault();
    // console.log({ type, model, mechanicName });
    try {
      const res= await axios.post("http://localhost:4000/add-car",{ type, Model, MechanicName });
      console.log(res);
      fetchCars();
      setDone(true);
    } catch (error) {
      console.error(error);
      
    }
  }
  // fetching cars
  async function fetchCars() {
    try {
      const res = await axios.get("http://localhost:4000/display-cars");
      console.log(res);
      setCars(res.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">
        Recort car form1
      </h1>
      {/* car(PlateNumber, type, Model,ManufacturingYear, 
DriverPhone,MechanicName)  */}
      <form action="" className="flex flex-col gap-6 p-6">
        <input
          className="border border-gray-300 rounded p-2"
          type="text"
          placeholder="type"
          value={type}
          onChange={(e)=>setType(e.target.value)}
          
        />
        <input
          className="border border-gray-300 rounded p-2"
          type="text"
          placeholder="Model"
          value={Model}
          onChange={(e)=>setModel(e.target.value)}
        />

        <input
          className="border border-gray-300 rounded p-2"
          type="text"
          placeholder="MechanicName"
          value={MechanicName}
          onChange={(e)=>setMechanicName(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
          type="submit"
          onClick={Hundlesubmit}
        >
          Submit
        </button>
      </form>
      {done && <p className="text-green-500">Car added successfully!</p>}
      <table className="border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">PlateNumber</th>
            <th className="border border-gray-300 p-2">Type</th>
            <th className="border border-gray-300 p-2">Model</th>
            <th className="border border-gray-300 p-2">MechanicName</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car._id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">{car.PlateNumber}</td>
              <td className="border border-gray-300 p-2">{car.type}</td>
              <td className="border border-gray-300 p-2">{car.Model}</td>
              <td className="border border-gray-300 p-2">{car.MechanicName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CarsPage;
