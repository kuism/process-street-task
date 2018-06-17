(function () {
	'use strict';
	angular.module('myApp.pages')
		.filter('orderObjectBy', function () {
			return function (input, attribute) {
				if (!angular.isObject(input)) return input;

				var array = [];
				for (var objectKey in input) {
					array.push(input[objectKey]);
				}

				array.sort(function (a, b) {
					a = parseInt(a[attribute]);
					b = parseInt(b[attribute]);
					return b - a;
				});
				return array;
			}
		}).filter('trusted', ['$sce', function ($sce) {
			return function (url) {
				return $sce.trustAsResourceUrl(url);
			};
		}]);;
})();