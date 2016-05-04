/** @ngInject */
export function routerConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
  $stateProvider
    .state('devices', {
      url: '/devices',
      templateUrl: 'app/devices/devices.html',
      controller: 'DevicesController',
      controllerAs: 'devicesCtl'
    });
}
