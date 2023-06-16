const person={
    FirstName:"Ayse",
    LastName:"Bayram",
    Yas:45,
    id:123456
}
function getir(){
   /* document.getElementById('demo').innerHTML=person.FirstName+person.LastName+""
+person.Yas+""+person.id;*/
document.getElementById("demo").innerHTML=person["LastName"]+""+person["id"];
}
