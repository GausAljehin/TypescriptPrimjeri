var Test = (function () {
    function Test() {
    }
    Test.prototype.printConcole = function () {
        console.log("Hello World!!!");
    };
    ;
    Test.prototype.zbir = function (a, b) {
        var c = a + b;
        console.log(c);
    };
    return Test;
}());
var obj = new Test();
obj.printConcole();
obj.zbir(3, 4);
//# sourceMappingURL=app.js.map