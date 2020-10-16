export function findById(someArray, id) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        // does this item match
        if (item.id === id) {
            return item;
        }
    }
}