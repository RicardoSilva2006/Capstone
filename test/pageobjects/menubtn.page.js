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
    
    async menuoptions() {;
                await this.inventorybtn.click();
                await expect(LoginPage.appLogo).toBeExisting();
                await expect(this.about).toHaveHref('https://saucelabs.com/');
                await this.logout.click
                await LoginPage.login('standard_user', 'secret_sauce');
                await expect(LoginPage.appLogo).toBeExisting ();
                await InventoryPage.openmenu();
                await this.reset.click();
                await expect(InventoryPage.removeItem).toBeExisting ();;
                await expect(InventoryPage.cartBadge).not.toBeExisting();
    }
}
export default new Menubutton();