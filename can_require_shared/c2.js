define([], function () {
	console.log('c2');

	return Control = can.Control({
		init: function (ele, options) {
			var self = this;
			this.model = new can.Observe({
				factor: 4,
				total: can.compute(function () {
					return self.options.parent.attr('price') * self.model.attr('factor');
				})
			});

			var template = can.view("#c1template", {model: this.model});
			can.$('.placeholder', this.element).append(template);
		}
	});

});