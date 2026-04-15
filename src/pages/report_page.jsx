function ReportPage() {
    return (
        <div>
            <h1 className="text-2xl bg-blue-300">Report Page</h1>
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

export default ReportPage;