angular.module('app.controllers', [])

.controller('informationCtrl', function($scope)
 {
  google.load("feeds", "1");
  $scope.init = function() {

      var feed = new google.feeds.Feed("http://feeds.abcnews.com/abcnews/topstories");
      feed.load(function(result)
        {
            //console.log(result);
           if (!result.error) {

             for (var i = 0; i < result.feed.entries.length; i++)
             {
                $scope.entries = result.feed.entries;
               console.log($scope.entries);

             }
           }
         });
    }

google.setOnLoadCallback($scope.init);
})

.controller('resourcesCtrl', function($scope) {

})

.controller('updatesCtrl', function($scope) {

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('landingScreenCtrl', function($scope) {

})
