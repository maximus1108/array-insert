# Array.prototype.insert
This module adds an 'insert' method to the Array object's prototype, which can be used to insert an element into an array at an index calculated by a sorting criteria.

The method uses a binary lookup algorithm to insert the element at the correct index to maintain the order the appropriate ordering.

The aim of this is to implement a method that is more performant for than the native options for inserting and sorting an array. Performance comparisons can be found here: 

## Installation

Install the module using your favourite package manager:
`npm install --save-dev array-insert`

## Usage

### Assumptions
