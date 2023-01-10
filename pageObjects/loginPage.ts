import { Selector } from 'testcafe';

export default class LoginPage {
    public passwordInput: Selector;
    public usernameInput: Selector;
    public loginButton: Selector;
    constructor() {

        this.usernameInput = Selector('#user-name');
        this.passwordInput = Selector('#password');
        this.loginButton = Selector('.btn_action');
    }

    async login(t: TestController) {
        await t
            .typeText(this.usernameInput, 'performance_glitch_user')
            .typeText(this.passwordInput, 'secret_sauce')
            .click(this.loginButton);
    }
}