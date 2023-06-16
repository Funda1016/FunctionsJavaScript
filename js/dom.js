const ages=[10,15,32,23,16,40];
document.getElementById('demo').innerHTML=ages.find(kontrol);
function kontrol(x){
    return x>=18;
}