function wd() {
    var d = parseFloat(document.getElementById('day').value);
    var m = parseFloat(document.getElementById('month').value);
    var y = parseFloat(document.getElementById('year').value);
    var x = (y - 1) / 100 + 1;
    var weekDay = (((c / 4) - 2 * c - 1) + ((5 * y / 4)) + ((26 * (m + 1) / 10)) + d) % 7;
}