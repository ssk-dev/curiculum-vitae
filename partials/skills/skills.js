angular
    .module('curriculumVitae')
    .component('skills', {
            templateUrl: 'partials/skills/skills.html',
            controller: function skills($scope, $http) {
                var fullstackLabels = [];
                var fullstackDatas = [];
                var defaultLabels = [];
                var defaultDates = [];
                var newLabels = [];
                var newDates = [];
                $http.get('files/skills.json').then(function (skillsFrom) {
                    getSkills(skillsFrom.data, 'fullstack', 'level');
                    $scope.skills = skillsFrom.data;
                });

                function getSkills(object, skillname, skillvalues) {
                    for (var skillkeys in object[skillname]) {
                        getValuesOfSkill(skillname, object[skillname][skillkeys][skillvalues]);
                        if (skillname == 'fullstack') {
                            fullstackLabels.push([skillkeys]);
                            defaultLabels.push([skillkeys]);
                        }
                    }
                };

                function getValuesOfSkill(skillname, value) {
                    if (skillname == 'fullstack') {
                        fullstackDatas.push([value]);
                        defaultDates.push([value])
                    }
                };

                $scope.setDefaultSkills = function(){
                    $scope.fullstackLabels = defaultLabels;
                    $scope.fullstackDatas = [defaultDates];
                    console.log('set to default skill')
                };
                
                $scope.setSubSkillValues = function( keys, values){

                        for (var key in keys) {
                            console.log(key)
                            $scope.fullstackLabels = newLabels.push([key]);
                        }
                        for (var value in values[keys]) {
                            console.log(value)
                            $scope.fullstackDatas = newDates.push([value]);
                        }
                };

                $scope.isDisplayed = function(value, contentIndex){
                    if(value == contentIndex){
                        return true;
                    } else {
                        return false;
                    }

                }
                $scope.contentToShow = 0;

                $scope.prev = function(){
                    $scope.contentToShow -= 1;
                };

                $scope.next = function(){
                    $scope.contentToShow += 1;
                };

                $scope.fullstackLabels = fullstackLabels;
                $scope.fullstackOptions = {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false,
                        text: 'Bussiness'
                    },
                    scale: {
                        ticks: {
                            beginAtZero: true
                        }
                    },
                    tooltips:{ mode:'index',axis: 'y'},
                    colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360']
                };
                $scope.series = [];
                $scope.fullstackDatas = [fullstackDatas];
                $scope.datas = [
                    65, 59, 90, 81, 56, 55, 40
                ];
            }
        }
    );