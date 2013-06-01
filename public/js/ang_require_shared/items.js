define([], function () {

	angular
		.module('ANG')
		.controller('ItemsCtrl', function ($scope) {
			console.log('ItemsCtrl');
			$scope.title = "Items";
		});

});