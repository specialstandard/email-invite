export default class InviteDirective {
    constructor() {
        this.template = require("./invite.html");
        this.restrict = 'E';
        this.scope = {};
        this.controller = InviteDirectiveController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

}

// Directive's controller
class InviteDirectiveController {
    constructor (apiService, $timeout, $http, $q) {
        this.apiService = apiService;
        this.$http = $http
        this.showRequestModal = false;
        this.showSuccessModal = false;
        this.requestProcessing = false;
        this.message = ''
        this.user = {
            name:'',
            email:'',
            emalConf: ''
        }
        this.validateEmail = (email) => {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        this.onClickRequest = () => {
            console.log('pushed')
            this.showRequestModal = true;
        }
        this.onClickCloseRequestModal = () => {
            this.showRequestModal = false;
        }
        this.onClickCloseSuccessModal = () => {
            this.showSuccessModal = false;

        }
        this.fnOnSuccess = ( response, status ) => {
            console.log('response: ', response )
            console.log('status: ', status )
            if ( status === 200 ){
                this.showRequestModal = false;
                this.showSuccessModal = true;
                this.requestProcessing = false
            }
        }
        this.fnOnFailure = ( response, status ) => {
            console.log('response: ', response )
            console.log('status: ', status )
            this.requestProcessing = false
            this.message = response.errorMessage
        }
        this.onClickSend = () => {
            let self = this;
            this.message = ''
            console.log('clicked send')
            let bValid = true
            if ( this.user.name === undefined){
                bValid = false
            } else if ( this.user.name.length < 3 ){
                bValid = false
            } else if ( this.validateEmail( this.user.email ) === false ){
                bValid = false
            } else if ( this.validateEmail( this.user.emailConf ) === false ){
                bValid = false
            } else if ( self.user.email !== self.user.emailConf ){
                bValid = false
            }
            console.log('bValid: ',bValid)
            if ( bValid ){
                //$timeout(()=>{
                    this.requestProcessing = true
                //})
                this.data = {
                    name: self.user.name,
                    email: self.user.email
                }
                self.user.name = ''
                self.user.email = ''
                self.user.emailConf = ''

                this.data = JSON.stringify( this.data );
                const url = "https://l94wc2001h.execute-api.ap-southeast-2.amazonaws.com/prod/fake-auth";
                this.apiService.postData( this.data, this.fnOnSuccess, this.fnOnFailure )

            }
        }
    }
}
