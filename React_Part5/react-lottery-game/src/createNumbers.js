function genNums(n){
    let arr = new Array(n);
    for(let i=0;i<n;i++){
        arr[i] = Math.floor(Math.random()*10);
    }
    return arr;
}
function sum(arr){
    return arr.reduce((total,curr)=>total+curr,0);
}
export {genNums,sum};