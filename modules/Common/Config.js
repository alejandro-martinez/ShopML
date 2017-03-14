Config.$inject = ['$routeProvider', '$httpProvider'];

export default function Config( $routeProvider, $httpProvider ) {
  	
    $httpProvider.interceptors.push(function($q, $rootScope) {
      return {
         'request': function(config) {
            $rootScope.loading = true;
         },
         'response': function(response) {
            $rootScope.loading = false;
         },
         'responseError': function(response) {
            $rootScope.loading = false;
         }
      }
    });

    $routeProvider.when('/', {
      templateUrl: 'modules/Products/index.html', 
      controller: 'ProductsCtrl as $ctrl'
    })
    .when('/Products/:category_id', {
      templateUrl: 'modules/Products/index.html', 
      controller:  'ProductsCtrl as $ctrl'
    })
    .otherwise({ redirectTo: '/' });

}