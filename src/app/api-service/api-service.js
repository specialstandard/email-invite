export default class ApiService {
    constructor($http) {
		this.$http = $http;
    }

	// Email Invite service function
	postData ( data ) {
		const url = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
		this.$http.post( url , data).success(function(response, status) {
            //this.data = data;
						//this.status = status;
						console.log('response: ', response )
						console.log('status: ', status )
						return {
							response: response,
							status: status
						}
        })
	}
}

ApiService.$inject = ['$http'];
