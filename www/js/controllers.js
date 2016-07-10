angular.module('app.controllers', [])

.controller('informationCtrl', function($scope)
 {


  $scope.init = function() {

      var feed = new google.feeds.Feed("https://feeds.feedburner.com/EducationWeekItmanagementandpolicy");
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


      var feed = new google.feeds.Feed("http://feeds.news24.com/articles/News24/SouthAfrica/rss");
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
