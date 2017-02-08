class Test {
    printConcole(): void {
        console.log("Hello World!!!")
    };
    zbir( a:number, b: number): void{
         var c:number = a + b;
        console.log(c); 
    }
}
var obj = new Test();
obj.printConcole();
obj.zbir(3, 4);