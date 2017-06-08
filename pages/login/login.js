'use strict';
 
angular.module('companion.login', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('login', {
		url: '/login',
		views:{
			'': {
				templateUrl:'pages/login/login.html',
			 	controller: 'loginCtrl'	}
		}
	})

}])

.controller('loginCtrl', ['$scope','$state','$rootScope','$firebaseArray','$firebaseObject', function($scope, $state, $rootScope, $firebaseArray, $firebaseObject) {



}])