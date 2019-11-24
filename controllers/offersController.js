// Offers Controller
app.controller('offersController',function($scope, offerService){

    $scope.offers = {};
    $scope.loading = true;
    
    function GetAllOffers() {
      let getOffers = offerService.getOffers();
      getOffers.then(function (offer) {
        $scope.offers = offer.data.offers;
        $scope.loading = false;
      }, function () {
         alert('Error in getting offers records! Please reload page.');
      });
    }
          
    GetAllOffers();
});