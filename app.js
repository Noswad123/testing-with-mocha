const printArray = require('./util').printArray
const getCount = require('./util').getCount
const PermutationBuilder = require('./permutationBuilder').PermutationBuilder

let sampleArray = [1,2,3,4,5];
let numberOfSquaresToSelect = 3;
let expectedSum = 10;
let finalArray = []
let permutationBuilder = new PermutationBuilder(sampleArray, numberOfSquaresToSelect);

finalArray = permutationBuilder.getPermutations()
printArray(finalArray)
getCount(finalArray,expectedSum)