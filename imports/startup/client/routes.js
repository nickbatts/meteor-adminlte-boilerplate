import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import components
// import '../../ui/components/profile.gardens.html';
// import layouts;
import '../../ui/layouts/body.js';
// import pages;
import '../../ui/pages/404.html';
import '../../ui/pages/500.html';
import '../../ui/pages/dashboard.js';
import '../../ui/pages/general.js';

// Global route triggers
FlowRouter.triggers.enter(function(context){
  console.log('global trigger!')
  console.log('context.route.name = ' + context.route.name)
  $('body').addClass('skin-blue');
  $('body').addClass('fixed');
  // $('body').addClass('skin-black');
  // $('body').addClass('layout-boxed');
  $('body').addClass('sidebar-mini');
  // $('body').addClass('sidebar-collapse');
  // Session.set("currentRouteName", context.route.name);
  // $(window).scrollTop(0);
});

FlowRouter.route('/', {
  name: 'index',
  action() {
    console.log("Loading index");
    document.title = 'Index | AdminLTE';
    BlazeLayout.render('app_body');
  }
});

FlowRouter.route('/dashboard', {
  name: 'dashboard',
  action() {
    document.title = 'General | AdminLTE Dashboard';
    BlazeLayout.render('app_body', {content: 'dashboard'});
  }
});

FlowRouter.route('/general', {
  name: 'general',
  action() {
    document.title = 'General | AdminLTE Components';
    BlazeLayout.render('app_body', {content: 'general'});
  }
});

// the App_notFound template is used for unknown routes and missing lists
FlowRouter.notFound = {
  action() {
    BlazeLayout.render('app_body', {content: '404'});
  }
};
