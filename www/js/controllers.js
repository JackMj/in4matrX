angular.module('app.controllers', [])

.controller('updatesCtrl', function($scope)
 {


  $scope.init = function() {

      var feed = new google.feeds.Feed("http://www.ukzn.ac.za/Feeds/NewsRSS");
        feed.setNumEntries(8);
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

.controller('resourcesCtrl', function($scope)
{


      var feed = new google.feeds.Feed("http://www.ukzn.ac.za/Feeds/NewsRSS");
        feed.setNumEntries(8);
        feed.load(function(result)
        {
              console.log("running");
           if (!result.error) {

             for (var i = 0; i < result.feed.entries.length; i++)
             {
                $scope.resources = result.feed.entries;
               console.log($scope.entries);

             }
           }
         });


})

.controller('updatesCtrl', function($scope)
 {

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('landingScreenCtrl', function($scope) {

})
