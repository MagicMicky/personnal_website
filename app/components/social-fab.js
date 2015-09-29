import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	actions: {
		closeButton: function() {
			Ember.$('mainbtn').setAttribute('data-mfb-state', 'closed');
			
		}
	}
});


