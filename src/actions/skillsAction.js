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

export const getSkillDetails = (category, skillId) => async (dispatch) => {
  const categoryDocRef = doc(db, 'skills', category);
  try {
    const categoryDocSnap = await getDocs(categoryDocRef);
    if (categoryDocSnap.exists()) {
      const skillsData = categoryDocSnap.data().skills;
      const skillDetails = skillsData.find(skill => skill.id === skillId);
      if (skillDetails) {
        dispatch({ type: 'GET_SKILL_DETAILS', payload: skillDetails });
      } else {
        // Handle if skill not found
        console.log("Skill not found")
      }
    } else {
      // Handle if category not found
      console.log("Category not found")
    }
  } catch (error) {
    // Handle error
    console.error('Error getting skill details:', error);
  }
};
