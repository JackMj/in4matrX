angular.module('app.controllers', [])

.controller('updatesCtrl', function($scope)
 {


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
         };
         google.setOnLoadCallback($scope.init);
    }


)

.controller('collaborateCtrl',function($scope){
      var collaboDate = new Date();

      var dd = collaboDate.getDate();
      var month = collaboDate.getMonth();
      var year = collaboDate.getFullYear();
      var hours = collaboDate.getHours();
      var minutes = collaboDate.getMinutes();
       $scope.postDateTime = dd + " " + month + " " + year + "    " + hours +":"+month; 
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

.controller('resourcesCtrl', function($scope)
{


      var feed = new google.feeds.Feed("http://www.ukzn.ac.za/Feeds/NewsRSS");
        feed.setNumEntries(8);
        feed.load(function(result)
        {
              console.log("running");
           if (!result.error) {

      
                $scope.resources = result.feed.entries;
               console.log($scope.entries);

             
           }
         });


})



.controller('loginCtrl', function($scope) {

})

.controller('signupCtrl', function($scope) {

})

.controller('landingScreenCtrl', function($scope) {

})
.filter("reverse",function(){
    return function(items) {
    return items.slice().reverse();
  };
})
