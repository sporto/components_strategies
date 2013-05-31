define([], function () {

	return Control = can.Control({
		init: function (ele, options) {
			var self = this;

			var taxCompute = can.compute(function () {
				var p = self.options.model.attr('price');
				var tr = self.options.model.attr('taxRate');
				var q = self.options.model.attr('qty');
				return p * q * tr / 100;
			});

			var totalCompute = can.compute(function () {
				var p = self.options.model.attr('price');
				var tr = self.options.model.attr('taxRate');
				var q = self.options.model.attr('qty');
				var st = p * q;
				return st + (st * tr / 100);
			});

			this.options.model.attr('tax', taxCompute);
			this.options.model.attr('total', totalCompute);

			var template = can.view("#control_totals_template", {model: this.options.model});
			can.$('.placeholder', this.element).append(template);
		}
	});

});