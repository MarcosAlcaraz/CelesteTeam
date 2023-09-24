
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// Icons
import UpActive from '../assets/UpActive.svg';
import UpInactive from '../assets/UpInactive.svg';
import DownInactive from '../assets/DownInactive.svg';
import DownActive from '../assets/DownActive.svg';
import ThreePoint from '../assets/threePoints.svg';
// Components
import OptionBox from './optionsBox';
// Database
import { SendPreference } from '../Database/writeDb';
// Functions
import { OfferInputs } from '../functions/itemFunctions';
import { GetValuesStr } from '../functions/itemFunctions';
import { GetPunkName } from "../functions/mapCode";
// Styles
import { divItem } from '../styles/ItemStyle';
import { divCentral } from '../styles/ItemStyle';
import { divInput } from '../styles/ItemStyle';
import { divOutput } from '../styles/ItemStyle';
import { divThreePts } from '../styles/ItemStyle';
// import { BodyScroll } from "../redux/actions";

const Item = (props) => {

    <style>@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@500&display=swap')</style>
    // Redux
    const dispatch = useDispatch();
    const userId = useSelector(state => state.userId);
    
    // Hook inputs
    const [inputs, setInputs] = useState([]);
    // Hook Values
    const [values, setValues] = useState({
        lstValues: [],
        strValues: ``
    });

    const [returnValue, setReturn] = useState('');
    const [output, setOutput] = useState(<div></div>)
    const [blockPref, setBlock] = useState(false);
    const [hasError, setError] = useState(false);
    const [showIconOptions, setIcon] = useState(false);
    const [showOptionBox, setOptionBox] = useState(false);

    useEffect(() => {
        let objInputs = OfferInputs(props.item.body.code, setValues, values.lstValues);
        setInputs(objInputs);
        }
    , [])

    // Internal return
    function Return (param) {
        setReturn(param)
    }

    const Stringify = () => {
        let algoName = GetPunkName(props.item.body.code) // getPunkName
        let strValues = GetValuesStr(values.lstValues)  // strValues
        let code = `${props.item.body.code} ${algoName} ${strValues}`;
        let error = false
        try {
            eval(code)
        } catch (err) {
            error = true;
            setOutput("Error has ocurred: \n" + err) //(<p>Error has ocurred:<br/> {err}</p>)          
        }
        setError(error)
    }

    const Core = (Decorator, results) => {
        if (!hasError) {
            let result = Decorator(results)
            setOutput(result)
        }
    }

    return (
    <div // Item div
    onClick={()=>{if (showOptionBox) {setOptionBox(false)}}}
        style={props.styles}>
        <div // Tactil div
        onMouseOver={()=>{setIcon(true)}}
        onMouseLeave={()=>{setIcon(false)}}
        >
        {showOptionBox ?
            <OptionBox itemData={props.item} owner={props.item.owner.subItem} setHook={setOptionBox} />
            : null
        }
        <div // ItemHeader Div
            style={{display: 'flex'}}
        >
        <h4 style={{marginLeft: 20, width: 340}}>{props.item.body.title}</h4>
        {showIconOptions && props.caller === 'Instantiator' ? 
            <img 
                onClick={()=>{setOptionBox(true)}}
                style={divThreePts} 
                src={ThreePoint}/>
             : null}
        </div>
        <div // Container Score & Central
            style={{display: 'flex'}}>
        <div // Score div
            style={{marginLeft: 16}}>
            {props.item.prefRecord || blockPref ? 
                (
                    props.item.UpDown ?
                    <img
                    src={UpActive}/>
                    : <img src={UpInactive}/>
                )
            : <img src={UpInactive}
            onClick={() => {
                SendPreference(props.item.id, userId, 1);
                setBlock(true);
            }}
            />}
            <h2>{props.item.score}</h2>
            {props.item.prefRecord || blockPref ? 
                (props.item.UpDown ?
                    <img src={DownInactive}/> :
                    <img src={DownActive}/>
                )
                : <img src={DownInactive}
                onClick={() => {
                    SendPreference(props.item.id, userId, -1);
                    setBlock(true);
                }}
                /> 
            }
        </div>{/* Score div */}
        <div  // Central div
        style={divCentral}
        >
        <div // input secction div
        style={divInput}
        >{inputs}
        </div> {/* input secction div */}
            <div // results div
                style={{
                    marginLeft: 40,
                }}
            >
            <button onMouseDown={Stringify} 
            onMouseUp={() => {
                Core(props.Deco, returnValue);
            }}
            >Run</button>   
            </div> {/* results div */}
        </div > {/* Central div */}
        </div> {/* Container Score & Central */}
        </div>
        <div //output
        style={divOutput}
        >{output}</div> {/* output */}
        {/* <div // Pruebas
        >
            <h2>Pruebas</h2>
            <img style={{width: 50, height: 50}} src='https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg'></img>
        </div>  */}
        {/* Pruebas */}

        </div>)
}

export default Item;