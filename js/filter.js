const ages=[10,5,52,40,18];
document.getElementById("demo3").innerHTML=ages.filter(kontrol);

function kontrol(x){
    return x>=18;
}