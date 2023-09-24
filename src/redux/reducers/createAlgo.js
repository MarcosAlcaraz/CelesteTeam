
export const CurrentAlgo = (state = ``,
    action) => {
    switch (action.type) {
        case 'CREATEALGO':
            return action.payload;
        default:
            return state;
    }
}

export const CurrentTitle = (state = ``,
    action) => {
    switch (action.type) {
        case 'CREATETITLE':
            return action.payload;
        default:
            return state;
    }
}