(function () {
	'use strict';
	angular.module('myApp.pages.home', [
		'myApp.pages.home.upload'
	]).config(routeConfig);

	/** @ngInject */
	function routeConfig($stateProvider) {
		$stateProvider.state('/', {
			url: '/',
			templateUrl: 'app/pages/home/upload_page/upload.html',
			controller: 'UploadPageCtrl',
			title: 'Home',
            sidebarMeta: {
                icon: 'ion-android-home',
                order: 0
            }
		});
	}
})();