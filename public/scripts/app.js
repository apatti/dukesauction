var dukesapp = angular.module('dukesapp', ['firebase']);

dukesapp.controller('MainCtrl',function($scope,$firebaseAuth){
	var ref = new Firebase('https://radiant-fire-3138.firebaseio.com/');
	
	var auth = $firebaseAuth(ref);
	auth.$authWithOAuthPopup("google").then(function(authData){
		$scope.username = authData.google.displayName;
	    }).catch(function(error){
		    alert("Authentication failed");
		    console.log("Authentication failed:",error);
		});
    });