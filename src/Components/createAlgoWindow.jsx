
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CreateAlgo, CreateTitle } from "../redux/actions";

const CreateAlgoWindow = () => {

    const dispatch = useDispatch();
    const creatorWindow = useSelector(state => state.creatorWindow)

    let placeHolder = `function Name(prop1, prop2, ...) \n {\n  return (prop1 + prop2) \n }`

    const handleOnChangeTitle = (evt) => {
        dispatch(CreateTitle(evt.target.value))
    }

    const handleOnchangePunk = (evt) => {
        dispatch(CreateAlgo(evt.target.value));
    }

    return (
        <div>
            <p>Title: <input id="my-input"
            defaultValue={creatorWindow.defaultTitle}
            onChange={handleOnChangeTitle}
            style={{
                height: 28,
                width: 300,
                fontSize: 15,
                backgroundColor: "white",
                borderColor: "#DEDEDE",
                borderRadius: 8,
            }}
            ></input></p>
            <textarea
            defaultValue={creatorWindow.defaultCode}
            // defaultValue=''
            onChange={handleOnchangePunk}
            placeholder = {placeHolder}
            style={{
                width: 1800,
                height: 800,
                fontSize: 18,
                backgroundColor: "white",
                borderColor: "#DEDEDE",
                borderRadius: 8,

            }}
            ></textarea>
        </div>
    )
}

export default CreateAlgoWindow;