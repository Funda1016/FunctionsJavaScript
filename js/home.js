function calis(){
    let i1=document.getElementById('in1').value;
    let i2=document.getElementById('in2').value;
    let sonuc=kontrol(i1,i2);
    if(sonuc==true){
window.location.href="basari.html"

    }else{
window.location.href="yanlis.html";
    }

}
function kontrol(x,y){
if(x=="funda" && y=="123"){
    return true;
}else{
    return false;
}
}