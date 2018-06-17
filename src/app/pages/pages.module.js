(function () {
	'use strict';
	angular.module('myApp.pages', [
		'myApp.pages.home',
	]).config(routeConfig);

	/** @ngInject */
	function routeConfig($urlRouterProvider, $locationProvider) {
		$locationProvider.html5Mode(true);
		$urlRouterProvider.otherwise('/');
	};
	
})();
