const initialState = {
    projects:[
    {id:'1', title:'Berlin ist beste', content:'Yes'},
    {id:'2', title:'Brandenburg ist beste', content:'Yes'},
    {id:'3', title:'Frankfurt ist beste', content:'Yes'},
    ],
};

const projectReducer =  (state=initialState, action) =>
{
    switch(action.type)
    {
        case 'CREATE_PROJECT':
            console.log('project created', action.project)
            return state;
        case 'CREATE_PROJECT':
            console.log('project created Error', action.error)
            return state;
        default: 
            return state;
    }
};

export default projectReducer;