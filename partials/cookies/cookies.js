angular
    .module('curriculumVitae')
    .component('cookies', {
            templateUrl: 'partials/cookies/cookies.html',
            controller: function cookies($scope, $localStorage, $sessionStorage) {

                $scope.localeStorage = $localStorage;
            }
        }
    );