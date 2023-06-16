const person={
    Fname:"Sevgi",
    Lname:"INAL",
    Age:37,
    fullname:function(){
       return this.Fname+" "+this.Lname;
//bu yukaridaki objenin icinde function ile olusturuluyor
    }
}
function funccal(){
    document.getElementById("demo2").innerHTML=person.fullname();
}