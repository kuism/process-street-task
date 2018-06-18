describe('UploadPageCtrl', function () {

  var controller = null;
  $scope = null;

  beforeEach(function () {
    module('myApp');
  });

});

describe('routes', function(){

  beforeEach(function () {
    module('myApp');
  });

  beforeEach(inject(function (_$httpBackend_, _$route_, _$location_, $rootScope) {
    $httpBackend = _$httpBackend_;
    $route = _$route_;
    $location = _$location_;
    $scope = $rootScope.$new();
  }));

  it('should load the one.html template', function(){
    $httpBackend.whenGET('partials/one.html').respond('...');
    $scope.$apply(function() {
      $location.path('/one');
    });
    assert.equal($route.current.templateUrl, 'partials/one.html');
    assert.equal($route.current.controller, 'TestOneController');
  });

});