import React from 'react';
import {Card} from '../interfaces/Card';
import {Link} from 'react-router-dom';

import "../styles/skills-card.css";

const SkillCard = ({name, description, link}: Card) => {

    return (
        <div className="card">
            <h4>{name}</h4>
            <p>{description}</p>
            <Link to={link} className='link'>View Details</Link>
        </div>
    );
};

export default SkillCard;