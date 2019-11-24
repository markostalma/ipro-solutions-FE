app.controller('subsController',function($scope, subService){

    $scope.subs = {};
    
    function GetAllSubs() {
      let getSubs = subService.getSubs();

      getSubs.then(function (sub) {
         $scope.subs = sub.data.subscriptions;
      }, function () {
         alert('Error in getting subscriptions records! Please reload page.');
      });
    }
          
    GetAllSubs();
});