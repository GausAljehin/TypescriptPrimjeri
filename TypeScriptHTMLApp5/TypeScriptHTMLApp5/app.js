var mirko;
(function (mirko) {
    var test = (function () {
        function test(xx, yy) {
            this.x = xx;
            this.y = yy;
        }
        test.prototype.myprint = function () {
            console.log(this.x + "  " + this.y);
            console.log("\n");
        };
        return test;
    }());
    function disp() {
        var test1 = new test(2, 3);
        var test2 = new test(1, 2);
        var test3 = new test(6, 3);
        var test4 = new test(-1, -2);
        return new Array(test1, test2, test3, test4);
    }
    var arr = disp();
    for (var i = 0; i < 4; i++) {
        arr[i].myprint();
    }
})(mirko || (mirko = {}));
//# sourceMappingURL=app.js.map