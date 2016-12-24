import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './dashboard.html';


Template.dashboard.created = function(){  
	console.log("created");


}

Template.dashboard.rendered = function(){ 
	console.log("rendered");

}

Template.dashboard.helpers({

	names(){
		let seed_names = [{name: 'John Doe',dob: '1994/4/30'},{name: 'Mary Johnson',dob: '1999/8/30'}];
		return seed_names;
	},
})