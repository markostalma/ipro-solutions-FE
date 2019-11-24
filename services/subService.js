// Subsciptions Service
app.service('subService', function ($http) {
    
    // Get All Subsciptions
    this.getSubs = function () {
       return $http.get('https://selfcare-service.demo.melita.com/interview/api/offers/100/subscriptions');
    };
    
 });