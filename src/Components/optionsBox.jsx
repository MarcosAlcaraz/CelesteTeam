
import { useDispatch, useSelector } from "react-redux";
import { CreatorWindow, FullScreen, SourceCode } from "../redux/actions";

const OptionBox = (props) => {
    const dispatch = useDispatch();
    const userId = useSelector(state=>state.userId)

    const itemOption = {
        height: 20,
        marginLeft: 10,
        color: 'black',
        borderColor: 'black',
        borderTop: 5
        
    }
    return (
    <div
    style={{
        position: 'absolute',
        marginTop: 20,
        marginLeft: 230,
        backgroundColor: 'gray',
        width: 150,
        borderRadius: 4,
        backgroundColor: 'white',
    }}
    >
        <div>
            <p
            style={itemOption}
            onClick={()=>{
                dispatch(FullScreen(
                {
                    show: true,
                    itemData: props.itemData
                }
            ))}}
            >Full Screen</p>
            <p
            style={itemOption}
            onClick={()=>{
                console.log('click')
                dispatch(SourceCode(
                    {
                        show: true,
                        code: props.itemData.body.code
                    }
                ))}}
            >Source code</p>
            {props.owner === userId ?
                <div
                style={{color: 'black'}}
                >
                    <p 
                    onClick={()=>{
                        dispatch(CreatorWindow({
                            show: true,
                            defaultTitle: props.itemData.body.title,
                            defaultCode: props.itemData.body.code
                        }))
                    }}
                    style={itemOption}>Edit</p>
                    <p style={itemOption}>Delete</p>
                </div>
            : null
            }
            {/* <p
            onClick={()=>{
                console.log('owner: ' + props.owner)
                console.log('userId: ' + userId)
            }}
            >Prueba</p> */}

        </div>
    </div>
    )
}

export default OptionBox;