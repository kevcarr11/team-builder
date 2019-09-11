import React, { useState } from 'react';
import {Route} from 'react-router-dom';
import MemberList from "./components/MemberList";
import Form from "./components/Form";
import Home from "./components/Home";
import './App.css';

function App() {
  const [memberToEdit, setMemberToEdit] = useState({name: '', email: '', role: '' })
  const [teamMembers, setTeamMembers] = useState([
    {
        name: "Kevin Carr",
        email: "kevincarr@yahoo.com",
        role: "Frontend Engineer"
    }
]);
console.log(memberToEdit)

function editMember(info) {
  setMemberToEdit(info);
  console.log(info)
}

  return (
    <div className="App" >
      <Route exact path={"/"} component={Home} />
      <Route path={"/member-list"} render={props => <MemberList {...props} teamMembers={teamMembers} editMember={editMember} setMemberToEdit = {setMemberToEdit} />} />
      <Route exact path={"/add-member"} render={props => <Form {...props} setTeamMembers={setTeamMembers} setMemberToEdit = {setMemberToEdit} teamMembers={teamMembers} /> } />
     
      {/* <h1 className="text-info">List of Team Members</h1> */}
       {/* <MemberList 
      editMember={editMember}
      teamMembers = {teamMembers} 
      memberToEdit = {memberToEdit}
       /> */}
    </div>
  );
}

export default App;
