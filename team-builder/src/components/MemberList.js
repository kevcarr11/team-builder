import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom"

function MemberList(props) {
    const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    `
    return (
        <>
        <h1 className="text-info" >List of Team Members</h1>
            <Link to="/">
            <Button className="button" color="info">Home</Button>
            </Link>
            <Link to={`/add-member`}>
            <Button className="button" color="info">Add New Member</Button >
            </Link>
        {props.teamMembers.map((teamMember, index) => (
            <div className="p-3 bg-info my-2 rounded" key={index}>
                <Wrapper>
                    <Toast>
                        <ToastHeader>{teamMember.name}</ToastHeader>
                        <ToastBody>
                        <strong>Team Role:</strong><p>{teamMember.role}</p>
                        <strong>Email:</strong><p>{teamMember.email}</p>
                        <Button color="info" onClick={ () => props.editMember(props.teamMembers)}>edit</Button>
                        </ToastBody>
                    </Toast>
                </Wrapper>
            </div>
        ))}
        </>
    )
}

export default MemberList;