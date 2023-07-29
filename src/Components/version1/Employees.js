import Employee from "./Employee";
import { useContext } from "react";
import { employeeContext } from "../../App";
const Employees = () => {
    const { datas } = useContext(employeeContext);
    return (
        <table class="my-table">
            <tr>
                <th>Emp ID</th>
                <th>Name</th>
                <th>Role</th>
            </tr>
            {datas.map(data => {
                return (
                    <Employee key={data.id}{...data} />
                )
            })}
        </table>
    )
}

export default Employees;