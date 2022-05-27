// How can you make this more scalable and reusable later?

exports.findArmstrongNumbers = function(arr) {
    let armstrongNums = []

    for(let j = 0; j < arr.length; j++){
        let temp = arr[j].toString().split('')
        let sum = []
        let armstrongCheck = 0

        for(let i = 0; i < temp.length; i++){
            sum.push(Math.pow(temp[i],temp.length))
        }
        armstrongCheck = sum.reduce(function (a,b){return a + b})
        if(armstrongCheck === arr[j]){
            armstrongNums.push(arr[j])  
        }
    }    
    return armstrongNums

};



