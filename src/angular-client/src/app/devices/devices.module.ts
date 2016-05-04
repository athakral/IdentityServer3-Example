/// <reference path="../../../typings/main.d.ts" />

import { routerConfig } from './devices.route';
import { DevicesController } from './devices.controller';

module deviceModule {
  'use strict';

  angular
    .module('devices', ['ui.router', 'ui.grid'])
    .controller('DevicesController', DevicesController)
    .config(routerConfig);
}

