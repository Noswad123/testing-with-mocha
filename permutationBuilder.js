 class PermutationBuilder{
    constructor(sampleArray, numberOfSquaresToSelect)
    {
        this.permutations=[];
        this.indexArray=[];
        for(let i=0; i< numberOfSquaresToSelect; i++)
        {
            this.indexArray.push(i)
        }
        this.generatePermutations(sampleArray)
    }
    
    generatePermutations(sampleArray){
        let startingPosition= this.indexArray.length-1
        let updateUntil = startingPosition
        while(updateUntil>=0){
             updateUntil--;
             this.nextLevel(sampleArray,2)
             this.resetIndexArray(startingPosition++,updateUntil)
        }
    }

    nextLevel(sampleArray, index){
        while(sampleArray.length - (this.indexArray[index]+this.indexArray.length-index) >=0)
        {
            this.addPermutation(sampleArray)
            this.indexArray[index]++;
        }
    }
    resetIndexArray(startingPosition, updateUntil){
        for(let i=this.indexArray.length-1;i>=updateUntil; i--)
        {
            if(i===this.indexArray.length-1){
                this.indexArray[i]=++startingPosition;
            }
            else{
                this.indexArray[i]=this.indexArray[i+1]-1;
            }
        }
    }
    addPermutation(sampleArray){
        let tempArray = []
       this.indexArray.forEach(element => {
           tempArray.push(sampleArray[element])
       });
        this.permutations.push(tempArray)
    }
    getPermutations()
    {
        return this.permutations;
    }
}

module.exports={
    PermutationBuilder
}