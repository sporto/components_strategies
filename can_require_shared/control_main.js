define(['control_values', 'control_items', 'control_totals'], 
	function (ControlValues, ControlItems, ControlTotals) {

	return Control = can.Control({
		init: function (ele, options) {
			this.model = new can.Observe({
				price: 200,
				taxRate: 15,
				qty: 10
			});

			new ControlValues('#control_values', {model: this.model});
			new ControlItems('#control_items', {model: this.model});
			new ControlTotals('#control_totals', {model: this.model});
		}
	});

});