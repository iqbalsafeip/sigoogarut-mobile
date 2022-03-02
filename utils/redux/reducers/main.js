const initialState = {
    test: 'Lorem Ipsum'
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case 'TEST' : return {
            ...state,
            test: action.payload
        }
        default : return state;
    }
}

export default mainReducer;