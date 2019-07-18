function wd() {
    var d = parseFloat(document.getElementById('day').value);
    var m = parseFloat(document.getElementById('month').value);
    var y = parseFloat(document.getElementById('year').value);
    var x = (y - 1) / 100 + 1;
    var weekDay = (((c / 4) - 2 * c - 1) + ((5 * y / 4)) + ((26 * (m + 1) / 10)) + d) % 7;
    console.log(weekDay);
    document.getElementById('result').innerHTML = Math.round(weekDay);

    var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var z = document.getElementById('choice').value;

    if (z === 'female') {
        console.log(female[Math.round(weekDay)]);
        document.getElementById('akanName').innerHTML = female[Math.round(weekDay)];
    } else if (choice === 'female') {
        console.log(male[Math.round(weekDay)]);
        document.getElementById('akanName').innerHTML = male[Math.round(weekDay)];
    } else {
        console.log("invalid output");
    }
}