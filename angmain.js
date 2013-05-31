define([], function () {
	console.log('parent loaded');

	angular
		.module('ANG')
		.controller('Parent', function ($scope) {
			$scope.price = 100;
		});

	return {
		init: function (viewId) {
			var $ele = $(viewId);
			if ($ele.length === 0) throw new Error('invalid $element');
			angular.bootstrap($ele[0], ['ANG']);
		}
	}
});