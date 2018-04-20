$(document).ready(function () {
    function renderMovies(movieArray){
        var finalHTML = '';

        movieArray.forEach(function(currentMovie){
        finalHTML += '<div class="movie card">';
        finalHTML += '<img class="card-img-top" src="'+ currentMovie.Poster +'" alt="Card image cap"/>';
        finalHTML += '<div class="card-body">';
        finalHTML += '<p class="title card-title">' + currentMovie.Title + '</p>';
        finalHTML += '<p class="card-substitute release">' + currentMovie.Year + '</p></div>';
        finalHTML += '<div data-id="' + currentMovie.imdbID + '" class="button card-footer text-center">';
        finalHTML += '<a href="#" class="btn btn-primary">Add!</a>';
        finalHTML += '</div> </div>';

    });
        return finalHTML;
    }

    //Set up click listener
    $('.movies-container').on('click', '.button', function(){
        var imdbID = $(this).data('id');
        var movie = movieData.find(function(currentMovie){
            return currentMovie.imdbID == imdbID;
        });
        var watchlistJSON = localStorage.getItem('watchlist');
        var watchlist = JSON.parse(watchlistJSON);

        if (watchlist == null){
        watchlist = [];
        }
        watchlist.push(movie);
        
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem('watchlist', watchlistJSON);
    });
    

    //var testHTML = renderMovies(movieData);
    //$('.movies-container').html(testHTML);
    
    $('form').on('submit', function(e){
     e.preventDefault();
     var searchString = $('.search-bar').val();
     var urlEncodedSearchString = encodeURIComponent(searchString);
     $.ajax({
         url: "http://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString,
         method: "GET",
         success: function(response) {
             movieData = response.Search;
             var movieHTML = renderMovies(response.Search);
             $('.movies-container').html(movieHTML);
         }
     })   
   });
});

   