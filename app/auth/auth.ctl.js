'use strict';
angular.module('myApp')
	.controller('AuthCtrl', ['$state', 'Auth', '$interval', 
				function ($state, Auth, $interval) {
			var authCtrl = this;

			// Set interval to Messages
			$interval(function () {
				authCtrl.message = false;
				authCtrl.error = false;
			}, 4000);



				authCtrl.user = {
					email: '',
					password: ''
				};

				authCtrl.login = function () {
					Auth.$authWithPassword(authCtrl.user).then(function (auth) {
						authCtrl.message = 'Logado com sucesso';
						$state.go('welcome');
						console.log('logado');
					}, function (error) {
						authCtrl.error = error;
					});
				};

				authCtrl.register = function () {
					Auth.$createUser(authCtrl.user).then(function (user) {
						authCtrl.message = 'Usuario criado com sucesso';
						$state.go('welcome');
						console.log('usuario registrado');
					}, function (error) {
						authCtrl.error = error;
					});
				};

				}]);
