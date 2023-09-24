
import { combineReducers } from 'redux';
//
import { CurrentTitle } from './createAlgo';
import { CurrentAlgo } from './createAlgo';
import { UserId } from './authData';
import { LstTopic } from './dbReferences';
import { StatusAuth } from './authData';
import { ShowAuth } from './authData';
import { CreatorWindow } from './AppStates';
import { ScreenSize } from './AppStates';
import { FullScreen } from './AppStates';
import { BodyScroll } from './AppStates';
import { SourceCode } from './AppStates';

const allReducers = combineReducers({
    currentTitle: CurrentTitle,
    currentAlgo: CurrentAlgo,
    userId: UserId,
    lstTopic: LstTopic,
    statusAuth: StatusAuth,
    showAuth: ShowAuth,
    creatorWindow: CreatorWindow,
    screenSize: ScreenSize,
    fullScreen: FullScreen,
    bodyScroll: BodyScroll,
    sourceCode: SourceCode
})

export default allReducers;