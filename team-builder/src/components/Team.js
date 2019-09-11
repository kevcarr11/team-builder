import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
import styled from 'styled-components';

function Team(props) {
    const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    `
    return (
        <>
        {props.teamMembers.map((teamMember, index) => (
            <div className="p-3 bg-info my-2 rounded" key={index}>
                <Wrapper>
                    <Toast>
                        <ToastHeader>{teamMember.name}</ToastHeader>
                        <ToastBody>
                        <strong>Team Role:</strong><p>{teamMember.role}</p>
                        <strong>Email:</strong><p>{teamMember.email}</p>
                        </ToastBody>
                    </Toast>
                </Wrapper>
            </div>
        ))}
        </>
    )
}

export default Team;