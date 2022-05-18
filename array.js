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

// 4
const biggestNumber = (numArray) =>{
    numArray.reduce((accumulator,num)=>{
        if (accumulator<num)
        return num;
        else return accumulator;
     
        
    },0)
}
const biggerThen6 = (biggerArray)=>{
  return biggerArray.filter((a)=>a>6)
}
console.log(biggerThen6([6,7,8]))