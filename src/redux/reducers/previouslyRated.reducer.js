

const previouslyRated = (state = [], action) => {
    switch (action.type) {
        case 'ADD_RATED':
            return [...state, action.payload];
        default:
            return state;
    }
};


export default previouslyRated;