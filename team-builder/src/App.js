import React, { useState } from 'react';
import Team from "./components/Team";
import Create from "./components/Form";
import './App.css';

function App() {
  const [memberToEdit, setMemberToEdit] = useState('')
  const [teamMembers, setTeamMembers] = useState([
    {
        name: "Kevin Carr",
        email: "kevincarr@yahoo.com",
        role: "Frontend Engineer"
    }
]);

  return (
    <div className="App" >
      
      <Create teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <h1 className="text-info">List of Team Members</h1>
      <Team 
      teamMembers = {teamMembers} 
      memberToEdit = {memberToEdit}
      setMemberToEdit = {setMemberToEdit} />
    </div>
  );
}

export default App;
