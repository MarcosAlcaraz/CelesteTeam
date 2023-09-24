
export const LstTopic = (state = ['A', 'B', 'C'],
    action) => {
    switch (action.type) {
        case 'LSTTOPICS':
            return action.payload;
        default:
            return state;
    }
}