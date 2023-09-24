
import { useDispatch, useSelector } from 'react-redux';
import Header from './Components/Header';
import CreateAlgoWindow from './Components/createAlgoWindow';
import FullScreen from './Components/fullScreen';
import SourceCode from './Components/sourceCode';
//
//import { WindowAuth } from './Database/windowAuth';
//
import 'bootstrap/dist/css/bootstrap.min.css';
import { UploadAlgo } from './Database/writeDb';
import { GetAttributes, GetPunkName } from './functions/mapCode';
import { CreatorWindow, ShowAuth } from './redux/actions';
function App() {

  // Redux
  const dispatch = useDispatch();
  const algoTitle = useSelector(state => state.currentTitle);
  const algoCode = useSelector(state => state.currentAlgo);
  const lstTopic = useSelector(state => state.lstTopic);
  const creatorWindow = useSelector(state => state.creatorWindow);
  const showFullScreen = useSelector(state => state.fullScreen);
  const bodyScroll = useSelector(state => state.bodyScroll);
  const screenSize = useSelector(state => state.screenSize);
  // Auth 
  const userId = useSelector(state => state.userId);
  const statusAuth = useSelector(state => state.statusAuth);
  const showAuth = useSelector(state => state.showAuth);
  const sourceCode = useSelector(state => state.sourceCode);

  const handleFinish = () => {
    let newAlgo = algoCode.replace(`return`, `Return`) //.replace(`return`, `Return`)
    let punkName = GetPunkName(algoCode);
    let attributes = GetAttributes(algoCode);
    // 
    let numAttributes = attributes.length
    if (algoTitle == `` || algoCode == ``) {
      alert("Complete the required fields")
    } else if (!!punkName !== true || numAttributes === 0) {
      alert("It seems that you have omitted something, remember that all functions must have at least one parameter")
    } else {
      //
      if (statusAuth) {
        UploadAlgo(userId, algoTitle, newAlgo, lstTopic);
        GoBack();
      } else {
        ShowAuthWindow()
      }
    }
  }

  function ShowAuthWindow() {
    dispatch(ShowAuth(!showAuth))
  }

  function GoBack() {
    dispatch(CreatorWindow({ show: 'goCreate' }))
  }
  return (
    <div
    // style={{
    //   overflow: 'scroll',
    //   height: screenSize.y,
    //   width: 1000,
    //   // backgroundColor: 'red'
    // }}
    >
      <Header CallFinish={handleFinish} />

      {creatorWindow.show === 'goCreate' ?
        null
        : <CreateAlgoWindow />
      }
      {showFullScreen.show ? <FullScreen /> : null}
      {sourceCode.show ? <SourceCode code={sourceCode.code} /> : null}
      {/*showAuth ? <WindowAuth ShowAuth={ShowAuthWindow} /> : null*/}
    </div>
  )
}

export default App;
