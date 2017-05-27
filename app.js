const app = angular.module("tienda", []);


app.controller("saludo",function($scope){
	$scope.nombre ="Cesar";

});

app.controller("productos",function($scope){
	$scope.sumar = function () {
		let prod1 = $scope.producto1;
		let prod2 = $scope.producto2;
		$scope.total = prod1 + prod2; 
	}
});