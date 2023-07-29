import { useContext } from "react";
import { employeeContext } from "../../App";

const Header = () => {
    const { myTitle } = useContext(employeeContext);
    return (
        <h1>{myTitle}</h1>
    )
}
export default Header;