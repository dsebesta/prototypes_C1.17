var app = angular.module('artistSearch', []);
app.controller('formController', formFunction);


function formFunction ($log, $http) {
    var self = this;
    self.artist = '';
    self.results = [];
    self.createURL = function () {
        var url = 'https://itunes.apple.com/search?term=' + self.artist + '&callback=JSON_CALLBACK';
        return url;
    };

    self.retrieveData = function () {
        $http({
            method: 'jsonp',
            url: self.createURL(),
            cache: false
        }).then (
            function successCallback(response) {
                $log.log('success: ', response);
                self.results = response.data.results;
                $log.log('results: ', self.results);
            },
            function errorCallback(response) {
                $log.log('failed: ', response)
            }
        )
    }


}
