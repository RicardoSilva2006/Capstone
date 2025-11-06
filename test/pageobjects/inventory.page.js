import { $ } from '@wdio/globals'
import Page from './page.js';
import MenubtnPage from './menubtn.page.js';


class InventoryPage extends Page {

    openOrCloseMenu (menuToShowOrCrossToClose) { return $(`#react-burger-${menuToShowOrCrossToClose}-btn`) }
    cartElement (cartFeature) { return $(`.shopping_cart_${cartFeature}`) } 
    addItem (nameProductdashforspace) { return $(`#add-to-cart-sauce-labs-${nameProductdashforspace}`) } 
    removeItem (nameAddedProductdashforspace) { return $(`#remove-sauce-labs-${nameAddedProductdashforspace}`) } 
    get cartItemBeingDisplayed () { return $('.inventory_item_name') }

    async hamXTest1() {
        await this.openOrCloseMenu('menu').click();
        await this.addItem('backpack').click();
        await expect(this.openOrCloseMenu('cross')).toBeExisting ();
        await this.openOrCloseMenu('cross').click();
    }
    async menuOverlayingTest2() {
        await this.openOrCloseMenu('menu').click()
        await expect(this.removeItem('backpack')).toBeClickable ();
        await expect(this.cartElement('link')).toBeClickable ();
            }
    async checkingBadgeNumberTest4() {
        await this.addItem('backpack').click();
        await expect(this.cartElement('badge')).toHaveText('1');
        await this.addItem('bike-light').click();
        await expect(this.cartElement('badge')).toHaveText('2');
                    }
    async checkingCartItemTest5() {
        await this.openOrCloseMenu('menu').click();
        await MenubtnPage.buttonInsideMenu('reset').click();
        await this.cartElement('link').click();
        await expect(this.removeItem('backpack')).not.toBeExisting ();
        await expect(this.removeItem('bike-light')).not.toBeExisting ();
        await browser.url('https://www.saucedemo.com/cart.html')
        await browser.back();
        await this.addItem('backpack').click();
        await expect(this.cartElement('badge')).toHaveText('1');
        await this.cartElement('link').click();
        await expect(this.cartItemBeingDisplayed).toBeExisting ();
        await browser.url('https://www.saucedemo.com/cart.html')
    }
}

export default new InventoryPage();