function sayHello() {
    console.log("こんにちは。jsにようこそ")
}

sayHello()
sayHello()


// 引数有の関数

function greetName(name) {
    console.log("こんにちは、" + name + "さん！");
}

greetName("Goku")


// 戻り値
function addNumber(numA, numB) {
    const sum = numA + numB
    return sum
}

console.log(addNumber(1,2))
const res = addNumber(2,4)
console.log(res)

// アロー関数
const multiplyArrow = (a,b) => {
    return a * b
}

console.log(multiplyArrow(3,4))

const square = num => num * num

console.log(square(9))