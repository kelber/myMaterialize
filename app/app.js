'use strict';
angular.module('myApp', [
		'firebase',
		'ui.router',
		'angular-md5'

	])
	.config(function ($stateProvider, $urlRouterProvider) {
			$stateProvider
			.state('welcome', {
				url: '/',
				templateUrl:  'welcome/index.html',
				controller:  'WelcomeCtrl as welcomeCtrl'

			});
			$urlRouterProvider.otherwise('/');
			

	})
	.constant('FIREBASE_URL', 'https://www.slackclonek.firebaseio.com/');


