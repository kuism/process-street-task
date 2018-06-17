(function () {
	'use strict';
	angular.module('myApp.theme.components').controller('PageTopCtrl', PageTopCtrlfunction);

	/** @ngInject */
	function PageTopCtrlfunction($scope, $rootScope, $state, $window, $localStorage) {

		$scope.postingadminactive = $localStorage.postingadminactive;
		$scope.signOut = function () {
			$localStorage.$reset();
			$state.reload();
		};

		$scope.onStoreChange = function () {
			$scope.$emit('parentCalls', "storeChanged", true);
		};

		$scope.resetToSuperStore = function () {
			$localStorage.postingadminactive = false;
			$window.location.reload();
		}
	}
})();