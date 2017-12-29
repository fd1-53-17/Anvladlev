function SelfCount() {
    var counter = 0;

    function CountIncrement() {
        counter++;
        console.log(counter);
    }
    return CountIncrement;
}
var myFun = SelfCount();
var myFun2 = SelfCount();
myFun();
myFun();

myFun2();
myFun2();
myFun2();
myFun();
myFun2();