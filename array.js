// 1
const sumNumbersInArray = (numbersArray) => {
    return numbersArray.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0)
}

// 2

const squereNumbers = (squereArray) => {
    return squereArray.map(squere => squere * squere)
}

// 3
const multiNumbers = (multiArray) => {
    return multiArray.reduce((num) => num * num);
}

// 4
const biggestNumber = (numArray) => {
    return numArray.reduce((accumulator, num) => {
        if (accumulator < num)
            return num;
        else return accumulator;


    }, numArray[0])
}

// 5
const biggerThen6 = (biggerArray) => {
    return biggerArray.filter((a) => a > 6)
}


// 6
const length2Numbers = (arraylen) => {
    return arraylen.map(itemy => itemy = itemy.length,0)
    
}

// 7
const lengthANDnum = (arraylenth) => {
    return arraylenth.map(itemy => itemy = itemy.length+arraylenth,0)
    
}
// 8
const AllThings = (array)=>{
    return array.reduce((word1,word2)=>words= word1+word2)
}
console.log(AllThings(["Help","Step-bro","ImStuck"]))