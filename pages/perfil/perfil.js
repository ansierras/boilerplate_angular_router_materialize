'use strict';
 
angular.module('companion.perfil', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('perfil', {
		url: '/perfil',
		views:{
			'': {
				templateUrl:'pages/perfil/perfil.html',
			 	controller: 'perfilCtrl'	}
		}
	})

}])

.controller('perfilCtrl', ['$scope','$state','$rootScope','$firebaseArray','$firebaseObject','MENU_ITEMS','THEME', function($scope, $state, $rootScope, $firebaseArray, $firebaseObject, MENU_ITEMS, THEME) {
	//************Necesario para el MENU!!! ******************
	$scope.menu=MENU_ITEMS;
	$scope.menuClasses=['active','','']
	$(".button-collapse").sideNav();
	$scope.goto = function(destino){
		$state.go(destino);
	}
	//*********************************************************
	//************ Constantes TEMA ******************
	$scope.theme = THEME;
	//***********************************************

}])
