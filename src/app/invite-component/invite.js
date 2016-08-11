import angular from 'angular';

import InviteController from './invite-controller/invite-controller.js';
import InviteDirective from './invite-directive/invite-directive.js';
import ApiService from '../api-service/api-service.js';

export default angular.module('invite', [])
	.controller('inviteController', InviteController)
	.service('apiService', ApiService)
	.directive('inviteDirective', () => new InviteDirective);
