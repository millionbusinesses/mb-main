var mbApp = angular

.module('mb', ['ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
	  $routeProvider
	 
.when('/products', {templateUrl: '../html/partials/products.html', controller: productsController })
.when('/addProducts', {templateUrl: '../html/partials/addProducts.html', controller: editProductsController })
	              .otherwise({redirectTo : '/sendCoupon'});

	  //$locationProvider.html5Mode(true);
}]);	

function MBHomeController($scope) {
	 var leftStoreNavs = $scope.leftStoreNavs =  [];
	 var leftStoreSettingsNavs = $scope.leftStoreSettingsNavs =  [];
		//$scope.mbHome-header = "Product";

	 leftStoreNavs.push({title:"<i class='glyphicon glyphicon-home'></i> &nbsp;&nbsp;Home", link:"#dashboard", class:"active"});
	  //leftNavs.push({title:"Insights", link:"#insights", class:"inactive"});
	 leftStoreNavs.push({title:"<i class='glyphicon glyphicon-log-in'></i>&nbsp;&nbsp; Orders", link:"#orders", class:"inactive"});
	 leftStoreNavs.push({title:"<i class='glyphicon glyphicon-user'></i>&nbsp;&nbsp; Customers", link:"#customers", class:"inactive"});
	 leftStoreNavs.push({title:"<i class='glyphicon glyphicon-phone'></i>&nbsp;&nbsp; Products", link:"#products", class:"inactive"});
	
	 leftStoreSettingsNavs.push({title:"<i class='glyphicon glyphicon-globe'></i>&nbsp;&nbsp; Profile", link:"#profile", class:"inactive"});
	 leftStoreSettingsNavs.push({title:"<i class='glyphicon glyphicon-wrench'></i>&nbsp;&nbsp; Settings", link:"#settings", class:"inactive"});
	 leftStoreSettingsNavs.push({title:"<i class='glyphicon glyphicon-headphones'></i>&nbsp;&nbsp; Help", link:"#help", class:"inactive"});

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
		  
	  $scope.leftStoreSettingsNavClicked = function($event, selectedIndex) {
		     for(var i = 0 ; i < leftStoreSettingsNavs.length; i++) {
		      if(i === selectedIndex) {
		          $scope.leftStoreSettingsNavs[i].class="active";
		          $scope.leftStoreNavs[i].class="inactve";
		      }else{
		          $scope.leftStoreNavs[i].class="inactve";
		          $scope.leftStoreSettingsNavs[i].class="inactve";
		      }
		      
		    }
		  };
}


function editProductsController($scope) {
	$scope.selected = undefined;
	$scope.customers = ['Manish', 'Kumar', 'Ajay', 'Francis', 'Manas', 'Panda', 'Sivaraman'];
	var todo = $scope.todo = {};
	todo.title='sdf';
	var blueTemplate = $scope.blueTemplate = {};
	blueTemplate.line1 = "Thank you for shopping with us!!";
	blueTemplate.line2 = "Now, earn points by referring our business to your friends. Each succesful referral will earn you reward points which you can redeem in your next purchase";
	blueTemplate.line3 = "Just forward this email or the referral code to your friends" +
										"and colleagues who might be interested.";
	blueTemplate.line4 = " Each of them gets FLAT 30% OFF";

}

function productsController($scope){
	
}

