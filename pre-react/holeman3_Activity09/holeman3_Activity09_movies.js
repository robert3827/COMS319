
fetch("./holeman3_Activity09_movies.json")
.then(response=> response.json())
.then(myMovies => loadMovies(myMovies));

function loadMovies(myMovies) {
    var mainContainer = document.getElementById("goodMovies");
    console.log(myMovies);
    console.log(myMovies.movies);

    for(movie of myMovies.movies) {
        let title = movie.title;
        let year = movie.year;
        let url = movie.url;
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