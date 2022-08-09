export const initialState = {
    message: []
};

const account = (state = initialState, action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            return {
                ...state,
                message: [
                    ...state.message,
                    action.payload
                ]
            };

        case 'LOAD_STORAGE_MESSAGES':
            return {
                ...state,
                message: action.payload,
            };

        default:
            return state
    };
};

export default account;