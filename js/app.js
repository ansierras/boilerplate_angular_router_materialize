'use strict';
var companion = angular.module('companion', [
    'ui.router',
    'firebase',
    'companion.perfil',
    'companion.login',
    'companion.detailGroup',
    'companion.listGroups',
    'companion.createGroup',
    'companion.listEncounters',
    'companion.detailEncounter',
    'companion.createEncounter']);

companion.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/perfil');
});

