export default class InviteDirective {
    constructor() {
        this.template = require("./invite.html");
        this.restrict = 'E';
        this.scope = {};
        this.controller = InviteDirectiveController;
        this.controllerAs = 'ctrl';
        this.bindToController = true;
    }

    // Directive compile function
    compile() {

    }

    // Directive link function
    link() {

    }
}

// Directive's controller
class InviteDirectiveController {
    constructor (apiService, $timeout, $http, $q) {
        //this.apiService = apiService;
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
        this.apiObj = {
            response:'',
            status:''
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
        this.onClickSend = () => {
            let self = this;
            this.message = ''
            console.log('clicked send')
            let bValid = true
            if ( self.user.name.length < 3 ){
                bValid = false
            } else if ( self.requestForm.userEmail.$invalid ){
                bValid = false
            } else if ( self.requestForm.userEmailConf.$invalid ){
                bValid = false
            } else if ( self.user.email !== self.user.emailConf ){
                bValid = false
            }

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
                this.$http.post( url , this.data).success((response, status) =>{

                    console.log('response: ', response )
                    console.log('status: ', status )
                    if ( status === 200 ){
                        self.showRequestModal = false;
                        self.showSuccessModal = true;
                        this.requestProcessing = false
                    }
                })
                .error((response, status) =>{

                    console.log('response: ', response )
                    console.log('status: ', status )
                    this.requestProcessing = false
                    this.message = response.errorMessage

                })
            }
        }
    }
}
