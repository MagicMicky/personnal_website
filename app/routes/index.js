import Ember from 'ember';

export default Ember.Route.extend({
	queryParams: {
		lang: {
			refreshModel:true
		}
	},
	model(params) {
		//console.log(params.lang);
		if(params.lang==="fr") {
			return this.store.findRecord('site', 1);
		} else {
			return this.store.findRecord('site', 2);
		}
	},
});
