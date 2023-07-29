import { useEmployeeContext } from '../Context/employeeContext';
const Count = () => {
    const { count } = useEmployeeContext();
    return (
        <h1>No Of Employee= {count} </h1>
    )
}

export default Count;