(function () {
  'use strict';

  angular.module('myApp.theme').filter('plainText', plainText);

	/** @ngInject */
	function plainText() {
		return function(text) {
			return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
		};
	}

})();
