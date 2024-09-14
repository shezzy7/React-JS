// Closure:- A closure is a feature in js where an inner function has access to outer function's variables.
function outer(){
    let b=20;
    function inner(){
        let a=10;
        console.log(a+b);
    }
    return inner;
}
let inio = outer();
inio();
// Note: In js ,once a function completes its execution ,any variables that were defined inside the function scope cease to exist.