export type Roll = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type Rolls = Roll[]

export const isStrike = (rolls: Rolls, index: number): boolean => {
    return rolls[index] === 10
}

export const getStrikeBonus = (rolls: Rolls, index: number): number => {
    return isStrike(rolls, index) ? rolls[index + 1] + rolls[index + 2] : 0
}

export const isSpare = (rolls: Rolls, index: number): boolean => {
    return rolls[index] + rolls[index + 1] == 10 && !isStrike(rolls, index)
}

export const getSpareBonus = (rolls: Rolls, index: number): number => {
    return isSpare(rolls, index) ? rolls[index + 2] : 0
}

export const getSumOfRoll = (rolls: Rolls, index: number): number => {
    return rolls[index] + rolls[index + 1]
}

const calculate = (rolls: Rolls): number => {
    let score: number = 0;
    let frameIndex: number = 0;

    [...Array(10)].forEach(() => {
        switch (true) {
            case isStrike(rolls, frameIndex):
                score += 10 + getStrikeBonus(rolls, frameIndex)
                frameIndex++;
                break;
            case isSpare(rolls, frameIndex):
                score += 10 + getSpareBonus(rolls, frameIndex)
                frameIndex += 2;
                break;
            default:
                score += getSumOfRoll(rolls, frameIndex);
                frameIndex += 2;
                break;
        }
    })

    return score;
}


export default calculate