import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	classNames: ['banner-container'],
	_initSlider: function() {
        $('#da-slider').cslider({
        	current:0,
            autoplay: true,
            bgincrement: 0
        });
        // var owl = $("#owl-demo");
        // owl.owlCarousel();
        // // Custom Navigation Events
        // $(".next").click(function () {
        //     owl.trigger('owl.next');
        // })
        // $(".prev").click(function () {
        //     owl.trigger('owl.prev');
        // })
        // var bHeight = $(".banner-container").height();
        // console.log(bHeight);
        // $('#da-slider').height(bHeight);
        $(window).resize(function () {
            var bHeight = $(".banner-container").height();
            $('#da-slider').height(bHeight);
        });
	}.on('didInsertElement')
});