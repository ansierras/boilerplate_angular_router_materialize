'use strict';
 
angular.module('companion.detailEncounter', ['ui.router'])
 
// Declared route 
.config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('detailEncounter', {
		url: '/mesa/:encounterId',
		views:{
			'': {
				templateUrl:'pages/encounters/detailEncounter.html',
			 	controller: 'detailEncounterCtrl'	}
		}
	})

}])

.controller('detailEncounterCtrl', ['$scope','$state','$rootScope','$firebaseArray','$firebaseObject','MENU_ITEMS', 'THEME','$stateParams', function($scope, $state, $rootScope, $firebaseArray, $firebaseObject, MENU_ITEMS, THEME, $stateParams) {

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
	$scope.encounterId = $stateParams.encounterId;

}])