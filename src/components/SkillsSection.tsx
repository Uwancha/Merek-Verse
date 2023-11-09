import React from 'react';
import {Card} from '../interfaces/Card';
import SkillCard from './SkillCard';

import "../styles/skills-section.css";

interface Props {
    cards: Card[];
    category: string
}

const SkillsSection: React.FC<Props>= ({cards, category}: Props) => {

    return (
        <section className="skills-section">
            {cards.map(card => (
            <SkillCard key={card.name} {...card} category={category} />
            ))}
        </section>
    );

};

export default SkillsSection;