function Test(){
    let x=document.getElementById("demo2").value;
    let y=document.getElementById("pid");
    y.innerHTML="";//y bos oluyor
    //bu y p tag in icerisin bosalmasini sagliyor
    y.style.color="red";

    try{
        if(x=="")throw "input bos olamaz";
        if(isNaN(x)) throw "sayi girmeniz gerekli"; //buda string girildiginde
        //isNaN method turu name mi
        if(x<5) throw "sayi 5 ten kucuk olamz";
        if(x>10) throw "sayi 10 dan buyuk olamz";
        if(x>=5 && x<=10){
            document.getElementById("pid").innerHTML="tebrikler";
            document.getElementById("pid").style.color="green";
        }


    }catch(e){
  document.getElementById("pid").innerHTML="";
    }finally{
        document.getElementById("demo2").value="";
    }


}