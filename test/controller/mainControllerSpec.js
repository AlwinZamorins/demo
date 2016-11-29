describe("mainController",function(){
    beforeEach(module('app'));
    var $controller;
    beforeEach(inject(function(_$controller_){
        $controller == _$controller_;
    }));
    
    describe('$scope.plans',function(){
        it('Should return null',function(){
            var $scope = {};
            $scope.plans=[];
            expect($scope.plans).toEqual([]);
        })
    })
})