
import { Instantiator } from './ dataTreatment';

export const handleOnChange = (evt, allData, Item, Decorator, styles, screenSize) => {
    let search = evt.target.value.toLowerCase()
    let lstFiltered = [];
    allData.forEach((item) => {
        let title = item.body.title.toLowerCase();
        if (title.startsWith(search)) {
            lstFiltered.push(item)
        }
    })
    // console.log(lstFiltered);
    // setData(lstFiltered);
    let lstObjects = Instantiator(lstFiltered, Item, Decorator, styles, screenSize);
    return (lstObjects);
}
