app.controller('planController', function($scope) {
    $scope.add = function() {
        $scope.plans.push({
            name: $scope.name,
            value: $scope.value,
            startdate: $scope.startdate,
            enddate: $scope.enddate
        });

        $scope.name = '';
        $scope.value = '';
        $scope.startdate = '';
        $scope.enddate = '';
    }
});