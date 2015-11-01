(function () {
	
var app = angular.module('myApp', ['ngDialog', 'ngMockE2E', 'ngRoute']);

"use strict"

//Fake backend
app.run(function($httpBackend) {
	//All backend data
	var users = [{id: 0, name: 'Andrew', surname: 'Hopkins', register: '2013-06-01', visited: '2015-08-12T15:00:00+00:00', activity: 2, peer: 6, discussion: 3, finding: 3, question: 19, others: [1]}, 
				{id: 1, name: 'David', surname: 'Kowalski', register: '2013-06-01', visited: '2015-09-31T19:00:00+00:00', activity: 3, peer: 11, discussion: 22, finding: 33, question: 44, others: [0]},
				{id: 2, name: 'Patricia', surname: '', register: '2015-06-21', visited: '2015-10-31T11:00:00+00:00', activity: 3, peer: 2, discussion: 5, finding: 55, question: 33, others: [4,5,6]},
				{id: 3, name: 'Eva', surname: 'Conner', register: '2014-05-09', visited: '2015-02-12T18:00:00+00:00', activity: 3, peer: 32, discussion: 54, finding: 23, question: 11, others: [7,8,9]},
				{id: 4, name: 'Joseph ', surname: 'Aluoch', register: '2015-08-11', visited: '2015-10-30T09:00:00+00:00', activity: 2, peer: 39, discussion: 12, finding: 0, question: 15, others: [2,5,6]},
				{id: 5, name: 'Dr.', surname: 'Halima', register: '2015-06-01', visited: '2015-10-30T15:00:00+00:00', activity: 2, peer: 46, discussion: 29, finding: 19, question: 10, others: [2,4,6]},
				{id: 6, name: 'S.E.N.', surname: 'Waweru', register: '2015-07-02', visited: '2015-10-31T06:00:00+00:00', activity: 1, peer: 13, discussion: 22, finding: 75, question: 5, others: [2,4,5]},
				{id: 7, name: 'Yumi', surname: '', register: '2014-02-15', visited: '2015-10-31T23:00:00+00:00', activity: 2, peer: 6, discussion: 31, finding: 12, question: 33, others: [3,8,9]},
				{id: 8, name: 'Mark', surname: 'Miller', register: '2014-02-06', visited: '2015-10-03T21:00:00+00:00', activity: 2, peer: 53, discussion: 43, finding: 19, question: 27, others: [3,7,9]},
				{id: 9, name: 'George', surname: '', register: '2014-09-03', visited: '2015-04-15T13:00:00+00:00', activity: 1, peer: 16, discussion: 19, finding: 11, question: 22, others: [3,7,8]}];
				
	var questions = [
		{id: 0,	authorId: 3, date: '2015-10-29', title: 'Will insulin make my patient gain weight?', follow: true, votes: 19, hot: null, related: 1, activities: 7, conversations: 3, peers: 6,
		content: "All my patients with diabetes should see an opthalmologist yearly for a dialated eye examination beginning at diagnosis in people with type 2 diabetes, and after 5 years in people with type 1 diabetes after puberty. Patients with know eye disease, symptoms of blurred vision in one eye, or blind spots may need to see their ophthalmologist more frequently.",	
		comments: [
			{id:0, authorId: 2,	answer: true, votes: 8, date: '2015-10-31', conversation: false, last: false,
			content: "Numbers or tingling in your feet should be reported to your doctor at your regular visits."},
			{id:1, authorId: 1, answer: false, votes:2, date: '2015-10-31', conversation: true, last: true,
			content: "You should check your feet daily for redness, caluses, cracks or skin breakdown."},
			{id:2, authorId: 4, answer: false, votes: -3, date: '2015-10-30', conversation: false, last: true,
			content: "When your blood sugar is low, your body gives out signs that you need food. Different people have different symptoms. You will learn to know your symptoms."},
			{id:3, authorId: 0,	answer: false, votes: 3, date: '2015-10-29', conversation: false, last: false,
			content: "Aenean hendrerit ultricies nunc, et aliquam odio efficitur at. Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."}, 
			{id:4, authorId: 8,	answer: false, votes:12, date: '2015-10-30', conversation: true, last: false,
			content: "Ut et suscipit lacus, at ullamcorper mauris. "},
			{id:5, authorId: 0,	answer: false, votes:5, date: '2015-10-31', conversation: true, last: true,
			content: "Aenean ac mauris id massa venenatis pellentesque nec non lorem."}]
		},
		{id: 1,	authorId: 0, date: '2015-08-19', title: 'Vegan diet in diabetes treatment?', follow: true, votes: 15, hot: null, related: 2, activities: 10, conversations: 5, peers: 9,
		content: "Pellentesque dolor quam, accumsan sit amet tempus sed, pretium commodo massa. Nullam ut ante ac lectus egestas sodales. Nam vestibulum, sem et lobortis pharetra, felis mi euismod est, vitae vehicula nulla ante porttitor arcu. In vel aliquet quam, tempus dictum eros. Vivamus at nisi in enim tristique viverra.",	
		comments: [
			{id:0, authorId: 2,	answer: true, votes: 15, date: '2015-10-31', conversation: false, last: false, 
			content: "Sed cursus enim at ante egestas varius. Praesent a ex commodo, dictum dolor at, iaculis felis."},
			{id:1, authorId: 7, answer: false, votes:21, date: '2015-10-31', conversation: true, last: true,
			content: "Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."},
			{id:2, authorId: 8, answer: false, votes: 11, date: '2015-10-30', conversation: false, last: true,
			content: "Maecenas eu justo urna. Vestibulum sagittis mattis felis, sit amet pulvinar diam congue sed. Vestibulum egestas dui non metus commodo aliquam."},
			{id:3, authorId: 3, answer: false, votes: 15, date: '2015-10-30', conversation: false, last: false,
			content: "Nullam in laoreet sapien. Nulla lorem urna, volutpat eu elit eget, pretium consectetur magna."},
			{id:4, authorId: 1, answer: false,  votes:14, date: '2015-10-31', conversation: true, last: false,
			content: "Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."},
			{id:5, authorId: 4, answer: false,  votes:5, date: '2015-10-31', conversation: true, last: false,
			content: "Morbi ut diam in arcu accumsan luctus non nec lorem."},
			{id:6, authorId: 9, answer: false,  votes:-2, date: '2015-10-31', conversation: true, last: false,
			content: "Ut ullamcorper facilisis ex, a cursus quam blandit nec."},
			{id:7, authorId: 6, answer: false,  votes:19, date: '2015-10-31', conversation: true, last: true,
			content: "Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."}]
		},
		{id: 2,	authorId: 4, date: '2015-06-12', title: 'Vegan diet to stop diabetes progress', follow: true, votes: 39, hot: 0, related: 5, activities: 3,  conversations: 0, peers: 4,
		content: "Aenean ac mauris id massa venenatis pellentesque nec non lorem. Nullam in laoreet sapien. Nulla lorem urna, volutpat eu elit eget, pretium consectetur magna. Ut metus justo, malesuada nec congue sit amet, facilisis quis orci. Sed cursus enim at ante egestas varius.",	
		comments: [
			{id:0, authorId: 5,	answer: true, votes: 21, date: '2015-10-31', conversation: false, last: true,
			content: "Nullam in laoreet sapien. Nulla lorem urna, volutpat eu elit eget, pretium consectetur magna."},
			{id:1, authorId: 3, answer: false, votes: -5, date: '2015-10-30', conversation: false, last: true,
			content: "Ut et suscipit lacus, at ullamcorper mauris."},
			{id:2, authorId: 0, answer: false, votes: 2, date: '2015-10-30', conversation: false, last: true,
			content: "Duis non sapien eget libero sagittis tincidunt. Nulla tristique et quam vitae laoreet. Nam facilisis odio in sodales dapibus. Ut sit amet tellus eu urna mattis elementum."}]
		},
		{id: 3,	authorId: 0, date: '2015-06-08', title: 'Insulin morbi fermentum tempus est eget ornare?', follow: false, votes: 20, related: 2, activities: 10,  conversations: 5, peers: 9,
		content: "Pellentesque dolor quam, accumsan sit amet tempus sed, pretium commodo massa. Nullam ut ante ac lectus egestas sodales. Nam vestibulum, sem et lobortis pharetra, felis mi euismod est, vitae vehicula nulla ante porttitor arcu. In vel aliquet quam, tempus dictum eros. Vivamus at nisi in enim tristique viverra.",	
		comments: [
			{id:0, authorId: 2,	answer: true, votes: 15, date: '2015-10-31', conversation: false, last: false,
			content: "Sed cursus enim at ante egestas varius. Praesent a ex commodo, dictum dolor at, iaculis felis."},
			{id:1, authorId: 9, answer: false, votes:21, date: '2015-10-31', conversation: true, last: true,
			content: "Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."},
			{id:2, authorId: 4, answer: false, votes: 11, date: '2015-10-30', conversation: false, last: true,
			content: "Maecenas eu justo urna. Vestibulum sagittis mattis felis, sit amet pulvinar diam congue sed. Vestibulum egestas dui non metus commodo aliquam."},
			{id:3, authorId: 3, answer: false, votes: 15, date: '2015-10-30', conversation: false, last: false,
			content: "Nullam in laoreet sapien. Nulla lorem urna, volutpat eu elit eget, pretium consectetur magna."},
			{id:4, authorId: 1, answer: false,  votes:14, date: '2015-10-31', conversation: true, last: false,
			content: "Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."},
			{id:5, authorId: 8, answer: false,  votes:5, date: '2015-10-31', conversation: true, last: false,
			content: "Morbi ut diam in arcu accumsan luctus non nec lorem."},
			{id:6, authorId: 7, answer: false,  votes:-2, date: '2015-10-31', conversation: true, last: false,
			content: "Ut ullamcorper facilisis ex, a cursus quam blandit nec."},
			{id:7, authorId: 6, answer: false,  votes:19, date: '2015-10-31', conversation: true, last: true,
			content: "Quisque facilisis, diam eu pellentesque euismod, odio leo rutrum urna, sit amet viverra turpis augue vitae ipsum."}]
		},
		{id: 4,	authorId: 4, date: '2015-05-22', title: 'Vegan praesent convallis quis sapien a ultricies?', follow: false, votes: 11, related: 5, activities: 3,  conversations: 0, peers: 4,
		content: "Aenean ac mauris id massa venenatis pellentesque nec non lorem. Nullam in laoreet sapien. Nulla lorem urna, volutpat eu elit eget, pretium consectetur magna. Ut metus justo, malesuada nec congue sit amet, facilisis quis orci. Sed cursus enim at ante egestas varius.",	
		comments: [
			{id:0, authorId: 5,	answer: true, votes: 21, date: '2015-10-31', conversation: false, last: true,
			content: "Nullam in laoreet sapien. Nulla lorem urna, volutpat eu elit eget, pretium consectetur magna."},
			{id:1, authorId: 3, answer: false, votes: -5, date: '2015-10-30', conversation: false, last: true,
			content: "Ut et suscipit lacus, at ullamcorper mauris."},
			{id:2, authorId: 0, answer: false, votes: 2, date: '2015-10-30', conversation: false, last: true,
			content: "Duis non sapien eget libero sagittis tincidunt. Nulla tristique et quam vitae laoreet. Nam facilisis odio in sodales dapibus. Ut sit amet tellus eu urna mattis elementum."}]
		}
	];
	
	//Backend requests

	$httpBackend.when('GET', /\.html$/).passThrough();
	
	$httpBackend.whenGET(new RegExp('\\/users\\/[0-9]+')).respond(function(method,url,data) {
		var userRegExp = new RegExp('\\/users\\/([0-9]+)');
		var userId = url.match(userRegExp)[1];
		return [200, users[userId], {}];
	});
	
	$httpBackend.whenGET(new RegExp('/users')).respond(function(method,url,data) {
		return [200, users, {}];
	});
	
	$httpBackend.whenGET(new RegExp('\\/question\\/[0-9]+')).respond(function(method,url,data) {
		var questionRegExp = new RegExp('\\/question\\/([0-9]+)');
		var questionId = url.match(questionRegExp)[1];
		return [200, questions[questionId], {}];
	});
	
	$httpBackend.whenGET(new RegExp('/questions')).respond(function(method,url,data) {
		return [200, questions, {}];
	});
});

app.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
			when('/', {
				templateUrl: 'home.html',
				controller: 'MyCtrl'
			}).
			when('/question/:id', {
				templateUrl: 'question.html',
				controller: 'MyCtrl'
			}).
			otherwise({
				redirectTo: '/'
			});
	}
]);

