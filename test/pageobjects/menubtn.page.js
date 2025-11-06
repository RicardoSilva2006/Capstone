import { $ } from '@wdio/globals'
import Page from './page.js';
import LoginPage from './login.page.js';
import InventoryPage from './inventory.page.js';

class Menubutton extends Page {
    buttonInsideMenu(feature) {return $(`#${feature}_sidebar_link`)}
    get sauceLabs () {return $('[href="https://saucelabs.com/"]')}
    
    async menuFeaturesTest3() {;
                await InventoryPage.openOrCloseMenu('menu').click();
                await this.buttonInsideMenu('inventory').click();
                await expect(LoginPage.appLogo).toBeExisting();
                await expect(this.buttonInsideMenu('about')).toHaveHref('https://saucelabs.com/');
                await this.buttonInsideMenu('logout').click
                await LoginPage.login('standard_user', 'secret_sauce');
                await expect(LoginPage.appLogo).toBeExisting ();
                await InventoryPage.openOrCloseMenu('menu').click();
                await this.buttonInsideMenu('reset').click();
                await expect(InventoryPage.removeItem('backpack')).toBeExisting ();;
                await expect(InventoryPage.cartElement('badge')).not.toBeExisting();
    }
}
export default new Menubutton();