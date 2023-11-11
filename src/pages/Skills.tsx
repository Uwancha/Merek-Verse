import React, { useEffect } from "react";
import "../styles/skills.css";
import SkillsCategory from "../components/SkillCategory";

import { useSelector, useDispatch } from 'react-redux';
import { getSkills } from "../actions/skillsAction"
import { Content } from "../interfaces/SkillsInterface";
import { Card } from "../interfaces/Card";
import { Loading } from "../components/Loading";


const Skills: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSkills());
        }, [dispatch]);
        
    const skills: Content[] = useSelector((state: Content[]) => state.skills);

    return (
        <div className="skills">
            {skills.length ?
             (skills.skillsList.map((skill: { category: string; IT: Card[]; }) => (
                <SkillsCategory title={skill.category} cards={skill.IT} category={skill.category}/>
            ))) : (<Loading />) }
        </div>
    )
}

export default Skills;
