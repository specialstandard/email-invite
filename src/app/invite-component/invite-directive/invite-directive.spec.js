import angular from 'angular';
import 'angular-mocks';
describe('invite directive test', function(){

  var $scope

  beforeEach( inject( function( $rootScope, $compile){
    $scope = $rootScope.$new()
    var element = angular.element("<invite-directive></invite-directive>")
    template = $compile(element)($scope)
    $scope.$digest()
    controller = element.controller
  }))

  it('should initialize request modal to false', inject( function(){
    expect($scope.showRequestModal).toBeFalsey()
  }))
})
