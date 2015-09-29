import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['row-item'],
	_initFancybox_: function() {
		Ember.$(".fancybox").attr('rel', 'gallery')
    .fancybox({
        beforeLoad: function() {
            this.title = Ember.$(this.element).attr('data-title');
        }
    });
	}.on('didInsertElement')
});