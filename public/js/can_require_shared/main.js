define(['/js/can_require_shared/values.js', '/js/can_require_shared/items.js', '/js/can_require_shared/totals.js'], 
	function (ControlValues, ControlItems, ControlTotals) {

	return Control = can.Control({
		init: function (ele, options) {
			this.model = new can.Observe({
				price: 100,
				taxRate: 20,
				qty: 5
			});

			new ControlValues('#control_values', {model: this.model});
			new ControlItems('#control_items', {model: this.model});
			new ControlTotals('#control_totals', {model: this.model});
		}
	});

});