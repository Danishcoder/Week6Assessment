const {shuffleArray} = require('./utils')

const testArr1=[30,15,31,20]
const testArr2=[]
const testArr3=["Danish","Jared","Dallas"]


describe('shuffleArray should', () => {
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    })

    test('have its output array have the same length as its input array', () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
        expect(shuffleArray(testArr3)).toHaveLength(testArr3.length)
    })
})