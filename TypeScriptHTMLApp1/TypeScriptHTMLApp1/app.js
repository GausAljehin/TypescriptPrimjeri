//demo unije
var test = (function () {
    function test(temp) {
        this.x = temp;
    }
    return test;
}());
var arr;
var varTest;
var i;
arr = [1, 2, -74];
console.log("*brojevni niz*");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr = ["Mirko", "Nemanja", "Vladimir"];
console.log("*niz stringova*");
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
varTest = new test(45);
console.log(varTest.x);
varTest = new test("string");
console.log(varTest.x);
//# sourceMappingURL=app.js.map