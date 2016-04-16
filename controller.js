(function() {

   angular.module('quoteApp')

   .controller('mainCtrl', function(quoteService) {

      var vm = this;

      // vm.delivery = quoteService.random();

      vm.makeQuote = function() {
         quoteService.random();
         vm.delivery = quoteService.random();

      }



   });




}());
