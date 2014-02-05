var storeSectionApp = angular

.module('storeSection', ['ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
	  $routeProvider
	 
//.when('/', {templateUrl: '../html/partials/products.html', controller: productsController })
//.when('/addProducts', {templateUrl: '../html/partials/addProducts.html', controller: editProductsController })
	              .otherwise({redirectTo : '/sendCoupon'});

	  //$locationProvider.html5Mode(true);
}]);

function StoreController($scope){
	 var leftStoreNavs = $scope.leftStoreNavs =  [];

	 leftStoreNavs.push({title:"Kurtis", link:"#dashboard", class:"active"});
	  //leftNavs.push({title:"Insights", link:"#insights", class:"inactive"});
	 leftStoreNavs.push({title:"Lehnga", link:"#orders", class:"inactive"});
	 leftStoreNavs.push({title:"Jeans", link:"#customers", class:"inactive"});
	 leftStoreNavs.push({title:"Shoes", link:"#products", class:"inactive"});
	
	  $scope.leftStoreNavClicked = function($event, selectedIndex) {
		     for(var i = 0 ; i < leftStoreNavs.length; i++) {
		      if(i === selectedIndex) {
		          $scope.leftStoreNavs[i].class="active";
		          $scope.leftStoreSettingsNavs[i].class="inactve";
		      }else{
		          $scope.leftStoreNavs[i].class="inactve";
		          $scope.leftStoreSettingsNavs[i].class="inactve";
		      }
		      
		    }
		  };
}