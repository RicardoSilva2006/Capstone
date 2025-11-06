import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import MenubtnPage from '../pageobjects/menubtn.page.js'
import { browser } from '@wdio/globals'
import inventoryPage from '../pageobjects/inventory.page.js'
import menubtnPage from '../pageobjects/menubtn.page.js'

describe('Sauce Demo menu closing', () => {
        it ('Should close only when clicking on X button', async () => {
            await LoginPage.login();
            await inventoryPage.hamXTest();
        })
})

describe('Sauce Demo menu overlay', () => {
        it ('Should be able of interacting with menu being displayed', async () => {
            await LoginPage.login();
            await InventoryPage.menuoverlay();
    })
})

describe ('Sauce Demo menu functionality', () => {
        it ('Each menu option is working as intended', async () => {
            await LoginPage.login();
            await menubtnPage.menuoptions();
    })
})

describe ('Sauce Demo add item to cart reflects in cart badge', () => {
        it ('Adding an item to the cart does reflect in the cart badge', async () => {
            await LoginPage.login();
            await InventoryPage.addingItem();
            await browser.pause (1000); //so i can see whats happening
            await expect(InventoryPage.cartBadge).toHaveText('1');
            await InventoryPage.addingItem2();
            await browser.pause (1000); //so i can see whats happening
            await expect(InventoryPage.cartBadge).toHaveText('2');
        })
    })

describe ('Sauce Demo correct cart page redirection with correct item', () => {
        it ('Clicking on the cart button redirects to the cart page with the correct item added', async () => {
            await LoginPage.login();
            await InventoryPage.openmenu();
            await MenubtnPage.resetbtn();
            await browser.pause (1000); //so i can see whats happening
            await InventoryPage.checkingCart();
            await browser.pause (1000); //so i can see whats happening
            await expect(InventoryPage.removeItem).not.toBeExisting ();
            await expect(InventoryPage.removeItem2).not.toBeExisting ();
            await browser.url('https://www.saucedemo.com/cart.html')
            await browser.back();
            await InventoryPage.addingItem();
            await expect(InventoryPage.cartBadge).toHaveText('1');
            await InventoryPage.checkingCart();
            await browser.pause (1000);
            await expect(InventoryPage.cartItem).toBeExisting ();
            await browser.url('https://www.saucedemo.com/cart.html')
        })
    }
)
