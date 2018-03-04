// If the array prototype does not have the insert method
if(!Array.prototype.insert) {
    // and the insert method to the prototype
    Array.prototype.insert = function (
        // item to be inserted
        item,
        // callback used as criteria for how the element should be inserted
        // by default the criteria evaluates if the inserted value is bigger than the
        // current element being looked up in the array
        // this results in the array being sorted in ascending order
        evaluator = (currentValue, insertValue) => currentValue < insertValue
    ) {
        
        // if the item is undefined or null it cannot be inserted
        if(item === undefined || item === null)
            throw new Error (`You cannot insert a value of '${item}'`);
        
        // the callback must be a function
        if(typeof evaluator !== 'function') {
            throw new TypeError (`'${evaluator}' is not a function. Ensure the evaluating callback is a function or undefined`);
        }

        // cache reference to the array 
        const arr = this;

        const insertItem = (index) => {
            // insert the item at the index provided
            arr.splice(index, 0, item);
            // then job done - return this array
            return arr;
        }

        let minIndex = 0, // first index in array
            maxIndex = arr.length - 1, // last index in the array
            currentIndex, // curent index being evaluated
            currentValue, // value of the current index
            adjacentIndex, // index adjacent to the currentIndex
            adjacentValue,// value of the adjacent index
            evaluation, // boolean result of evaluator;
            evaluationInverted;  // boolean result of the evaulator when values ran the other way around

        // if item should be after the last index
        if(evaluator(arr[maxIndex], item)) {
            // add it to the end
            arr.push(item);
            // job done - return this array
            return arr;
        }

        // if item should be the first index
        if(evaluator(item, arr[minIndex])){
            // add it at the beginning
            arr.unshift(item);
            // return this array
            return arr;
        }
        
        //while the min pointer is less than or equal to the max pointer
        while(minIndex <= maxIndex) {
            //set the current index to half way between the min and max pointers
            currentIndex = Math.floor((minIndex + maxIndex) / 2);

            //cache the value at the current index
            currentValue = arr[currentIndex];

            //evaluate the item to be inserted against the current value using the evaluator function
            evaluation = evaluator(item, currentValue);

            // evaluate the result with the values the other way around
            evaluationInverted = evaluator(currentValue, item);

            //if the item to be inserted is the same as current value
            // or if both evaulations are false, we can assume they're equal
            if(item === currentValue || (!evaluation && !evaluationInverted))
                //insert the item at the current index
                return insertItem(currentIndex);
            // if the evaluation is true
            else if (evaluation) {
                // calculatte the adjectIndex/preceding index
                adjacentIndex = currentIndex - 1
                // get its value
                adjacentValue = arr[adjacentIndex];
                //if the item evaluates true against the preceding value
                if(evaluator(adjacentValue, item))
                    // insert it at the current index
                    return insertItem(currentIndex);
                else
                    // otherwise set the max point to the index preceding the current
                    maxIndex = adjacentIndex;
            }
            // otherwise if evaluated to false
            else {
                
                //the adjactent index should be the next index
                adjacentIndex = currentIndex + 1;
                // get the value of the adjecnt index
                adjacentValue = arr[adjacentIndex];

                // if the evaulator evaluates true against the next index
                // and with item switched to the first arg
                if(evaluator(item, adjacentValue))
                    // insert the value at the next index
                    return insertItem(adjacentIndex);
                else           
                    //otherwise set min pointer to the next index
                    minIndex = adjacentIndex;

            }
        }

        throw new Error(
            `unable to insert value '${item}' into '${arr}'. 
            Ensure the array is sorted using the same method specified in callback passed, if applicable`
        );
    }
}