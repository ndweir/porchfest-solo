const startingState = {
    users: [],
};


const ratingReducer = (state = startingState, action) => {
    switch(action.type) {
        case 'ADD_RATING':
            return {
                ...state,
                users: action.payload
            };
        default:
            return state;
    }
};

export default ratingReducer;