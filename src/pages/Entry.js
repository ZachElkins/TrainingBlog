import React from 'react';
import { useParams } from 'react-router-dom';
import { getEntry } from '../data/entries';
import '../App.scss';

const Entry = () => {
    const { entryId } = useParams();
    const entry = getEntry(entryId);
    
    return (
        <div class="page">
            <div class="header">
                <h1> ENTRY </h1>
            </div>
            <h2>{entry.date}</h2>
        </div>
    );
};

export default Entry;