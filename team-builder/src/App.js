import React, { useState } from 'react';
import Team from "./components/Team";
import Create from "./components/Form";
import './App.css';

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
        name: "Kevin Carr",
        email: "kevincarr@yahoo.com",
        role: "Frontend Engineer"
    }
]);

  return (
    <div className="App" >
      <h1>List of Team Members</h1>

      <Create teamMembers={teamMembers} setTeamMembers={setTeamMembers} />
      <Team teamMembers ={teamMembers} />
    </div>
  );
}

export default App;
