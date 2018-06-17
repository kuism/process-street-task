(function () {
	'use strict';
	angular.module('myApp.theme').directive('animateOnClick', directiveFn);

	/** @ngInject */
	function directiveFn() {
		return {
			scope: {
				animationClass: '='
			},
			link: function (scope, elem, attrs) {
				elem.on('click', function () {
					var self = angular.element(this);
					$animate.addClass(self, 'animated '+scope.animateClass, function () {
						self.removeClass('animated ' + scope.animateClass);
					});
				});
			}
		};
	}
})();