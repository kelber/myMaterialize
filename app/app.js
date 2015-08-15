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
				controller:  'WelcomeCtrl as welcomeCtrl',
				controller:  'AuthCtrl as authCtrl'

			})
			.state('ultravisao', {
				url: '/ultravisao',
				templateUrl: 'welcome/ultravisao.tpl.html',
				controller:  'WelcomeCtrl as welcomeCtrl'
			})
			.state('login', {
				url: '/login',
				templateUrl: 'auth/login.tpl.html',
				controller:  'AuthCtrl as authCtrl',
				resolve: {
					requireNoAuth: function ($state, Auth, Users) {
						Auth.$requireAuth().then(function (auth) {
							$state.go('welcome');
						}, function (error) {
							authCtrl.error = error;
						});
					}
				}


			})
			.state('register' , {
				url: '/register',
				templateUrl: 'auth/register.tpl.html',
				controller:  'AuthCtrl as authCtrl',
				resolve: {
					requireNoAuth: function ($state, Auth, Users) {
						Auth.$requireAuth().then(function (user) {
							$state.go('welcome');
						}, function (error) {
							authCtrl.error = error;
						});
					}
				}






			});
			$urlRouterProvider.otherwise('/');
			

	})
	.constant('FIREBASE_URL', 'https://slackclonek.firebaseio.com/');

