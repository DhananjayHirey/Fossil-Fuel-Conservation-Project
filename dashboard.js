var audio = new Audio();

var name1 = localStorage.getItem('name')
var date = new Date()
var hours = date.getHours();
console.log(hours)
var greet;
if (hours < 12) {
    greet = 'Good Morning'
}
else if (hours > 12 && hours <= 16) {
    greet = 'Good Afternoon'
}
else if (hours > 16 && hours <= 24) {
    greet = 'Good Evening'
}
document.getElementById('greeting').innerHTML = greet + ' ' + name1

setInterval(wordchange, 5000)