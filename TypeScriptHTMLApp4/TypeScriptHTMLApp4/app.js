var interfejs;
(function (interfejs) {
    var car1 = {
        zapremina: "jasdkjf",
        snaga: 49,
        kilometraza: function () { return "150"; }
    };
    var car2 = {
        zapremina: "mith",
        snaga: 77,
        kilometraza: function () { return "200"; }
    };
    var plac = new Array(car1, car2);
    console.log(plac[0].zapremina);
    var testobj = { v1: 12, v2: 23 };
    console.log("prvi roditelj: " + testobj.v1 + " dgugi roditelj: " + testobj.v2);
})(interfejs || (interfejs = {}));
//# sourceMappingURL=app.js.map