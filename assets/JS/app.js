let table = 17;
let result = "";
for (let i = 1; i <= 10; i++) {
    result += table + "*" + i + "=" + table * i + "<br>";
}
document.getElementById("forloop").innerHTML = result;

let divide = 4;
let answer = "";
let n = 1;
while (n <= 10) {
    answer += divide + "/" + n + "=" + (divide / n) + "<br>";
    n++;
}
document.getElementById("whileloop").innerHTML = answer;

let percentage = 105.20;
let s = "";
let a = 23;
do {
    s += percentage + "%" + a + "=" + (percentage % a) + "<br>";
    a++;
} while (a < 0);
document.getElementById("doloop").innerHTML = s;
