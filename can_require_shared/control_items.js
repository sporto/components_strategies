define([], function () {

	return Control = can.Control({
		init: function (ele, options) {
			var self = this;

			var subtotalCompute = can.compute(function () {
				return self.options.model.attr('price') * self.options.model.attr('qty');
			});

			this.options.model.attr('subTotal', subtotalCompute);

			var template = can.view("#control_items_template", {model: this.options.model});
			can.$('.placeholder', this.element).append(template);
		},

		'input[name=qty] keyup': function (ele, ev) {
			this.options.model.attr('qty', ele.val());
		}

	});

});