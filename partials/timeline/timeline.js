angular
    .module('curriculumVitae')
    .component('timeline', {
            templateUrl: 'partials/timeline/timeline.html',
            controller: function timeline($scope, $http) {
                $scope.timelineHeader='';
                $http.get('files/timeline.json').then(function (timeline) {
                    $scope.timeline = timeline.data;
                });
            }
        }
    );