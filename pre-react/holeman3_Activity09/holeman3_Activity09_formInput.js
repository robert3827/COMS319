function getInputValue() {

    fetch("./holeman3_Activity09_movies.json")
        .then(response => response.json())
        .then(myMovies => loadMovies(myMovies));

    function loadMovies(myMovies) {
        var mainContainer = document.getElementById("goodMovies");
        console.log(myMovies);
        console.log(myMovies.movies);

        for (movie of myMovies.movies) {
            console.log(movie.title);
            var title, year, url;
            var formInput = document.forms["myForm"]["inputMovieName"].value;
            console.log("Form Input: " + formInput)
            if(movie.title === formInput) {
                title = movie.title;
                year = movie.year;
                url = movie.url;
                console.log(title);
                // DOM
            let divVar = document.createElement("div");
            divVar.innerHTML = `
            <h3>${title}</h3> <br>
            ${year} <br>
            <img src=${url} width="200"> <br><br>
            `;
            mainContainer.appendChild(divVar);
            }
            

            
        }
    }
}

