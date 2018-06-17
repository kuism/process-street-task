(function () {
	'use strict';
	angular.module('myApp.theme').service('preloader', preloader);

	/** @ngInject */
	function preloader($q, $localStorage, $rootScope, $http) {
		return {
			loadImg: function (src) {
				var d = $q.defer();
				var img = new Image();
				img.src = src;
				img.onload = function(){
					d.resolve();
				};
				return d.promise;
			},
			getStoreDetails: function (params) {
				var d = $q.defer();
				$http({
					url: $rootScope.$baseUrl + '/storeAdmins/store/details',
					method: 'GET',
					headers: { storeadmin: $rootScope.$admin._id, adminhash: $rootScope.$admin.hash },
				}).then(function (response) {
					response = response.data;
					$localStorage.store = response.store_details;
					$rootScope.currentStore = response.store_details;
					if(!$localStorage.postingadminactive) {
						$rootScope.$store = $localStorage.store;
					}
                    $rootScope.$eventId = $rootScope.currentStore.event_id;
					$rootScope.loadMultipleStoresAndConfigs();
					d.resolve();
				}, function () {
					d.resolve();
				});
				return d.promise;
			},
			getStoreConfig: function (params) {
				var d = $q.defer();
				$http({
					url: $rootScope.$baseUrl + '/stores/configs',
					method: 'GET',
					headers: { storeadmin: $rootScope.$admin._id, adminhash: $rootScope.$admin.hash },
				}).then(function (response) {
					response = response.data;
					if(!response.taxation){
						response.taxation = {
							cgst: 0,
							sgst: 0,
							service_charge: 0
						};
					}
					$localStorage.store_config = response;
					$rootScope.$allStoresWithConfigsHash = {};
					$rootScope.$allStoresWithConfigsHash[response.store_id] = response;
					$localStorage.store_config.sms_left = $localStorage.store_config.sms_total - $localStorage.store_config.sms_sent || 0;
					$rootScope.$store_config = $localStorage.store_config;
					$rootScope.setSocialMedia();
					if(!$localStorage.postingadminactive) {
						$rootScope.$store_config = $localStorage.store_config;
					}
					d.resolve();
				}, function () {
					d.resolve();
				});
				return d.promise;
			},
			getAdminDetails: function (params) { 
				var d = $q.defer();
				$http({
					url: $rootScope.$baseUrl + '/storeAdmins/details?store_admin_id=' + $localStorage.admin._id,
					method: 'GET',
					headers: { storeadmin: $rootScope.$admin._id, adminhash: $rootScope.$admin.hash },
				}).then(function (response) {
					response = response.data;
					$localStorage.admin = response;
					if(!$localStorage.postingadminactive) {
						$rootScope.$admin = $localStorage.admin;
					}
					d.resolve();
				}, function () {
					d.resolve();
				});
				return d.promise;
			}
		}
	}
})();