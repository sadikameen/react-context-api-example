import { createContext, useContext } from 'react';

export const employeeContext = createContext(null);

export const EmployeeContextProvider = ({ children }) => {
    const datas = [
        { id: '1', name: 'John Doe', role: 'dev' },
        { id: '2', name: 'Philip', role: 'dev' },
        { id: '3', name: 'Mark', role: 'manager' }
    ]
    const myTitle = "My React App Context API";
    return (
        <employeeContext.Provider value={{ myTitle, datas }}>
            {children}
        </employeeContext.Provider>
    );
};

export const useEmployeeContext = () => {
    const { myTitle, datas } = useContext(employeeContext);
    return { myTitle, datas }
}