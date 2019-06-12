export const projectCreate = (project) =>{
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        firestore.collection('Projects').add(
            {
                ...project,
                authFirstName: 'Michael',
                authLastName: 'Jordan',
                authId: '001',
                createdAt: new Date()
            }
        ).then(() => {
            dispatch( {
                type: 'CREATE_PROJECT',
                project: project,
            })
        }).catch((err)=>{
            dispatch( {
                type: 'CREATE_PROJECT_ERROR',
                error: err,
            })
        })
    
    }
}