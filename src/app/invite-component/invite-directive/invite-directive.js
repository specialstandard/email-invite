export default class InviteDirective {
    constructor() {
        this.templateUrl = 'invite.html';
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
    constructor () {
        this.name = 'brian';
    }
}
