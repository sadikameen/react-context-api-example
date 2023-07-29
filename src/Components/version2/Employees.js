import Employee from "./Employee";
import { useEmployeeContext } from "../../Context/employeeContext";

const Employees = () => {
    const { datas } = useEmployeeContext();
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