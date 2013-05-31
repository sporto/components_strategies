define([], function () {
	console.log('parent loaded');

	var Control = can.Control({
		init: function (ele, options) {
			this.model = new can.Observe({
				price: 100
			});

			var template = can.view("#maintemplate", {model: this.model});
			can.$('>.placeholder', this.element).append(template);
		},

		'input[name=price] keyup': function (ele, ev) {
			this.model.attr('price', ele.val());
			// publish an event
			this.element.trigger('main.changed', this.model);
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