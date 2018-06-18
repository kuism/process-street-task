(function () {
	'use strict';

	angular.module('myApp.pages.home.upload').controller('UploadPageCtrl', PageCtrl);

	/** @ngInject */
	function PageCtrl($scope) {
        $scope.options = {
            url: 'https://upload.wistia.com/'
        };

        $scope.videoClass = {
            name: "none"
        };

        $scope.$on("fileuploadalways", function (e, data) {
            if (data.result) {
                if ($scope.videoClass.name == "none") {
                    $scope.videoClass.name = "wistia_async_" + data.result.hashed_id;
                } else {
                    var video = Wistia.api("uploadedVideo");
                    if (video) {
                        video.replaceWith(data.result.hashed_id)
                    }
                }
            }
        });

        $scope.done = function () {
            console.log("done done")
        }
	}
})();
