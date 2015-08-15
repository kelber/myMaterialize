'use strict';
angular.module('myApp')
	.factory('Auth', ['FIREBASE_URL','$firebaseAuth', 
			function(FIREBASE_URL, $firebaseAuth) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		return auth;
 

	

			}]);
