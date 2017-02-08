var num: number = 5;
//var i: number;
var factorial = 1;

for (var i:number = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)

var j: any;
var n: any = "asdkjf b c"

for (j in n) {
    console.log(n[j])
}

var num = 0;
var count = 0;

for (num = 0; num <= 20; num++) {
    if (num % 2  == 1) {
        continue;
    }
    count++;
}
console.log(" zbrir neparnig brojeva izmedju 0 i 20 je: " + count);