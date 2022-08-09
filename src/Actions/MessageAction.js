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
    const time = new Date().toLocaleTimeString().replace(/([\d]+:[\d]{2})(:[\d]{2})(.*)/, "$1$3");
    return (dispatch) => {
        const data = {
            name: user, 
            text: msg, 
            id: uid,
            time: time
        };
        dispatch(message(data));
    }
}