var str = prompt("Введите слово");
 str = str.toLowerCase().split(" ").join("").split(",").join("").split(".").join("").split("-").join("");

if (str == str.split("").reverse().join("")) {
    alert("Палиндром");
}
else { alert("Не палиндром"); }
