var app = angular.module('r07', []);

app.controller('R07Controller', function(){
	this.note = {
		id: 001,
		date: 12292015,
		title: 'My entry title',
		book: ['John 14:19-20', 'Mathew 14:19-20'],
		type: ['Promise', 'Work'],
		body: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget urna dui. Donec a malesuada ligula, a tempor lorem. In at ante porttitor, molestie tortor eget, eleifend arcu. In iaculis ornare felis, eget tristique ante. Aenean non arcu ultrices, porta est eu, semper lorem. Vivamus dictum velit odio, ut cursus massa laoreet lobortis. Nunc sollicitudin magna ac nulla gravida luctus. Sed urna leo, viverra sit amet porta ac, luctus malesuada magna. Morbi efficitur, risus nec ultrices finibus, ante leo rhoncus lacus, vel placerat neque nisl at tortor. In cursus gravida dignissim. Cras felis est, pharetra non ultrices eget, vehicula id sapien. Nam volutpat quam purus, id iaculis purus pulvinar ut. Morbi mollis sed diam vel vestibulum. Morbi a tortor est. Ut nec ex a nibh pulvinar ullamcorper sed at nulla.</p>'
	};
});