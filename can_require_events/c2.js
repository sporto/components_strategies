define([], function () {
	console.log('c2');

	var Control = can.Control({
		init: function (ele, options) {
			var self = this;
			this.model = new can.Observe({
				price: 100,
				factor: 4,
				total: can.compute(function () {
					return self.model.attr('price') * self.model.attr('factor');
				})
			});

			var template = can.view("#c1template", {model: this.model});
			can.$('.placeholder', this.element).append(template);
		},

		'{window} main.changed': function(el, ev, data) {
			this.model.attr('price', data.price);
		}
	});

	return {
		init: function (viewId) {
			var $ele = $(viewId);
			if ($ele.length === 0) throw new Error('invalid $element');
			return new Control($ele);
		}
	}

});