app.controller('MyCtrl', ['$scope', '$http', 'ngDialog', 'questionService', function ($scope, $http, ngDialog, questionService) {
		
	//Watchers
	$scope.$watch("profile", function (newValue, oldValue) {
    	if (newValue != null && newValue != oldValue) {
        $scope.profile = newValue;
		
		$scope.register = moment(newValue.register, 'YYYYMMDD').fromNow();
		};
    });
	
	//Mocked data
	$scope.getUsers = function(id) {
    	$http.get('/users').success(function(data) {
      		$scope.users = data;
    	});
  	};
	
	$scope.getProfile = function(id) {
    	$http.get('/users/' + id).success(function(data) {
      		$scope.profile = data;
    	});
  	};
	  
	$scope.getQuestions = function(id) {
    	$http.get('/questions').success(function(data) {
      		$scope.questions = data;
    	});
  	};
	  
	 $scope.getSingleQuestion = function(id) {
    	$http.get('/question/' + id).success(function(data) {
      		$scope.singleQuestion = data;
			
			questionService.setData(data);
    	});
  	};	
	
	//CHANGE MOCKED DATA HERE  
	$scope.getUsers();
	$scope.getQuestions();
	$scope.getSingleQuestion(0);
	//$scope.getProfile(5);  
	
	//Opens ngDialog modal window
	$scope.openProfile = function(id) {
		$scope.getProfile(id);
		ngDialog.open({ 
			template: 'profile.html',
			scope: $scope
		});
	};
	
	$scope.openQuestion = function(id) {
		$scope.getSingleQuestion(id);
	};
	
	//Sort	
	$scope.orderType = 'date';
	$scope.active = true;
	
	$scope.changeOrderToHot = function() {
		$scope.orderType = 'votes';
		$scope.active = false;
	};
	
	$scope.changeOrderToRecent = function() {
		$scope.orderType = 'date';
		$scope.active = true;
	};
	
	//Voting system	
	$scope.voteQuestionUp = function () {
		$scope.singleQuestion.votes += 1;
	};
	
	$scope.voteQuestionDown = function () {
		$scope.singleQuestion.votes -= 1;
	};
	
	$scope.voteUp = function (commentId) {
		$scope.singleQuestion.comments[commentId].votes += 1;
	};
	
	$scope.voteDown = function (commentId) {
		$scope.singleQuestion.comments[commentId].votes -= 1;
	};
	
}]);

app.service("questionService", function() {
	var data = {};
	
	this.setData = function(dataModel) {
		data = dataModel;	
	};
	
	this.getData = function() {
		return data;
	}
});

app.filter("dateFilter", function(){
   return function dateFilter (date) {
	    if (date != null || date != undefined) {
			return moment(date, 'YYYYMMDD').fromNow();
		};	
	};
});

})();