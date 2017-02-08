namespace mirko {
    class test {
        private x: number;
        private y: number;
        constructor(xx: number, yy: number) {
            this.x = xx;
            this.y = yy;
        }
        public myprint(): void {
            console.log(this.x + "  " + this.y);
            console.log("\n");
        }

    }

    function disp(): test[] {
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
}