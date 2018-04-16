$(document).ready(function () {
    function renderMovies(movieArray){
        var finalHTML = '';

        movieArray.forEach(function(currentMovie){
        finalHTML += '<div class="movie card">';
        finalHTML += '<img class="card-img-top" src="'+ currentMovie.Poster +'" alt="Card image cap"/>';
        finalHTML += '<div class="card-body">';
        finalHTML += '<p class="title card-title">' + currentMovie.Title + '</p>';
        finalHTML += '<p class="card-substitute release">' + currentMovie.Year + '</p></div>';
        finalHTML += '<div class="button card-footer text-center">';
        finalHTML += '<a href="#" class="btn btn-primary">Add!</a>';
        finalHTML += '</div> </div>';

    });
        return finalHTML;
    }
   
    var testHTML = renderMovies(movieData);
    $('.movies-container card-columns').html(testHTML);
    
    
    //$("form").submit(function(e){
     //   e.preventDefault();
    //    var renderedHTML = renderMovies(movieData);
    //    $('.movies-cont').append(renderedHTML);
   // });
});