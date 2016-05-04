export class DevicesController {
  public devices: any;
  public toastr: any;
  public $http: angular.IHttpService;
  /* @ngInject */
  constructor ($timeout: angular.ITimeoutService, toastr: any, $http: angular.IHttpService) {
    this.devices = new Array();
    this.toastr = toastr;
    this.$http = $http;
    this.activate();
  }

  activate() {
    this.getDevices();
  }

  getDevices() {
    this.$http.get('https://1bfmj6xnf7.execute-api.us-east-1.amazonaws.com/dev/devices')
    .then((response: any) => {
      this.devices = response.data.Items;
      // console.log(data);
    });
    ;
  }
}
