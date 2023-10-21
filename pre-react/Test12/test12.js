function sum() {
    let total = 0;
     for(let value of arguments)        //of returns the value at each index. let value in arguments would return the index
                                        //Also note that arguments is a keyword that automatically gets arguments
                                        //Items could be of any type :) JS will just handle it
     total +=value;
    return total
 }

 console.log(sum(1,4,7,3));



 function sum2(...args) {                   //... is a rest operator
    console.log(args);
    let total = 0;
    for(let value of args)
        total+=value;
        return total;
 }

 function interestAmount(principal, rate=3.5, years=6){
    return principal * rate/100 * years;
 }
 
 console.log(interestAmount(100000));

 const person = {
    firstName: 'Albert',
    lastName: 'Einstein',
    secondLastName: 'Robert',
 }
 console.log(person);


 console.log(`The first name is : ${person.firstName}`)             //You have to use the ` backtick (top left of keyboard)

function Genius() {

}