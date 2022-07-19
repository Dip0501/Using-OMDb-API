// API http://www.omdbapi.com/?i=tt3896198&apikey=a0d26b4b&
// API IMG http://img.omdbapi.com/?apikey=a0d26b4b&

let searchItem = localStorage.getItem('searchItem')

function browseMovies() {
    searchItem = document.getElementById("search__Id").value
    getMovies(searchItem)
}

getMovies(searchItem)

async function getMovies(searchItem) {
    const movies = await fetch(`http://www.omdbapi.com/?s=${searchItem}&page=1&apikey=a0d26b4b&`)
    const moviesData = await movies.json('')
    if (moviesData.Response === 'True') {
        console.log(moviesData.Search);
        showMovies(moviesData.Search)
    }
}

function showMovies(moviesData) {
    const movieListEl = document.querySelector('.movies')
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("")
    movieListEl.innerHTML = moviesHTML
}

function movieHTML(movie) {
    return `
            <div class="movie">
                <figure class="movie__img--wrapper">
                    <img class="movie__img" src="${movie.Poster}" alt="">
                </figure>          
                <div class="movie__display-text">
                    <div class="movie__title">
                        ${movie.Title}
                    </div>
                    
                    <div class="movie__year">
                        ${movie.Year}
                    </div>
                </div>
            </div>
    `
}
