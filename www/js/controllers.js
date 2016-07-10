angular.module('app.controllers', [])

 


.controller('informationCtrl', function($scope)
 {
  google.load("feeds", "1");
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

.controller('resourcesCtrl', function($scope) {

})

.controller('updatesCtrl', function($scope) {
        $scope.taabo = "Hello man";
})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('landingScreenCtrl', function($scope) {

})
