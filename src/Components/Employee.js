const Employee = (props) => {
    const { id, name, role } = props;
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{role}</td>
        </tr>
    )
}

export default Employee;