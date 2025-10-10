
// 5回繰り返し
for (let i = 0; i < 5; i++) {
    console.log(i + "回目")
}


// 配列とfor

const fruits = ["りんご","ばなな"]

console.log(fruits.length)

for (let i = 0; i < fruits.length; i++) {
    console.log(i + "は" + fruits[i])
}


// モダンなfor of
const colors = ["赤","青","黃"];

for (const color of colors) {
    console.log("好きな色は" + color + "です")
}