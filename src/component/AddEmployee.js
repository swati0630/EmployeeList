import React, { useState } from 'react';
import {useHistory} from 'react-router';
import {addEmployee} from '../Service/Employee';

const AddEmployee = (props)  => {
    const history = useHistory();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDOB] = useState('');
    const [designation, setDesignation] = useState('');
    const [experience, setExperience] = useState('');
    const [profileIcon, setProfileIcon] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        const payload = {
            firstName,
            lastName,
            dob,
            designation,
            experience,
            profileIcon,
        }
        addEmployee(payload);
        history.push('/employeeList');
    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label for="firstName"> First Name</label>
                <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={({target}) => setFirstName(target.value.trim())}
                />
            </div>
            <div>
                <label for="lastName"> First Name</label>
                <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    onChange={({target}) => setLastName(target.value.trim())}
                />
            </div>
            <div>
                <label for="dob"> First Name</label>
                <input
                    id="dob"
                    type="text"
                    value={dob}
                    onChange={({target}) => setDOB(target.value.trim())}
                />
            </div>
            <div>
                <label for="designation"> First Name</label>
                <input
                    id="designation"
                    type="text"
                    value={designation}
                    onChange={({target}) => setDesignation(target.value.trim())}
                />
            </div>
            <div>
                <label for="experience"> First Name</label>
                <input
                    id="experience"
                    type="text"
                    value={experience}
                    onChange={({target}) => setExperience(target.value.trim())}
                />
            </div>
            <div>
                <label for="profileIcon"> First Name</label>
                <input
                    id="profileIcon"
                    type="text"
                    value={profileIcon}
                    onChange={({target}) => setProfileIcon(target.value.trim())}
                />
            </div>
        </form>
    );
}

export default AddEmployee;