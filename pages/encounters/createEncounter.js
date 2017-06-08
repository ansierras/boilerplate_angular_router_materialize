'use strict';
 
angular.module('companion.createEncounter', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('createEncounter', {
		url: '/crearEncuentro',
		views:{
			'': {
				templateUrl:'pages/encounters/createEncounter.html',
			 	controller: 'createEncounterCtrl'	}
		}
	})

}])

.controller('createEncounterCtrl', ['$scope','$state','$rootScope','$firebaseArray','$firebaseObject','MENU_ITEMS', 'THEME', function($scope, $state, $rootScope, $firebaseArray, $firebaseObject, MENU_ITEMS, THEME) {

	//************Necesario para el MENU!!! ******************
	$scope.menu=MENU_ITEMS;
	$scope.menuClasses=['','active','']
	$(".button-collapse").sideNav();
	$scope.goto = function(destino){
		$state.go(destino);
	}
	//*********************************************************
	//************ Constantes TEMA ******************
	$scope.theme = THEME;
	//***********************************************


}])
