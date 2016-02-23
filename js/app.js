var wesh = angular.module('sam', ['ngRoute']);

wesh.config(function ($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'home.html',
		controller: 'HomeCtrl'
	})
	.when('/contact', {
		templateUrl: 'contact.html',
		controller: 'ContactCtrl'
	})
	.when('/work', {
		templateUrl: 'work.html',
		controller: 'WorkCtrl'
	})
	.when('/about', {
		templateUrl: 'about.html',
		controller: 'AboutCtrl'
	});
});

wesh.controller('HomeCtrl', function ($scope) {

})

wesh.controller('WorkCtrl', function ($scope) {

})

wesh.controller('ContactCtrl', function ($scope, $http) {
	$scope.sendMail = function (mail) {
		$scope.name = mail.name;
		$scope.mail = mail.address;
		$scope.content = mail.content;
		$http.post('mail.php', {name: mail.name, address: mail.address, content: mail.content})
		.success(function (data, status) {
			console.log('ok');
		})
		.error(function (data) {
			console.log('oops');
		})
	}
})

wesh.controller('AboutCtrl', function ($scope) {

});