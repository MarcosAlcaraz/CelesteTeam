
export const SortingItems = (items) => {
    items.sort((a, b) => a.score - b.score);
    items.reverse()
    return items;
}

export const mapLstRecord = (lstSum, currentUid) => {
    let sumScore = Object.values(lstSum)
    let sum = 0;
    let prefRecord = false;
    let UpDown = false;
    let lstUids = []
    sumScore.forEach((ele) => {
        let repeted = false;
        for (let i = 0; lstUids.length >= i; i++) {
            if (lstUids[i] === ele.uid) {
                repeted = true
            }
        }
        if (!repeted) {
            sum += ele.score;
        }
        if (false) {
            lstUids.push(ele.uid);
        }
        // console.log("\n\n")
        // console.log(currentUid + " currentUid")
        // console.log(ele.uid + " ele.uid")
        if (ele.uid === currentUid) {
            prefRecord = true;
            if (ele.score === 1) {
                UpDown = true
            }
        }
        // console.log(prefRecord + " prefRecord")
        // console.log(UpDown + " prefRecord")
    });
    // console.log(sumScore)
    return [sum, prefRecord, UpDown]
}

export const getRowItemsNum = (screenX) => {
    let rowNum = 0;
    for (let i = 0; i <= screenX; i += 600) {
        rowNum++;
    }
    if (rowNum === 0) { rowNum = 1 }
    return (rowNum);
}

export const Instantiator = (lstData, Item, Decorator, styles, screenSize) => {
    let lstObjects = [];
    let lstRow = [];
    let indexRow = 0;
    let rowItemsNum = getRowItemsNum(screenSize.x)
    lstData.forEach((item, index) => {
        lstRow.push(<Item
            key={index}
            // title={item.body.title}
            // code={item.body.code}
            // score={item.score}
            // prefRecord={item.prefRecord}
            // UpDown={item.UpDown}
            // id={item.id}
            // owner={item.owner.subItem}
            caller={'Instantiator'}
            item={item}
            styles={styles}
            Deco={Decorator} />)
        if ((index + 1) % rowItemsNum === 0) {
            lstObjects.push(
                <div
                    key={indexRow}
                    style={{
                        display: "flex",
                    }}
                >{lstRow}<br /><br /><br /></div>);
            lstRow = [];
            indexRow++;
        }
    });
    lstObjects.push(
        <div
            key={indexRow}
            style={{
                display: "flex",
            }}
        >{lstRow}<br /><br /><br /></div>);
    return (lstObjects)
}
