define([], function () {

	return Control = can.Control({
		init: function (ele, options) {
			var self = this;

			var template = can.view("#control_items_template", {model: this.options.model});
			can.$('.placeholder', this.element).append(template);
		},

		'input[name=qty] keyup': function (ele, ev) {
			this.options.model.attr('qty', ele.val());
		}

	});

});