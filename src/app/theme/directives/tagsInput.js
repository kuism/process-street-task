(function () {
	'use strict';

	angular.module('myApp.theme').directive('tagInput', tagInput);

	/** @ngInject */
	function tagInput() {
		return {
			restrict: 'A',
			scope: {
				tags: '='
			},
			link: function ($scope, elem, attr) {
				$(elem).tagsinput({
					tagClass: 'label label-' + attr.tagInput
				});
			}
		};
	}
})();