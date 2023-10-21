fetch("./holeman3_quiz_movies.json")
    .then(response => response.json())
    .then(myMovies => loadMovies(myMovies));


function loadMovies(myMovies) {
    var imgMovie1 = document.getElementById("imgMovie1"); // Avengers
    var imgMovie2 = document.getElementById("imgMovie2"); // The Last Airbender
    var imgMovie3 = document.getElementById("imgMovie3"); // The Iron Giant
    var imgMovie4 = document.getElementById("imgMovie4"); // Mulan
    var txtMovie1 = document.getElementById("txtMovie1"); // Avengers
    var txtMovie2 = document.getElementById("txtMovie2"); // The Last Airbender
    var txtMovie3 = document.getElementById("txtMovie3"); // The Iron Giant
    var txtMovie4 = document.getElementById("txtMovie4"); // Mulan

    for (var i = 0; i < myMovies.movies.length; i++) {
        let title = myMovies.movies[i].title;
        let year = myMovies.movies[i].year;
        let url = myMovies.movies[i].url;
        let imgMovie = document.createElement("div");
        imgMovie.innerHTML = `<img src=${url} class="card-img-top" alt="..."></img>`;
        let txtMovie = document.createElement("p");
        txtMovie.innerHTML = `<p class="card-text"> <strong>${title}</strong>, ${year}</p>`;

        if (myMovies.movies[i].title === "Avengers") {
            imgMovie1.appendChild(imgMovie);
            txtMovie1.appendChild(txtMovie);
        } else if (myMovies.movies[i].title === "The Last Airbender") {
            imgMovie2.appendChild(imgMovie);
            txtMovie2.appendChild(txtMovie);
        } else if (myMovies.movies[i].title === "The Iron Giant") {
            imgMovie3.appendChild(imgMovie);
            txtMovie3.appendChild(txtMovie);
        } else if (myMovies.movies[i].title === "Mulan") {
            imgMovie4.appendChild(imgMovie);
            txtMovie4.appendChild(txtMovie);
        }
        // end of for
        // end of function
    }



}

// Toggle Avengers button :
var toggleButton1 = document.getElementById('toggleCardButton1');
var card1 = document.getElementById('card1');
var collapsableCard1 = new bootstrap.Collapse(card1, { toggle: true });
toggleButton1.addEventListener('click', function () {
    collapsableCard1.toggle();
});

// Toggle Avengers button :
var toggleButton2 = document.getElementById('toggleCardButton2');
var card1 = document.getElementById('card2');
var collapsableCard2 = new bootstrap.Collapse(card2, { toggle: false });
toggleButton2.addEventListener('click', function () {
    collapsableCard2.toggle();
});

// Toggle Avengers button :
var toggleButton3 = document.getElementById('toggleCardButton3');
var card3 = document.getElementById('card3');
var collapsableCard3 = new bootstrap.Collapse(card3, { toggle: false });
toggleButton3.addEventListener('click', function () {
    collapsableCard3.toggle();
});

// Toggle Avengers button :
var toggleButton4 = document.getElementById('toggleCardButton4');
var card4 = document.getElementById('card4');
var collapsableCard4 = new bootstrap.Collapse(card4, { toggle: false });
toggleButton4.addEventListener('click', function () {
    collapsableCard4.toggle();
});


