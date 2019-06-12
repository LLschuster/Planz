const initialState = {
    projects:[
    {id:'1', title:'Berlin ist beste', content:'Yes'},
    {id:'2', title:'Brandenburg ist beste', content:'Yes'},
    {id:'3', title:'Frankfurt ist beste', content:'Yes'},
    ],
};

const projectReducer =  (state=initialState, action) =>
{
    return state;
};

export default projectReducer;