const initialState = {
    skillsList: [],
    skillDetails: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'GET_SKILLS':
            return { ...state, skillsList: action.payload };
        case 'GET_SKILL_DETAILS':
            return { ...state, skillDetails: action.payload };
        default:
            return state;
    }
}