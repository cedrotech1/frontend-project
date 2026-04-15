function ServicesCrudPage() {
    return (
        <div>
               <h1 className="text-2xl font-bold mb-6 bg-blue-500 text-white p-2 rounded m-6">service Record form</h1>
            {/* car(PlateNumber, type, Model,ManufacturingYear, 
DriverPhone,MechanicName)  */}
<form action="" className="flex flex-col gap-6 p-6">
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="PaymentNumber" />
    <input className="border border-gray-300 rounded p-2" type="text" placeholder="Amount Payed" />
     <input className="border border-gray-300 rounded p-2" type="date" placeholder="Amount date" />
    
    <button className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600" type="submit">Submit</button>
</form>
 <h1 className="text-2xl bg-blue-300">Service  Page</h1>
            {/* designed table Generating daily reports indicating offered Service and the amount paid 
for each car.
 */}
            <table className=" bg-gray-200 h-40 w-100 m-5">
                <tr className="bg-blue-200">
                    <th>plate number</th>
                    <th>Service</th>
                    <th>amount</th>
                </tr>
                 <tr>
                    <td>RA001</td>
                    <td>fix paraborize</td>
                    <td>1000</td>
                </tr>
                 <tr>
                    <td>RA001</td>
                    <td>fix paraborize</td>
                    <td>1000</td>
                </tr>

            </table>


        </div>
    );
}

export default ServicesCrudPage;