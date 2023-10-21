function sayHi(msg) {
    console.log(msg);
    document.getElementById("p1").innerHTML = msg;

}

document.getElementById("inputField").innerHTML.onchange = sayHi(document.getElementById("inputField").innerHTML);
   
