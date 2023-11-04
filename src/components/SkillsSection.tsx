import React from 'react';
import {Card} from '../interfaces/Card';
import SkillCard from './SkillCard';

interface Props {
    cards: Card[];
}

const SkillsSection = ({cards}: Props) => {

    return (
        <section className="skills-section">
            {cards.map(card => (
            <SkillCard key={card.name} {...card} />
            ))}
        </section>
    );

};

export default SkillsSection;