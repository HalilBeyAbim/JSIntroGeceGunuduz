

var date = new Date();
var hours = date.getHours();

if(hours >= 6 && hours < 12) {
    alert("Sabahiniz xeyir");
    document.body.style.backgroundColor ="#56C0E7"

}


else if(hours >=12 && hours<15 ){
    alert("gunortaniz xeyir");
    document.body.style.backgroundColor="#56C0E7";
}

else if(hours >=15 && hours <20 ){
    alert("axsaminiz xeyir");
    document.body.style.backgroundColor="#239AD2";
}

else if(hours >=20 && hours <23.59 ){
    alert("geceniz xeyir");
    document.body.style.backgroundColor="#0F6DAB";
}

else if(hours >=0 && hours <6){
    alert("ta gedin yatin)");
    document.body.style.backgroundColor="#052639";
}