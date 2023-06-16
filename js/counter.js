let counter=0;
function Plus(){
    counter++;
    document.getElementById("demo3").innerHTML=counter;
}
function Reset(){ 
//bu function da reset liyor
    counter=0;
    document.getElementById("demo3").innerHTML=counter;
}
function Pause(){
    document.getElementById("demo4").innerHTML=counter;
}