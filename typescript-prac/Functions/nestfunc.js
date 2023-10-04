var func1 = function () {
    console.log("Hamza");
};
var func2 = function () {
    func1();
};
func2();
var func3 = function () {
    return 2 + 2;
};
var total = func3();
console.log(total);
