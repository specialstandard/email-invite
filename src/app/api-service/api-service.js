export default class ApiService {
    constructor($http) {
		this.$http = $http;
    }

	// Email Invite service function
	getData () {
		return this.$http({method: 'GET', url: './api' });
	}
}

ApiService.$inject = ['$http'];
