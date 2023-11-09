import React from 'react';
import {Card} from '../interfaces/Card';
import SkillsSection from './SkillsSection';

import "../styles/skills-category.css";

interface Props {
    title: string;
    cards: Card[];
    category: string
}

const SkillsCategory: React.FC<Props> = ({title, cards, category}: Props) => {

    return (
        <article className="skill-category">
        <h3>{title}</h3>
        <SkillsSection cards={cards} category={category} />
        </article>
    );

};

export default SkillsCategory;

