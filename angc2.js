define([], function () {
	console.log('c2');

	angular
		.module('ANG')
		.controller('C2', function ($scope) {
			$scope.factor = 4;
		});

	return {
		init: function (viewId) {
			var $ele = $(viewId);
			if ($ele.length === 0) throw new Error('invalid $element');
			angular.bootstrap($ele[0], ['ANG']);
		}
	}

});