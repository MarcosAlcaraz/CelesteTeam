import { useDispatch, useSelector } from "react-redux";
import { UploadAlgo } from "../Database/writeDb";
import { CreatorWindow } from "../redux/actions";
import ItemList from './itemList';
const Header = (props) => {

    const dispatch = useDispatch();
    const title = useSelector(state => state.CreateTitle);
    const algo = useSelector(state => state.CreateAlgo);
    const statusAuth = useSelector(state => state.statusAuth);
    // const showAuth = useSelector(state => state.showAuth);
    const creatorWindow = useSelector(state => state.creatorWindow);
    return (
        <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
        {creatorWindow.show === 'finish' ? <button className="btn btn-primary" type="submit"
                onClick={() => {
                    dispatch(CreatorWindow({show: 'goCreate', defaultTitle: '', defaultCode: ''}))
                }}
            >Go Back
        </button> : <ItemList></ItemList>}
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button className="btn btn-success" type="submit"
                onClick={() => {
                    if (creatorWindow.show === 'goCreate') {
                        dispatch(CreatorWindow({show: 'finish'}))
                        // setCreator(true)
                    } else {
                        props.CallFinish();
                    }
                }
                }
            > {creatorWindow.show === 'finish' ? "Finish" : "Create Algo"}
            </button>
            <button className="btn btn-primary" type="submit"
                onClick={() => {
                        
                        //dispatch(ShowAuth(true))
                        UploadAlgo()
                        //console.log(String(title))
                        //console.log(algo)
                    }}
            >
                {statusAuth ? "Sign Out" : "Sign In"}
            </button>
            </div>
        </div>
      </nav>
    )
}

export default Header;