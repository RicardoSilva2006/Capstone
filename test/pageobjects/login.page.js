import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

   get inputUsername () {
        return $('#user-name');
    }
    get inputPassword () {
        return $('#password');
    }
    get btnSubmit () {
        return $('#login-button');
    }
    get appLogo () {
        return $('.app_logo');
    }

    async login() {
        const credentials = {username: 'standard_user', password:'secret_sauce'}
        await super.open('');
        await this.inputUsername.setValue(credentials.username);
        await this.inputPassword.setValue(credentials.password);
        await this.btnSubmit.click();
        await expect(this.appLogo).toBeExisting ();
    }
}

export default new LoginPage();
