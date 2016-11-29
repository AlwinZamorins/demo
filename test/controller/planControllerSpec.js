describe("planController", function() {
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_) {
        $controller == _$controller_;
    }));

    describe('$scope.add', function() {
        it('Should add data to plan', function() {
            var $scope = {};
            var controller = $controller('planController',{$scope:$scope});
            $scope.name ='Alwin';
            $scope.value ='25';
            $scope.startdate ='Friday 11/11/2016';
            $scope.enddate ='Saturday 11/19/2016';
            
            $scope.add();
            expect($scope.plans).toEqual(['name':'Alwin', 'value':'25', 'startdate':'Friday 11/11/2016', 'value':'Saturday 11/19/2016']);
            expect($scope.name).toEqual('');
            expect($scope.value).toEqual('');
            expect($scope.startdate).toEqual('');
            expect($scope.enddate).toEqual('');

        })
    })
})