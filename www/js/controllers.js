angular.module('app.controllers', [])

 


.controller('updatesCtrl', function($scope)
 {
  google.load("feeds", "1");
  $scope.init = function() {

      var feed = new google.feeds.Feed("https://feeds.feedburner.com/EducationWeekItmanagementandpolicy");
      feed.setNumEntries(8);
      feed.load(function(result)
        {
            //console.log(result);
           if (!result.error) {

         
                $scope.entries = result.feed.entries;
                $scope.entriesLength = $scope.entries.length;
               console.log($scope.entries.content);

            
             
           }
         });
    }

google.setOnLoadCallback($scope.init);

})

.controller('resourcesCtrl', function($scope) {

})

.controller('collaborateCtrl', function($scope) {

    var collaboDate = new Date();
    $scope.collaborations = [];
      $scope.shareCollabo = function(){
         $scope.collabos = {
          text : $scope.collaboText,
          dateTime : collaboDate,
          user : ["Bongi","Muzi","Thami"]
        }
        $scope.collaborations.push($scope.collabos)
      }
      

})

.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('landingScreenCtrl', function($scope) {

})
.filter('reverse', function() {
  return function(items) {
    return items.slice().reverse();
  };
});
