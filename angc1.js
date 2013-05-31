define([], function () {
	console.log('c1');

	angular
		.module('ANG')
		.controller('C1', function ($scope) {
			$scope.factor = 2;
		});

	return {
		init: function (viewId) {
			var $ele = $(viewId);
			if ($ele.length === 0) throw new Error('invalid $element');
			angular.bootstrap($ele[0], ['ANG']);
		}
	}

});