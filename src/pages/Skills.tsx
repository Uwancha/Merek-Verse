import React, { useEffect } from "react";
import "../styles/skills.css";
import SkillsCategory from "../components/SkillCategory";

import { useSelector, useDispatch } from 'react-redux';
import { getSkills } from "../actions/skillsAction"
import { Content } from "../interfaces/SkillsInterface";


const Skills: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSkills());
        }, [dispatch]);
        
    const skills: Content[] = useSelector((state) => state.skills);

    return (
        <div className="skills">
            {skills.map(skill => (
                <SkillsCategory title={skill.category} cards={skill.IT} />
            ))}
        </div>
    )
}

export default Skills;
