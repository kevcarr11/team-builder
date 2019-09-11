  
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function Home() {

    return (
        <div>
            <h1 className="text-info">Welcome to the Members list!</h1>
            <h3 className="text-info">Please feel free to join!</h3>
            <Link to={`/member-list`}>
            <Button className="button" color="info">Members</Button >
            </Link>
            <Link to={`/add-member`}>
            <Button className="button" color="info">Join</Button >
            </Link>
        </div>
    )
}

export default Home;