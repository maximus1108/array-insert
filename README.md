# Array.prototype.insert
This module adds an 'insert' method to the Array object's prototype, which can be used to insert an element into an array at an index calculated by a sorting criteria.

The method uses a binary lookup algorithm to insert the element at the correct index to maintain the appropriate ordering.

The aim of this is to implement a method that is more performant than the native options for inserting and sorting an array. Performance comparisons can be found here:
https://jsperf.com/array-prototype-insert/

The method will mutate the original array.

## Installation

1. Install the package using your favourite package manager.

     `npm install --save array.prototype.insert`

2. Import the package at the top of entry file of your app or the file you want to use it in.

    ```require('array.prototype.insert');```

## Usage

### Assumptions
It is assumed that the array being worked on is empty, or sorted by some criteria and the callback used for comparison is in keeping with this (otherwise unexpected results may occur).

### Syntax
```arr.insert(itemToInsert, compareFunction[currentValue, insertValue])```

- `arr` - a sorted or empty array
- parameters:
    - `itemToInsert` - the item to be inserted into the array
    - `compareFunction` - the callback used to compare values and decide where to insert the new value
        - `currentValue` - the current value being looked up
        - `insertValue`- the value to be inserted
        
*Note: the `compareFunction` will by default check if the `currentValue` is less than the `insertValue`, which will result in ascending order*

### Examples
1. Insert into an array with ascending order

    ```javascript
    const sortedArray = [2, 4, 6, 8];
    
    sortedArray.insert(1)
               .insert(2)
               .insert(3)
               .insert(9)
               .insert(7);
    
    console.log(sortedArray); // output: [1, 2, 2, 3, 4, 6, 7, 8, 9]
    ```
2. Insert into an array with descending order

    ```javascript
    const sortedArray = [15, 12, 10, 8];
    
    const evaluator = (currentValue, insertValue) => currentValue > insertValue;
    
    sortedArray.insert(16, evaluator)
               .insert(11, evaluator)
               .insert(9, evaluator);
    
    console.log(sortedArray); // output: [16, 15, 12, 11, 10, 9, 8]
    ```
