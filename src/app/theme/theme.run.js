(function () {
	'use strict';

	angular.module('myApp.theme')
		.run(setRootVariables)
		.run(themeRun)

	/** @ngInject */
	function setRootVariables($rootScope, $localStorage) {
		$rootScope.$pageFinishedLoading = false;
	};

	function themeRun($timeout, $rootScope, $localStorage, $q, layoutPaths, preloader, baSidebarService, themeLayoutSettings) {
		$rootScope.$pageFinishedLoading = false;
		function finishLoading() {
			$rootScope.$baSidebarService = baSidebarService;
			$rootScope.$pageFinishedLoading = true;
		}
		
        $timeout(function () {
            if (!$rootScope.$pageFinishedLoading) { finishLoading(); }
        }, 3000);
	};

})();