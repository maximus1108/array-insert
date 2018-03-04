Array.prototype.insert = function (item, evaluator) {

    if(item === undefined || item === null)
        throw new Error (`You cannot insert a value of '${item}'`)

    const arr = this;

    const insertItem = (index) => {
        arr.splice(index, 0, item);
        return arr;
    }

    let minIndex = 0,
        maxIndex = arr.length - 1,
        currentIndex,        
        currentValue,
        adjacentIndex,
        adjacentValue;

    if(item >= arr[maxIndex]) {
        arr.push(item);
        return arr;
    }

    if(item <= arr[0]){
        arr.unshift(item);
        return arr;
    }

    while(minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);

        currentValue = arr[currentIndex];

        if(item === currentValue)
            return insertItem(currentIndex);

        else if (item < currentValue) {

            adjacentIndex = currentIndex - 1
            adjacentValue = arr[adjacentIndex];

            if(item >= adjacentValue)
                return insertItem(adjacentIndex);
            else
              maxIndex = adjacentIndex;

        }
        else if (item > currentValue) {
            
            adjacentIndex = currentIndex + 1;
            adjacentValue = arr[adjacentIndex];

            if(item <= adjacentValue)
                return insertItem(adjacentIndex);
            else           
                minIndex = adjacentIndex;

        }
    }

    return -1;
}