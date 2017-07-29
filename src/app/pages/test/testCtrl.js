/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.test')
      .controller('testCtrl',testCtrl);

  
      function testCtrl($scope,$http){


        $scope.sampleModel={
            msg:'Welcome to Test',
            testData:[]

        }
      
        // $http({
        //     url:'https://jsonplaceholder.typicode.com/comments',
        //     method:'GET'

        // }).;

        $http.get('https://jsonplaceholder.typicode.com/comments').then(function(resp){

            $scope.sampleModel.testData=resp.data;
        });

        $scope.sendData=function(obj){

            $http.post('https://jsonplaceholder.typicode.com/posts',obj).then(function(resp){
                console.log(resp);
            });
        }
      };

})();
