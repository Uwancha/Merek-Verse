import { db } from '../firebase';

export const getSkills = () => async dispatch => {
    const skillsRef = collection(db, 'skills');
    const skillsSnapshot = await getDocs(skillsRef);

    dispatch({
        type: 'GET_SKILLS',
        payload: skillsSnapshot
    } );
}