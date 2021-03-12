function  timeMachine(){
    var klok = new Date();
    var uren = klok.getHours();
    var minuten = klok.getMinutes();
    var secondes = klok.getSeconds();
    var milisecondes = Math.floor(klok.getMilliseconds() / 10);

    var tijdVoor = (uren - 1) + ":" + (minuten - 1) + ":" + (secondes - 1) + ":" + (milisecondes - 1);
    
    var uren = uren + ":";
    var minuten = minuten + ":";
    var secondes = secondes + ":";
    

    
    
    document.getElementById("uur").innerHTML = tijdVoor + "<br>" + uren;
    document.getElementById("minut").innerHTML = minuten;
    document.getElementById("second").innerHTML = secondes;
    document.getElementById("milisecond").innerHTML = milisecondes;
    setTimeout(timeMachine, Math.floor(Math.random() * 100));
}
function test(){
var element = document.getElementById("test");
    function testYes(){
        element.classList.add("animation");
        setTimeout(testPlease, 2000);
    }
    function testPlease(){
        element.classList.remove("animation");
    }
    setInterval(testYes, 3000);
}
function backgroundColor(){
    var tijd = new Date();
    var tijdTwee = tijd.getHours();
    if (tijdTwee >=10 && tijdTwee <= 20){
        document.getElementById("body").classList.add("day");
        document.getElementById("body").classList.remove("night");
    } else {
        document.getElementById("body").classList.add("night");
        document.getElementById("body").classList.remove("day");
    }
}
window.onload = function(){
        test();
        backgroundColor();
}