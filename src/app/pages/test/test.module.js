/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.test', [])
      .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider) {
    $stateProvider
        .state('test', {
          url: '/test',
          title: 'Test',
          templateUrl: 'app/pages/test/test.html',
          controller: 'testCtrl',
          sidebarMeta: {
            icon: 'ion-android-home',
            order: 500,
          }
        });
  }

})();
