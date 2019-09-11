import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


function Team(props) {
    return (
        <>
        {props.teamMembers.map((teamMember, index) => (
            <div className="p-3 bg-info my-2 rounded" key={index}>
                <Toast>
                    <ToastHeader>{teamMember.name}</ToastHeader>
                    <ToastBody>
                    <p>Role: {teamMember.role}</p>
                    <p>Email: {teamMember.email}</p>
                    </ToastBody>
                </Toast>
            </div>
        ))}
        </>
    )
}

export default Team;