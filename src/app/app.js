import angular from 'angular';
import invite from './invite-component/invite.js'

angular.module('app', [
	'invite'
]);

angular.bootstrap(document, ['app']);