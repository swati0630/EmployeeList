import React, {useState, useEffect, useMemo} from 'react'
import {useHistory} from 'react-router';
import {header, fetchEmployees, deleteEmployee} from '../Service/Employee';

const EmployeeList = ()  => {
    const history = useHistory();
    const [list, setList] = useState([]);

    useEffect(() => {
        setList(fetchEmployees());
    }, []);

    const addEmployee = () =>{
        history.push('addEmployee');
    };

    const onDelete = (id) => {
        deleteEmployee(id);
        setList(fetchEmployees());
    }

    const noRecord = useMemo(() => {
        return (
            <div>
                <h1>No Record Found</h1>
            </div>
        );
    }, []);

    return (
        <div>
            <button onClick={addEmployee}>Add Employee</button>
            <table>
                <thead>
                    <th>
                        {
                            header.map(({label}) => (
                                <td key={`header-${label}`}>
                                    {label}
                                </td>
                            ))
                        }
                        <td>Action</td>
                    </th>
                </thead>
                <tbody>
                    {list.length === 0 && noRecord}
                    {!list.length && (
                        list.map((item) => (
                            <tr key={`row-${item.id}`}>
                                {
                                    header.map(({value}) => (
                                        <td key={`row-${item.id}-${value}`}>
                                            {item[value]}
                                        </td>
                                    ))
                                }
                                <td>
                                    <button onClick={() => onDelete(item.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EmployeeList;