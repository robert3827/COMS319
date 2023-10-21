let add = (a,b) => {
    return a+b;
} 

console.log("Brackets" + add(3,4));

let addOneLine = (a,b) => a+b;


console.log("One Line" + addOneLine(3,4));

let print = (a) => console.log(a);

print("Alt name for print function");

let doublePrint = (m1, m2) => {
    console.log(m1);
    console.log(m2);
}
doublePrint("Hello", "There");