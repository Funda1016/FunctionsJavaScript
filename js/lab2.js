function Hesapla(){
    let i1=parseInt(document.getElementById("in1").value);
    let i2=parseInt(document.getElementById("in2").value);
 let s=document.getElementById("selectId").value;
 let sonuc=0;
 switch(s){
    case "+":
    sonuc=i1+i2;
    document.getElementById("demo2").innerHTML="toplam sonucu:"+""+sonuc;
        break;
    case "-":
        sonuc=i1-i2;
    document.getElementById("demo2").innerHTML="cikarma sonucu:"+""+sonuc;
        break;
    case "*":
        sonuc=i1*i2;
    document.getElementById("demo2").innerHTML="carpim sonucu:"+""+sonuc;
        break;
    case "/":
        sonuc=i1/i2;
    document.getElementById("demo2").innerHTML="bolme sonucu:"+""+sonuc;
        break;
    default:
        document.getElementById("demo2").innerHTML="inputlar bos olamaz";

        break;
 }
}