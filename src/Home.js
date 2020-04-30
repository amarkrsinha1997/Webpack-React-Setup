import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            This is home page go to <Link to="/profile">Profile Page.</Link>
        </div>
    );
};


export default Home;
