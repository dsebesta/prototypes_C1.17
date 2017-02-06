//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {
                console.log('AJAX Success function called, with the following result:', result);

                global_result = result;

                for (var i=0; i < global_result.feed.entry.length; i++) {
                    var movie_third_image = global_result.feed.entry[i]['im:image'][2].label;
                    var movie_director = global_result.feed.entry[i]['im:artist'].label;
                    var movie_title = global_result.feed.entry[i]['im:name'].label;

                    var div_element = $('<div>');
                    var movie_third_image_element = $('<img>', {
                        src: movie_third_image
                    });
                    var movie_info_element = $('<p>' + 'Title: ' + movie_title + '<br>' + 'Director: ' + movie_director + '</p>');

                    div_element.append(movie_third_image_element, movie_info_element);
                    $('#main').append(div_element);

                }
            }
        });
        console.log('End of click function');
    });
});