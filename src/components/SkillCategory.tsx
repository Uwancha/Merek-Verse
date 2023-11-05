import React from 'react';
import {Card} from '../interfaces/Card';
import SkillsSection from './SkillsSection';

import "../styles/skills-category.css";

interface Props {
    title: string;
    cards: Card[];
}

const SkillsCategory = ({title, cards}: Props) => {

    return (
        <article className="skill-category">
        <h3>{title}</h3>
        <SkillsSection cards={cards}/>
        </article>
    );

};

export default SkillsCategory;

