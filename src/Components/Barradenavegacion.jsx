import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Decorator1 from '../demos/Decorators';
import { Instantiator, SortingItems, mapLstRecord } from '../functions/ dataTreatment';
import { handleOnChange } from '../functions/dataFilters';
import { divItem } from '../styles/ItemStyle';
import Item from './Item';
const ItemList = () => {
    // Hook record of all data
    const [allData, setRegistry] = useState([]);
    // Hook getData filtered
    // const [lstFiltered, setData] = useState([]);
    // Hook filtered data
    const [objects, setObjects] = useState([]);
    // Redux
    const screenSize = useSelector(state => state.screenSize);
    // console.log(currentUid + " global")
    const dispatch = useDispatch();
 
    // Trae a los algoritmos
    const getAlgos = (currentUid) => {
        const lstRef = 0;
        lstRef.on("value", (snapshot) => {
            const allAlgos = snapshot.val();
            let algoList = [];
            for (let id in allAlgos) {
                let currentAlgo = allAlgos[id]
                let lstResults = mapLstRecord(currentAlgo.lstRecord, currentUid);
                // Insert results
                currentAlgo['id'] = id;
                currentAlgo['score'] = lstResults[0];
                currentAlgo['prefRecord'] = lstResults[1];
                currentAlgo['UpDown'] = lstResults[2];
                algoList.push(currentAlgo)
            }
            let sortedList = SortingItems(algoList)
            let top100 = sortedList.slice(0, 100);
            setRegistry(sortedList)
            let lstObjects = Instantiator(top100, Item, Decorator1, divItem, screenSize);
            setObjects(lstObjects);
        });
    }

    return (
        <nav classNameNameName="navbar navbar-expand-lg bg-body-tertiary">
        <div classNameName="container-fluid">
        <a classNameName="navbar-brand" href="#">Algoritmos</a>
            <form classNameName="d-flex" role="search">
            <input classNameName="form-control me-2" type="search" placeholder="Search" aria-label="Search"onChange={(event) => 
            {
                let lstObjects = handleOnChange(event, allData, Item, Decorator1, divItem, screenSize);
                setObjects(lstObjects);
            }}></input>
            <button classNameName="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>

    </nav>
    )
}

export default ItemList;