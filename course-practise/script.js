function getValue() {
    var value = new Object();
    value.pro1 = "noman";
    value.fun1 = () => { return true; }

    document.write("you have enter: " + value.fun1());
}
document.getElementById("h1").innerHTML = "heading h1";