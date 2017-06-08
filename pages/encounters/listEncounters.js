'use strict';
 
angular.module('companion.listEncounters', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('listEncounters', {
		url: '/mesas',
		views:{
			'': {
				templateUrl:'pages/encounters/listEncounters.html',
			 	controller: 'listEncountersCtrl'	}
		}
	})

}])

.controller('listEncountersCtrl', ['$scope','$state','$rootScope','$firebaseArray','$firebaseObject','MENU_ITEMS', 'THEME', function($scope, $state, $rootScope, $firebaseArray, $firebaseObject, MENU_ITEMS, THEME) {

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
