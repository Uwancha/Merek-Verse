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