export default class ApiService {
    constructor( $http ) {
			this.$http = $http;
    }

	// Email Invite service function
	postData ( data, fnOnSuccess, fnOnFailure ) {
		const url = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
		return this.$http.post( url , data)
			.success((response, status) =>{
				fnOnSuccess( response, status )
			})
			.error((response, status) =>{
				fnOnFailure( response, status )
			})
	}
}

ApiService.$inject = ['$http'];
