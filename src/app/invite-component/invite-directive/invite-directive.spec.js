
describe('invite directive test', function(){

  var $scope
  beforeEach( function(){
    module("app");
    inject( function( $rootScope, $compile){
      $scope = $rootScope.$new()
      var element = angular.element("<invite-directive></invite-directive>")
      template = $compile(element)($scope)
      is = element.isolateScope();
      $scope.$digest()
      controller = element.controller
    })

  })

  it('should initialize request modal to false', inject( function(){
    is.ctrl.onClickRequest()
    expect(is.ctrl.showRequestModal).toBe(true)
  }))
})
