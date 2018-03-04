angular
    .module('curriculumVitae')
    .component('persona', {
        templateUrl: 'partials/persona/persona.html',
        controller: function interests($scope, $http) {
            $http.get('files/persona.json').then(function (persona) {
                $scope.my = persona.data;
            });
        }
    });