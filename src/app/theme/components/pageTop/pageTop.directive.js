(function () {
	'use strict';
	angular.module('myApp.theme.components').directive('pageTop', pageTop);

	/** @ngInject */
	function pageTop() {
		return {
			restrict: 'E',
			templateUrl: 'app/theme/components/pageTop/pageTop.html',
			controller: 'PageTopCtrl'
		};
	}
})();