export const message = (data) => {
    return {
        type: 'SEND_MESSAGE',
        payload: data
    };
};

export const loadStorageMessages = (data) => {
    return {
        type: 'LOAD_STORAGE_MESSAGES',
        payload: data
    };
};


export const sendMessage = (msg, user, uid) => {
    return (dispatch) => {
        const data = {
            name: user, 
            text: msg, 
            id: uid
        };
        dispatch(message(data));
    }
}