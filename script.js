var urenVoor = 0;
var minutenVoor = 0;
var secondesVoor = 0;
var milisecondesVoor = 0;

function  timeMachine(){
    var klok = new Date();
    var uren = klok.getHours();
    var minuten = klok.getMinutes();
    var secondes = klok.getSeconds();
    //var milisecondes = Math.floor(klok.getMilliseconds() / 10); Outdated

    //var tijdVoor = (uren - 1) + ":" + (minuten - 1) + ":" + (secondes - 1) + ":" + (milisecondes - 1); OUTDATED TIME ANIMATIONS
    
    if (secondes < 10){
        secondes = "0" + secondes;
    } else {
        secondes = secondes;
    }
    if (minuten < 10){
        minuten = "0" + minuten;
    } else {
        minuten = minuten;
    }
    
    // document.getElementById("uur").innerHTML = uren;
    // document.getElementById("minut").innerHTML = minuten;
    // document.getElementById("second").innerHTML = secondes;
    // document.getElementById("milisecond").innerHTML = milisecondes;

    animation(uren, urenVoor, "uur", "animation");
    animation(minuten, minutenVoor, "minut", "animation");
    animation(secondes, secondesVoor, "second", "animation");
    //animation(milisecondes, milisecondesVoor, "milisecond", "animationMili"); Outdated
    
    function animation(tijdeenheid, tijdeenheidVoor, id, animation){
        if(tijdeenheid == tijdeenheidVoor){
            document.getElementById(id).classList.add(animation);
            document.getElementById(id).innerHTML = tijdeenheid;
        } else {
            document.getElementById(id).classList.remove(animation);
        }
    }
    // animation(uren, urenVoor, "uur", "animation", "animationDown");
    // animation(minuten, minutenVoor, "minut", "animation", "animationDown");
    // animation(secondes, secondesVoor, "second", "animation", "animationDown");
    // animation(milisecondes, milisecondesVoor, "milisecond", "animationMili", "animationDown");
    
    // function animation(tijdeenheid, tijdeenheidVoor, id, animationUp, animationDown){
    //     if(tijdeenheid == tijdeenheidVoor){
    //         document.getElementById(id).classList.remove(animationDown);
    //         document.getElementById(id).classList.add(animationUp);
    //         document.getElementById(id).innerHTML = tijdeenheid;
    //     } else {
    //         document.getElementById(id).classList.remove(animationUp);
    //         document.getElementById(id).classList.add(animationDown);
    //     }
    // }
    urenVoor = uren; 
    minutenVoor = minuten; 
    secondesVoor = secondes; 
    //milisecondesVoor = milisecondes; Outdated
    
    setTimeout(timeMachine, Math.floor(Math.random() * 100));
}

// OUTDATED ANIMATIONS
// function animation(){
//     var element = document.getElementById("second");
//     function animationYes(){
//         element.classList.add("animation");
//         setTimeout(animationPlease, 2000);
//     }
//     function animationPlease(){
//         element.classList.remove("animation");
//     }
// setInterval(animationYes, 3000); 
// }
// function test(){
//     var element = document.getElementById("test");
//     function testYes(){
//         element.classList.add("animation");
//         setTimeout(testPlease, 2000);
//     }
//     function testPlease(){
//         element.classList.remove("animation");
//     }
//     setInterval(testYes, 3000);
// }
// OUTDATED ANIMATIONS

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
        timeMachine();
        backgroundColor();
}