// Offers Service
app.service('offerService', function ($http) {

    // Get All Offers
    this.getOffers = function () {
       return $http.get('https://selfcare-service.demo.melita.com/interview/api/offers');
    };
    
 });