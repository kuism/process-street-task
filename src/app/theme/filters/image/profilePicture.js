(function () {
	'use strict';

	angular.module('myApp.theme').filter('profilePicture', profilePicture);

	/** @ngInject */
	function profilePicture(layoutPaths) {
		return function(input, ext) {
			ext = ext || 'png';
			return layoutPaths.images.profile + input + '.' + ext;
		};
	}
})();
