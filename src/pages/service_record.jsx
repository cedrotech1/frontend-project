import axios from "axios";
import { useState } from "react";
function ServiceRecord() {
    let [SeviceDate,setSeviceDate]=useState("");
    let [message, setMessage]=useState("")
    async function Hundlesubmit(e){
        e.preventDefault();
        try{
            const res=await axios.post("http://localhost:4000/saving-services",{SeviceDate})
            setMessage("well done")
            console.log(message);


        }catch(error){
            console.log(error)
        }
    }
    return (
        <div>
            <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">Service Record form</h1>
         
            <form action="" className="flex flex-col gap-6 p-6">
            
                <input className="border border-gray-300 rounded p-2" type="date" 
                placeholder="SeviceDate"
                value={SeviceDate} 
                onChange={(e)=>setSeviceDate(e.target.value)}
                />
                
                <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600" type="submit" onClick={Hundlesubmit}>Submit</button>
            </form>
            {message? message:"" }
           


        </div>
    );
}

export default ServiceRecord;