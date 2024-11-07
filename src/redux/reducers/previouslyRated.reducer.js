const initialState = {
    previouslyRated: [],
};

const previouslyRated = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_RATED':
            return {
                ...state,
                previouslyRated: [...state.previouslyRated, action.payload],
            };
        case 'DELETE_RATED':
            return {
                ...state,
                previouslyRated: state.previouslyRated.filter(artist => artist.id !== action.payload.artist_id)
            };
        case 'ADD_ARTIST_BACK':
            return {
                ...state,
                previouslyRated: state.previouslyRated.filter(artist => artist.id !== action.payload.id)
            };
        default:
            return state;
    }
};


export default previouslyRated;