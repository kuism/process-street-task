(function () {
	'use strict';
	angular.module('myApp.theme.inputs').directive('baSwitcher', baSwitcher);

	/** @ngInject */
	function baSwitcher() {
		return {
			templateUrl: 'app/theme/inputs/baSwitcher/baSwitcher.html',
			scope: {
				switcherStyle: '@',
				switcherValue: '=',
				switcherChange: '=',
				switcherData: '='
			}
		};
	}
})();
