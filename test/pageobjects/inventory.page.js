import { $ } from '@wdio/globals'
import Page from './page.js';

class InventoryPage extends Page {

    get menuButton () {
        return $('#react-burger-menu-btn')
        }
    get cartBadge () {
        return $('.shopping_cart_badge')
    }
    get cartbutton () {
        return $('.shopping_cart_link')
    }
    get addItem () {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    get addItem2 () {
        return $('#add-to-cart-sauce-labs-bike-light')
    }
    get removeItem () {
        return $('#remove-sauce-labs-backpack')
    }
    get removeItem2 () {
        return $('#remove-sauce-labs-bike-light')
    }
    get closeButton () {
        return $('#react-burger-cross-btn')
    }
    get cartItem () {
        return $('.inventory_item_name')
    }

    async closemenu() {
        await this.closeButton.click();
    }
    async addingItem() {
        await this.addItem.click();
    }
    async addingItem2() {
        await this.addItem2.click();
    }
    async checkingCart() {
        await this.cartbutton.click();
    }

    async hamXTest() {
        await this.menuButton.click();
        await this.addItem.click();
        await expect(this.closeButton).toBeExisting ();
        await this.closeButton.click();
    }
    async menuoverlay() {
        await this.menuButton.click()
        await expect(this.removeItem).toBeClickable ();
        await expect(this.cartbutton).toBeClickable ();
            }

}

export default new InventoryPage();