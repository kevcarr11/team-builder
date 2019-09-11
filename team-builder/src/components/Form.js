import React, { useState } from 'react';

const Create = props => {
    const initial = { name: "", email: "", role: "" }
    const [newTeamMember ,setNewTeamMember] = useState(initial);

    const handleChange = event => {
        setNewTeamMember({
            ...newTeamMember,
            [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        props.setTeamMembers([newTeamMember, ...props.teamMembers]);
        resetForm();
    };

    const resetForm = () => {
        setNewTeamMember(initial);
    };

    return (
        
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="formTitle">Add your info to team list</h2>
            <input className="input"
             type="text"
             name="name"
             placeholder="Name"
             onChange={handleChange}
             value={newTeamMember.name}
             />
             <br/>
            <input className="input"
             type="text"
             name="email"
             placeholder="Email"
             onChange={handleChange}
             value={newTeamMember.email}
             /> 
             <br/>
            <input className="input"
             type="text"
             name="role"
             placeholder="Role"
             onChange={handleChange}
             value={newTeamMember.role}
             /> 
             <br/>

            <button className="button" type="submit">Submit</button>
        </form>
    );
};

export default Create;