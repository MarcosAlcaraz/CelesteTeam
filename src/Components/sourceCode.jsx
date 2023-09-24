
import { useDispatch } from "react-redux";
import { SourceCode } from "../redux/actions";

const SourceCodeScreen = (props) => {

    const dispatch = useDispatch();

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

            <button
            onClick={()=>{
                dispatch(SourceCode({show: false}))
            }}
            >Go Back</button>
            <textarea
            style={{
                marginLeft: 20,
                marginTop: 20,
                height: 960,
                width: 960,
                fontSize: 17,
                backgroundColor: 'gray',
                color: "black"
            }}
            defaultValue={props.code}
            disabled="disabled"
            ></textarea>
        </div>
    )
}

export default SourceCodeScreen;