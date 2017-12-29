function min(a, b) {
    console.log(arguments);
    if (a >= b) {
        return b;
    }
    else {
        return a;
    }
    
}

console.log(min(1, 20, 30, 5));
function max(a, b) {
    if (a >= b)
        return a;
    else
        return b;
} 
console.log(max(10,20));
console.log(max(20,20));



