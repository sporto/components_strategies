define(['c1', 'c2'], function (C1, C2) {
	console.log('parent loaded');

	return Control = can.Control({
		init: function (ele, options) {
			this.model = new can.Observe({
				price: 100
			});

			var template = can.view("#maintemplate", {model: this.model});
			can.$('>.placeholder', this.element).append(template);

			new C1('#c1', {parent: this.model});
			new C2('#c2', {parent: this.model});
		},

		'input[name=price] keyup': function (ele, ev) {
			this.model.attr('price', ele.val());
		}
	});

});