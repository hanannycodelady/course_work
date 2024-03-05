function squareNumbers() {
    for (let h = 1; h <= 10; h++) {
    let squared = square(h);
    console.log(`The square of ${h} is ${squared}`);
    }
    }
    
    function square(number) {
    return number * number;
    }
    
    squareNumbers();