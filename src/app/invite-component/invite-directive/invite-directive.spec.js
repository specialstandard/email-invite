
describe('invite directive test', () => {

  var $scope
  beforeEach( () => {
    module("app");
    inject( ( $rootScope, $compile ) => {
      $scope = $rootScope.$new()
      var element = angular.element("<invite-directive></invite-directive>")
      template = $compile(element)($scope)
      is = element.isolateScope();
      $scope.$digest()
      controller = element.controller
    })

  })

  it('should initialize request and success modals to false', inject( () => {
    expect(is.ctrl.showRequestModal).toBe(false)
    expect(is.ctrl.showSuccessModal).toBe(false)

  }))

  it('clicking request should set request modal to true', inject( () => {
    is.ctrl.onClickRequest()
    expect(is.ctrl.showRequestModal).toBe(true)
  }))

  it('clicking send should NOT process empty inputs', inject( () => {
    is.ctrl.user = {
        name:'',
        email:'',
        emailConf: ''
    }
    spyOn(is.ctrl.apiService, 'postData')

    is.ctrl.onClickSend()
    expect(is.ctrl.requestProcessing).toBe(false)
    expect(is.ctrl.apiService.postData).not.toHaveBeenCalled()
  }))

  it('clicking send should NOT process name less than 3 characters', inject( () => {
    is.ctrl.user = {
        name:'ab',
        email:'brian.ardito@gmail.com',
        emailConf: 'brian.ardito@gmail.com'
    }
    spyOn(is.ctrl.apiService, 'postData')

    is.ctrl.onClickSend()
    expect(is.ctrl.requestProcessing).toBe(false)
    expect(is.ctrl.apiService.postData).not.toHaveBeenCalled()
  }))

  it('clicking send should process name > 3 characters', inject( () => {
    is.ctrl.user = {
        name:'abc',
        email:'brian.ardito@gmail.com',
        emailConf: 'brian.ardito@gmail.com'
    }
    spyOn(is.ctrl.apiService, 'postData')

    is.ctrl.onClickSend()
    expect(is.ctrl.requestProcessing).toBe(true)
    expect(is.ctrl.apiService.postData).toHaveBeenCalled()
  }))

  it('should not process different email and confirmation email', inject( () => {
    is.ctrl.user = {
        name:'abc',
        email:'brian.ardito@gmail.com',
        emailConf: 'fake@gmail.com'
    }
    spyOn(is.ctrl.apiService, 'postData')

    is.ctrl.onClickSend()
    expect(is.ctrl.requestProcessing).toBe(false)
    expect(is.ctrl.apiService.postData).not.toHaveBeenCalled()
  }))

})
