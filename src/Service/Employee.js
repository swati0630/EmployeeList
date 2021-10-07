const employeeList = [];

export const header = [
    {label: 'First Name', value: 'firstName'},
    {label: 'Last Name', value: 'lastName'},
    {label: 'DOB', value: 'dob'},
    {label: 'Designation', value: 'designation'},
    {label: 'Experience', value: 'experience'},
    {label: 'Profile Icon', value: 'profileIcon'},
];

export const fetchEmployees = () => {
    return employeeList;
};

export const addEmployee = (requestPayload) => {
    employeeList.push({
        ...requestPayload,
        id: employeeList.length,
    });
};

export const deleteEmployee = (id) => {
    const deleteIndex = Number(id) -1;
    employeeList.splice(deleteIndex, 1);
};