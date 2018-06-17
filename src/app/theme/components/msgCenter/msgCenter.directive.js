(function () {
	'use strict';

	angular.module('myApp.theme.components').directive('msgCenter', msgCenter);

	/** @ngInject */
	function msgCenter() {
		return {
			restrict: 'E',
			templateUrl: 'app/theme/components/msgCenter/msgCenter.html',
			controller: 'MsgCenterCtrl'
		};
	}
})();