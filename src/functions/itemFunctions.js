
import { GetAttributes } from './mapCode';

export const OfferInputs = (code, setValues, values) => {
    let lstAttributes = GetAttributes(code)
    let inputSec = [];
    lstAttributes.forEach((item, index) => {
        inputSec.push(<p
            style={{
                borderRadius: 4,
                height: 30,
                width: 300,
                left: 250
            }}
            key={index}>{item + `: `} <input
                style={{
                    fontSize: 16,
                    fontFamily: 'Source Code Pro, monospace',
                    borderRadius: 4,
                    height: 22,
                    width: 150,
                    backgroundColor: "#DEDEDE",
                    left: 250
                }}
                onChange={
                    (evt) => {
                        let lstTemp = values;
                        lstTemp[index] = evt.target.value
                        setValues({
                            lstValues: lstTemp
                        });
                    }
                }></input></p>)
    });
    // setInputs(inputSec);
    return (inputSec);
}

export const GetValuesStr = (values) => {
    let lstValues = values
    let numEle = lstValues.length
    let strValues = `(`;
    lstValues.forEach((ele, index) => {
        if (index < (numEle - 1)) {
            strValues += (ele + `, `)
        } else (
            strValues += ele
        )
    });
    strValues += `)`
    return (strValues);
}