Array.prototype.insert = function (
    item,
    evaluator = (currentValue, insertValue) => currentValue < insertValue
) {

   if(item === undefined || item === null)
        throw new Error (`You cannot insert a value of '${item}'`);
    
    if(typeof evaluator !== undefined && typeof evaluator !== 'function') {
        throw new TypeError (`'${evaluator}' is not a function. Ensure the evaluating callback is a function or undefined`);
    }

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

    if(evaluator(arr[maxIndex], item)) {
        arr.push(item);
        return arr;
    }

    if(evaluator(item, arr[minIndex])){
        arr.unshift(item);
        return arr;
    }

    while(minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);

        currentValue = arr[currentIndex];

        if(item === currentValue)
            return insertItem(currentIndex);

        else if (evaluator(item, currentValue)) {

            adjacentIndex = currentIndex - 1
            adjacentValue = arr[adjacentIndex];

            if(evaluator(adjacentValue, item))
                return insertItem(adjacentIndex);
            else
              maxIndex = adjacentIndex;

        }
        else {
            
            adjacentIndex = currentIndex + 1;
            adjacentValue = arr[adjacentIndex];

            if(evaluator(item, adjacentValue))
                return insertItem(adjacentIndex);
            else           
                minIndex = adjacentIndex;

        }
    }

    throw new Error(`unable to insert value '${item}' into '${arr}'. 
                    Ensure the array is sorted using the same method specified in callback passed, if applicable`
                );
}