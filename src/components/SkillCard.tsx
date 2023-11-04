import React from 'react';
import {Card} from '../interfaces/Card';
import {Link} from 'react-router-dom';

const SkillCard = ({title, description, link}: Card) => {

    return (
        <div className="card">
            <h4>{title}</h4>
            <p>{description}</p>
            <Link to={link}>View Details</Link>
        </div>
    );
};

export default SkillCard;