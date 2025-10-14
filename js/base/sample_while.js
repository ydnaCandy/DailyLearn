let counter = 0;


while (counter < 5) {
    console.log("now: " + counter)

    counter ++
}


// do while

let number;

do {
    number = Math.random();
    console.log("試行: " + number);
} while (number < 0.5)


console.log("0.5未満なので終了")