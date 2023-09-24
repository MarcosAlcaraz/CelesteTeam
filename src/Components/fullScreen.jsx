
import { useDispatch, useSelector } from "react-redux";
import { FullScreen } from "../redux/actions";
import Item from '../Components/Item';
import Decorator1 from '../demos/Decorators';

const FullScreenCode = () => {
    const dispatch = useDispatch();
    const fullScreen = useSelector(state => state.fullScreen);

    const divItem = {
        backgroundColor: "#474455",
        color: "white",
        width: 600,
        height: 600,
        borderRadius: 10,
        fontFamily: 'Source Code Pro, monospace',
        fontSize: 18,
        marginLeft: 10,
        marginBottom: 10,
    };

    return (
        <div
        style={{
            position: 'absolute',
            height: 1000,
            width: 1000,
            backgroundColor: 'gray',
            top: 0,
        }}
    >
        <button onClick={()=>{
            dispatch(FullScreen({show: false }))
        }} >Go Back</button>
        <Item item={fullScreen.itemData} styles={divItem} Deco={Decorator1}/>
    </div>
    )

}

export default FullScreenCode;