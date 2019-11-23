import calculate, {
    Rolls,
    getSumOfRoll,
    isSpare,
    isStrike,
    getSpareBonus,
    getStrikeBonus,
} from './calculate'

type RollTestCase = [Rolls, number]

const testCases: RollTestCase[] = [
    [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 0],
    [[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 1],
    [[4,6,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 17],
    [[10,2,3,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], 21],
    [[10,10,10,10,10,10,10,10,10,10,10,10], 300],
    [[1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6], 133],
]

const testCase: RollTestCase = [[1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6], 133]

testCases.forEach(([rolls, points]) => {
    test(`score > calculate > calculate > test ${rolls.join(', ')} results into a ${points} score`, () => {
        expect(calculate(rolls)).toBe(points)
    })
})

test(`score > calculate > getSumOfRoll`, () => {
    expect(getSumOfRoll(testCase[0], 0)).toBe(5)
    expect(getSumOfRoll(testCase[0], 8)).toBe(10)
})

test(`score > calculate > isSpare`, () => {
    expect(isSpare(testCase[0], 4)).toBeTruthy()
    expect(isSpare(testCase[0], 3)).toBeFalsy()

    // A Strike is not a Spare
    expect(isSpare(testCase[0], 8)).toBeFalsy()
})

test(`score > calculate > getSpareBonus`, () => {
    expect(getSpareBonus(testCase[0], 0)).toBe(0)
    expect(getSpareBonus(testCase[0], 4)).toBe(5)
})

test(`score > calculate > isStrike`, () => {
    expect(isStrike(testCase[0], 3)).toBeFalsy()
    expect(isStrike(testCase[0], 8)).toBeTruthy()

    // A Spare is not a Strike
    expect(isStrike(testCase[0], 4)).toBeFalsy()
})

test(`score > calculate > getStrikeBonus`, () => {
    expect(getStrikeBonus(testCase[0], 0)).toBe(0)
    expect(getStrikeBonus(testCase[0], 8)).toBe(1)
    expect(getStrikeBonus(testCase[0], 15)).toBe(10)
})
