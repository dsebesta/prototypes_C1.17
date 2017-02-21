var app = angular.module('artistSearch', []);
app.controller('formController', formFunction);


function formFunction ($log, $http) {
    var self = this;
    self.artist = '';
    self.createURL = function () {
        self.url = 'https://itunes.apple.com/search?term=' + self.artist + '&callback=JSON_CALLBACK';
        // self.url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        return self.url
    };

    self.retrieveData = function () {
        $http({
            type: 'jsonp',
            url: 'https://itunes.apple.com/search?term=derrick&callback=JSON_CALLBACK',
            cache: false
        }).then (
            function successCallback(response) {
                $log.log('success: ', response)
            },
            function errorCallback(response) {
                $log.log('failed: ', response)
            }
        )
    }


}
