let inp = document.querySelector('#code');
let btn = document.querySelector('button');
btn.addEventListener('click',function(){
    if(inp.value==123){
        alert('login successfully');
    }
    else{
        alert('invalid password or username');
    }
})