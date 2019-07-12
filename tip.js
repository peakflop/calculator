function calculator(){
    var billamt= document.getElementById("billamt").value;
var serviceQual=document.getElementById("serviceQual").value;
var peopleamt= document.getElementById("peopleamt").value;
var total= ( billamt * serviceQual) / peopleamt;
document.getElementById("tip").innerHTML=total;
// alert(billamt);
// alert(serviceQual);
// alert(peopleamt);
// alert(total);

}