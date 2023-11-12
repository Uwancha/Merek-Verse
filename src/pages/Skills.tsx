import React, { useEffect } from "react";
import "../styles/skills.css";
import SkillsCategory from "../components/SkillCategory";

import { useSelector, useDispatch } from 'react-redux';
import { getSkills } from "../actions/skillsAction"
import { Content } from "../interfaces/SkillsInterface";
import { Card } from "../interfaces/Card";
import { Loading } from "../components/Loading";
import Nav from "../components/Header";
import Footer from "../components/Footer";


const Skills: React.FC = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getSkills());
        }, [dispatch]);
        
    const skills: Content[] = useSelector((state: Content[]) => state.skills);

    console.log(skills)

    return (
        <>
        <Nav />
        <div className="skills">
            {skills.skillsList.length ?
             (<div className="skills-container">{skills.skillsList.map((skill: { category: string; IT: Card[]; }) => (
                <SkillsCategory title={skill.category} cards={skill.IT} category={skill.category}/>
            ))}</div>) : (<Loading />) }
        </div>
        <Footer />
        </>
    )
}

export default Skills;
