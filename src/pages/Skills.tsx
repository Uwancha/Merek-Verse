import React from "react";
import "../styles/skills.css";


import { db } from "../store";
import { collection, getDocs } from "@firebase/firestore";
import SkillsCategory from "../components/SkillCategory";


const querySnapshot = await getDocs(collection(db, 'skills'));

const Skills: React.FC = () => {
    
    const skills = querySnapshot.docs.map(doc => doc.data());

    console.log(skills)

    return (
        <div className="skills">
            {skills.map(skill => (
                <SkillsCategory title={skill.category} cards={skill.IT} />
            ))}
        </div>
    )
}

export default Skills;