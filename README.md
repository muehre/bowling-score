# Bowling score calculator

A simple bowling score calculator written in typescript

## Installation

```shell script
npm i bowling-score
```

## Usage

```typescript
import score from 'bowling-score'

const totalScore = score([1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6])
console.log(totalScore)
// Output: 133
```

## Development

### Setup

```shell script
git clone git@github.com:muehre/bowling-score.git && cd bowling-score && npm i
```

### Running Tests

```shell script
npm run test
```