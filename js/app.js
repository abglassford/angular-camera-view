(function() {
  'use strict';

  let app = angular.module('cameraApp', [])

  app.filter('asterisk', function () {
    return function (input){
      let ast = []
      for (var i = 0; i < input; i++) {
        ast.push('*')
      }
      return ast.join('')
    }
  });



  $('select').material_select();

})();
