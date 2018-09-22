const printArray= (tempArray)=>{
    console.log(tempArray);
}

const getCount = (anArray, expectedNumber)=>{
    let count=0;
     anArray.forEach(subset=>{
        if(expectedNumber ===  sumArrayElements(subset))
            count++
    })
     return count
}

const sumArrayElements = (anArray)=>{
   return anArray.reduce( (a,b)=>{return a+b},0,)
}

module.exports={
    printArray,
    getCount,
    sumArrayElements
}