function wd() {

    var d = parseFloat(document.getElementById('a').value);
    var m = parseFloat(document.getElementById('b').value);
    var y = parseFloat(document.getElementById('c').value);
    var c = (y - 1) / 100 + 1;
    var weekDay = (c / 4 - 2 * c - 1 + 5 * y / 4 + 26 * (m + 1) / 10 + d) % 7;
    console.log(weekDay);
    document.getElementById('answer').innerHTML = Math.round(weekDay);
    
    var femme = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var homme = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var z = document.getElementById('choice').value;
    
    if (d <= 0 || d > 31) {
        // console.log("invalid input");
        alert("you have entered an invalid date, please enter a valid one. Thank you!");
    } else if (m <= 0 && m > 12) {
        alert("you have entered an invalid date, please enter a valid one. Thank you!");
    }
    else{
    if (z === "female") {
        console.log(femme[Math.round(weekDay)]);
        document.getElementById('akanName').innerHTML = femme[Math.round(weekDay)];
    } else if (z === "male") {
        console.log(homme[Math.round(weekDay)]);
        document.getElementById('akanName').innerHTML = homme[Math.round(weekDay)];
    } else {
        console.log("invalid output");
    }
    }
    
}
