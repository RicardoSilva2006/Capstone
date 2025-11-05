import { $ } from '@wdio/globals'
import Page from './page.js';

class Menubutton extends Page {
    get inventorybtn () {
        return $('#inventory_sidebar_link')
    }
    get about () {
        return $('#about_sidebar_link')
    }
    get logout () {
        return $('#logout_sidebar_link')
    }
    get reset () {
        return $('#reset_sidebar_link')
    }
    get sauceLabs () {
        return $('[href="https://saucelabs.com/"]')
    }
    async inventory() {
    await this.inventorybtn.click();
    }
    async aboutbtn() {
    await this.about.click();
    }
    async logoutbtn() {
    await this.logout.click();
    }
    async resetbtn() {
    await this.reset.click();
    }
}
export default new Menubutton();