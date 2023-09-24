
export const UserId = (state = ``,
    action) => {
    switch (action.type) {
        case 'USERID':
            return action.payload;
        default:
            return state;
    }
}

export const StatusAuth = (state = ``,
    action) => {
    switch (action.type) {
        case 'STATUSAUTH':
            return action.payload;
        default:
            return state;
    }
}

export const ShowAuth = (state = ``,
    action) => {
    switch (action.type) {
        case 'SHOWAUTH':
            return action.payload;
        default:
            return state;
    }
}

