import { db } from "../firestore";
import { collection, getDocs } from "@firebase/firestore";

export const getSkills = () => async dispatch => {
    const skillsRef = collection(db, 'skills');
    const skillsSnapshot = await getDocs(skillsRef);

    const skills = [];

    skillsSnapshot.forEach((doc) => {
      skills.push({
        name: doc.name, 
        ...doc.data()
      });
    });

    dispatch({
        type: 'GET_SKILLS',
        payload: skills
    } );
}

export const getSkillDetails = (category, skillId) => async dispatch => {
  try {
    const skillsRef = collection(db, 'skills');
    const skillsSnapshot = await getDocs(skillsRef);
  

    let specificSkill = null;

    skillsSnapshot.forEach(categoryDoc => {
      const skills = categoryDoc.data().IT || [];
      const foundSkill = skills.find(skill => skill.id === skillId);
      

      if (foundSkill && categoryDoc.id === category) {
        specificSkill = foundSkill;
      }
    });

    if (specificSkill) {
      dispatch({ type: 'GET_SKILL_DETAILS', payload: specificSkill });
    } else {
      console.log("Skill not found");
    }
  } catch (error) {
    console.error('Error getting skill details:', error);
  }
};









