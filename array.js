// 1
const sumNumbersInArray = (numbersArray) => {
    return numbersArray.reduce((accumulator, number) => {
        return accumulator + number;
    }, 0)
}

// 2

const squereNumbers = (squereArray) =>{
    return  squereArray.map(squere=>squere*squere) 
}

// 3
const multiNumbers =(multiArray) =>{
    return multiArray.reduce((num)=> num*num);
}
