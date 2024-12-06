const apiKey = "8be381e1"; // OMDB API Key
const searchBtn = document.getElementById("search-btn");
const movieInput = documet.getElementById("movie-input");
const movieDetails = document.getElementById("movie-details");
const errorMessage = document.getElementById("error-message");

searchBtn.addEventListener("click", () =>{
    const movieTitle = movieInput.ariaValueMax.trim();
    if (movieTitle == ""){
        showError("Please enter a movie title");
        return;
    }
    fetchMovie(movieTitle)
})

function fetchMovie(title)
{

}

function displayMovie(data)
{

    errorMessage.classList.add("hidden");
    movieDetails.classList.remove("hidden");

}

function showError(message)
{
    
    movieDetails.classList.add("hidden");
    errorMessage.textContent = message;
    errorMessage.classList.remove("hidden");
}