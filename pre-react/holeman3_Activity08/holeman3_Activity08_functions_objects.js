let n1 = 11;
let n2 = 10;
console.log(`The max between ${n1} and ${n2} is :`, maxOfTwo(n1,n2));

function maxOfTwo(n1,n2) {
    // return (Math.max(n1,n2));
    if(n1>n2) {
        return n1;
    } else {
        return n2;
    }
}



let array = [10,11,1024,125,9,201];
console.log(maxOfArray(array));
// console.log(Math.max(...array))


function maxOfArray(array) {
    let max = array[0];
    for(let r of array) {
        if(r>max) {
            max = r;
        }
    }
    return max;
}



const movie = {
    title : 'Some movie',
    releaseYear: 2018,
    rating: 4.5,
    director: 'Steven Spielberg',
    
    };
   showProperties(movie);
    // console.log(movie)

    function showProperties(movie) {
        console.log("Show properties");
        for (let key in movie) {
            console.log(key)
        }
    }


var circle = {
    radius: 2,
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    get radiusValue() {
        return this.radius;
    },
    set radiusValue(newRad) {
        this.radius = newRad
    }
}
console.log(circle.area());


console.log(`Area with ${circle.radiusValue} :`,circle.area());
circle.radiusValue = 3;
console.log(`Area with ${circle.radiusValue} :`,circle.area());



var circle2 = {
    radius: 2,
    area() {
        return Math.PI * Math.pow(this.radius, 2);
    },
    getRadiusValue() {
        return this.radius;
    },
    setRadiusValue(newRad) {
        this.radius = newRad;
    }
}
console.log(circle2.area());


console.log(`Area with ${circle2.getRadiusValue()} :`,circle2.area());
circle2.setRadiusValue(3);
console.log(`Area with ${circle2.getRadiusValue()} :`,circle2.area());

    




