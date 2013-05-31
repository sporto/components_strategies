define([], function () {

	return Control = can.Control({
		init: function (ele, options) {
			var self = this;

			var compute = can.compute(function () {
				return self.options.model.attr('price') * self.options.model.attr('qty');
			});

			this.options.model.attr('total', compute);

			var template = can.view("#control_totals_template", {model: this.options.model});
			can.$('.placeholder', this.element).append(template);
		}
	});

});