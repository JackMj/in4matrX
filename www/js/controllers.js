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

         
                $scope.entries = result.feed.entries;
                $scope.entriesLength = $scope.entries.length;
               console.log($scope.entries.content);

<<<<<<< HEAD
            
             
=======
             }
>>>>>>> 7bcd6ca13d3735022c15adf1227ab22fc6d8c320
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
