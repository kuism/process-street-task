(function () {
	'use strict';
	angular.module('myApp.theme').directive('includeWithScope', includeWithScope);

	/** @ngInject */
	function includeWithScope() {
		return {
			restrict: 'AE',
			templateUrl: function(ele, attrs) {
				return attrs.includeWithScope;
			}
		};
	}
})();
