(function() {
  'use strict';

  const app = angular.module('cameraApp');

  app.controller('CatalogController', function ($scope, $rootScope) {
    $scope.cameras = [{id: 1,name: 'Nikon D3100 DSLR',image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',rating: 4,price: 369.99,onSale: true},{id: 2,name: 'Canon EOS 70D',image: 'http://ecx.images-amazon.com/images/I/81U00AkAUWL._SX522_.jpg',rating: 2,price: 1099.0,onSale: false},{id: 3,name: 'Nikon D810A',image:'http://ecx.images-amazon.com/images/I/91wtXIfLl2L._SX522_.jpg',rating: 3,price: 3796.95,onSale: true}];

    $scope.addToCart = function (item) {
      if (!$rootScope.cart.includes(item)) {
        $rootScope.cart.push(item)
        item.count = 1
      } else {
        item.count++
      }
      $rootScope.subtotal += item.price
      $rootScope.tax = $rootScope.subtotal * .08
      $rootScope.total = $rootScope.tax + $rootScope.subtotal
    }
  })

  app.controller('CartController', function ($scope, $rootScope) {

    $rootScope.total = 0
    $rootScope.tax = 0
    $rootScope.subtotal = 0

    if(!$rootScope.cart){
      $rootScope.cart = [];
    }
    $scope.inCart = $rootScope.cart;

    $scope.delete = function (item) {
      $rootScope.cart.pop(item)
      $rootScope.subtotal -= item.price * item.count
      $rootScope.tax -= item.price * .08 * item.count
      $rootScope.total -= item.price * 1.08 * item.count
    }
  })

}());
