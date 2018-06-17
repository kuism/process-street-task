(function () {
  'use strict';
	angular.module('myApp.theme').filter('appImage', appImage);

	/** @ngInject */
	function appImage(layoutPaths) {
		return function(input) {
			return layoutPaths.images.root + input;
		};
	}
})();
