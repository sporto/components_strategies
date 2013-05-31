define([], function () {

	return Control = can.Control({
		init: function (ele, options) {

			var template = can.view("#control_values_template", {model: this.options.model});
			can.$('.placeholder', this.element).append(template);
		},

		'input[name=price] keyup': function (ele, ev) {
			this.options.model.attr('price', ele.val());
		}
	});

});