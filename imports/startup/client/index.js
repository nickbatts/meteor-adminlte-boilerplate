//import './adminlte.js';
import './routes.js';
// import './bootstrap.js';
import './fastclick.js';
import './select2.full.js';
// import './jquery-2.2.3.min.js';
import './jquery.slimscroll.js';
import './adminlte.js';

if(Meteor.isProduction){
	console.log("Welcome to AdminLTE!\n========================================");
}else{
	console.log("Welcome to AdminLTE!\nDEVELOPMENT MODE: " + JSON.stringify(Meteor.settings) + "\n" + Meteor.release);
}
