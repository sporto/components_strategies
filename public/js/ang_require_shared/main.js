define([
	'/js/ang_require_shared/values.js', 
	'/js/ang_require_shared/items.js', 
	'/js/ang_require_shared/totals.js'
	], function () {
	
	angular
		.module('ANG')
		.controller('MainCtrl', function ($scope) {
			console.log('MainCtrl');
			$scope.model = {
				price: 100,
				taxRate: 20,
				qty: 5
			};
			$scope.model.subTotal = function () {
				return $scope.model.price * $scope.model.qty;
			}
		});

});