export const getBlogPosts = () => async dispatch => {
    const postsRef = collection(db, 'posts');
    const postsSnapshot = await getDocs(postsRef);
    
    dispatch({
        type: 'GET_POSTS',
        payload: postsSnapshot
    });
}