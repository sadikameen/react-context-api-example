import { useEmployeeContext } from "../../Context/employeeContext";

const Header = () => {
    const { myTitle } = useEmployeeContext();
    return (
        <h1>{myTitle}</h1>
    )
}
export default Header;