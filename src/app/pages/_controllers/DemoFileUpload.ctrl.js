(function () {
	'use strict';

	angular.module('myApp').controller('DemoFileUploadController', DemoFileUploadController);

    var isOnGitHub = window.location.hostname === 'blueimp.github.io',
        url = isOnGitHub ? '//jquery-file-upload.appspot.com/' : 'server/php/';

	/** @ngInject */
	function DemoFileUploadController($scope, $http, $filter, $window) {
        $scope.options = {
            url: 'https://upload.wistia.com/'
        };
        if (!isOnGitHub) {
            $scope.loadingFiles = true;
            $http.get(url).then(function (response) {
                    $scope.loadingFiles = false;
                    $scope.queue = response.data.files || [];
                },
                function () {
                    $scope.loadingFiles = false;
                }
            );
        }
	}

})();