
export const CreateAlgo = (comp) => {
    return {
        type: 'CREATEALGO',
        payload: comp
    }
}

export const CreateTitle = (comp) => {
    return {
        type: 'CREATETITLE',
        payload: comp
    }
}

// Auth

export const UserId = (comp) => {
    return {
        type: 'USERID',
        payload: comp
    }
}

export const StatusAuth = (comp) => {
    return {
        type: 'STATUSAUTH',
        payload: comp
    }
}

export const ShowAuth = (comp) => {
    return {
        type: 'SHOWAUTH',
        payload: comp
    }
}

//

export const LstTopics = (comp) => {
    return {
        type: 'LSTTOPICS',
        payload: comp
    }
}

export const CreatorWindow = (comp) => {
    return {
        type: 'CREATORWINDOW',
        payload: comp
    }
}

export const FullScreen = (comp) => {
    return {
        type: 'FULLSCREEN',
        payload: comp
    }
}

export const BodyScroll = (comp) => {
    return {
        type: 'BODYSCROLL',
        payload: comp
    }
}

export const SourceCode = (comp) => {
    return {
        type: 'SOURCECODE',
        payload: comp
    }
}