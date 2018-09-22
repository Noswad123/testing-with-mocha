expect = require ('chai').expect
should = require ('chai').should()

const {getCount, sumArrayElements} = require('../util.js')


describe('sumeArrayElements: Should add all the numbers within an array',()=>{
    let anArray = [1,3,4,5]
    it('should return 13 for [1,3,4,5]',()=>{
        (sumArrayElements(anArray)===13).should.be.true
    })
})

describe('getCount: counts all of the sub arrays that add up to a given number',()=>{
    let masterArray = [[1,3,4,5]]
    it('should return 13 for [1,3,4,5]',()=>{
        (getCount(masterArray,13)===1).should.be.true
    })
})