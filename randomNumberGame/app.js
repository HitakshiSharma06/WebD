var a=Math.floor(Math.random()*100);
console.log(a);
function ran(){
    var num=document.getElementById('num').value;
    //var b=document.getElementById('output');
    if(num==a){
        document.getElementById('output').innerHTML="You guessed it right: ";
    }
    else if(num<a){
        document.getElementById('output').innerHTML="Enter bigger number";
    }
    else{
        document.getElementById('output').innerHTML="Enter smaller number";
    }
}