namespace interfejs {
    interface lambdaInterTest {
        zapremina: string,
        snaga: number,
        kilometraza: () => string
    }

    var car1: lambdaInterTest = {
        zapremina: "jasdkjf",
        snaga: 49,
        kilometraza: (): string => { return "150" }
    }

    var car2: lambdaInterTest = {
        zapremina: "mith",
        snaga: 77,
        kilometraza: (): string => { return "200" }
    }

    var plac = new Array(car1, car2);

    console.log(plac[0].zapremina);

    interface IParent1 {
        v1: number
    }

    interface IParent2 {
        v2: number
    }

    interface Child extends IParent1, IParent2 { }
    var testobj: Child = { v1: 12, v2: 23 }
    console.log("prvi roditelj: " + testobj.v1 + " dgugi roditelj: " + testobj.v2)
}