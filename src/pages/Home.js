import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import EntryTable from '../components/EntryTable/EntryTable';
import { entries } from '../data/entries';

const Home = () => {
    return (
        <div id>
            <h1> HOME </h1>
            <h2>Content</h2>
            <div id="content">
                {/* <EntryTable entries={ entries } /> */}
            </div>
        </div>
    );
};

export default Home;