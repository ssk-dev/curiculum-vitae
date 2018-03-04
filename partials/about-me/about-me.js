angular
    .module('curriculumVitae')
    .component('aboutMe', {
            templateUrl: 'partials/about-me/about-me.html',
            controller: function aboutMe($scope, $http) {
                console.log('about-me controller');
                $http.get('files/about-me.json').then(function (myself) {
                    $scope.my = myself.data;
                });
                $http.get('files/company.json').then(function (company) {
                    $scope.company = company.data;
                });
            }
        }
    );