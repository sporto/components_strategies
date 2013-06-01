define([], function () {

	angular
		.module('ANG')
		.controller('ValuesCtrl', function ($scope) {
			console.log('ValuesCtrl');
			$scope.title = "Values";
		});

});