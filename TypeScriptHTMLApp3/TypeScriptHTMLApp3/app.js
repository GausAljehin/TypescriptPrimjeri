var num = 5;
//var i: number;
var factorial = 1;
for (var i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
var j;
var n = "asdkjf b c";
for (j in n) {
    console.log(n[j]);
}
var num = 0;
var count = 0;
for (num = 0; num <= 20; num++) {
    if (num % 2 == 1) {
        continue;
    }
    count++;
}
console.log(" zbrir neparnig brojeva izmedju 0 i 20 je: " + count);
//# sourceMappingURL=app.js.map