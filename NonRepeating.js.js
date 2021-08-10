const nonRep = arr =>{
    
    let answer =0;
    for(let i =0;i<arr.length;i++){
        answer = answer^arr[i];
    }
    return answer;
}

ans = nonRep([1,2,2]);
console.log(ans);