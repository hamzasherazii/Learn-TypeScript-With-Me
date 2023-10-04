let func1 = () => {
    console.log("Hamza");
} 

let func2 = () => {
    func1();
}

func2();

let func3 = ():number => {
    return 2 + 2;
}

let total = func3();
console.log(total);