import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from "react-router-dom";

const Form = props => {
    const initial = { name: "", email: "", role: "" }
    const [newTeamMember ,setNewTeamMember] = useState(initial);
    useEffect(() => {
        props.setMemberToEdit(props.memberToEdit)
    }, [props]);

    const handleChange = event => {
        setNewTeamMember({
            ...newTeamMember,
            [event.target.name]: event.target.value 
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        if(!newTeamMember.name || !newTeamMember.email || !newTeamMember.role){
            alert("Please fill out all fields!");
        } else{
            props.setTeamMembers([newTeamMember, ...props.teamMembers]);
            resetForm();
            alert("Thanks for joining! Checkout the Team Members List") 

        }
        
    };

    const resetForm = () => {
        setNewTeamMember(initial);
    };

    return (
        
       
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="text-info">Enter your information</h2>
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
             placeholder="Team Role"
             onChange={handleChange}
             value={newTeamMember.role}
             /> 
             <br/>
            <Button className="button" color="info" type="submit">Join</Button>
            <NavLink to="/member-list">
            <Button className="button" color="info" >List of Team Members</Button>
            </NavLink>
            <NavLink to="/">
            <Button className="button" color="info">Home</Button>
            </NavLink>
        </form>
        
    );
};

export default Form;