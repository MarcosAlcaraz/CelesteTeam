
export const CreatorWindow = (state = {
    show: 'goCreate',
    defaultTitle: '',
    defaultCode: ''
},
    action) => {
    switch (action.type) {
        case 'CREATORWINDOW':
            return action.payload;
        default:
            return state;
    }
}

export const FullScreen = (state = {
    show: false,
    itemData: {}
},
    action) => {
    switch (action.type) {
        case 'FULLSCREEN':
            return action.payload;
        default:
            return state;
    }
}

export const SourceCode = (state = {
    show: false,
    code: ''
},
    action) => {
    switch (action.type) {
        case 'SOURCECODE':
            return action.payload;
        default:
            return state;
    }
}

export const BodyScroll = (state = 'scroll',
    action) => {
    switch (action.type) {
        case 'BODYSCROLL':
            return action.payload;
        default:
            return state;
    }
}


export const ScreenSize = (state =
    {
        x: document.documentElement.clientWidth,
        y: document.documentElement.clientHeight
    },
    action) => {
    switch (action.type) {
        case 'SCREENSIZE':
            return action.payload;
        default:
            return state;
    }
}

