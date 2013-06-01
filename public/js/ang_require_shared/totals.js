define([], function () {

	angular
		.module('ANG')
		.controller('TotalsCtrl', function ($scope) {
			console.log('TotalsCtrl');
			//$scope.price = 100;
			$scope.title = "Totals";
			$scope.model.tax = function () {
				return $scope.model.taxRate * $scope.model.subTotal();
			}
			$scope.model.total = function () {
				return $scope.model.subTotal() + $scope.model.tax();
			}
		});

});