//object const olorark tanimlaniyor
const person={
    FirstName:"Ayse",
    LastName:"Bayram",
    Yas:45,
    id:123456
}
//yukaridaki objeyi degistirmek icin normalde const oldugunda degisime ugramiyor
//ama object ve arrayleri const olarak tanimlarsak degisime ugrayabiliyor.
const x=person;
x.Yas=48;
function getir(){
    //birinci kullanim
    //document.getElementById('demo').innerHTML=person.FirstName+person.LastName+""
//+person.Yas+""+person.id;
//ikinci kullanim
document.getElementById("demo").innerHTML=person["yas"]+" " + person["LastName"]+""+person["id"];
}
