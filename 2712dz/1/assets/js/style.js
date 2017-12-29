function min() {
    var arg;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] < arg || arg == undefined) {
                arg = arguments[i];
            }
        }
      return arg;
}
console.log(min(1, 20, 30, 5,2));

function max() {
    var arg;
        for (var i = 0; i < arguments.length; i++) {
            if (arguments[i] > arg ||arg == undefined) {
                arg = arguments[i];
            }
        }
    return arg;
}
console.log(max(1, 20, 30, 5,2));
