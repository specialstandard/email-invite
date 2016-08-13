import angular from 'angular';
import invite from './invite-component/invite.js'
//require('./invite-component/invite.js')
require("./scss/style.scss")
angular.module('app', [
	'invite'
]);

angular.bootstrap(document, ['app']);
