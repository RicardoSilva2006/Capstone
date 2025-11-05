import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import SecurePage from '../pageobjects/secure.page.js'
import InventoryPage from '../pageobjects/inventory.page.js'
import MenubtnPage from '../pageobjects/menubtn.page.js'
import { browser } from '@wdio/globals'
import inventoryPage from '../pageobjects/inventory.page.js'

describe('Sauce Demo menu closing', () => {
        it ('Should close only when clicking on X button', async () => {
            await LoginPage.open();
            await LoginPage.login('standard_user', 'secret_sauce');
            await expect(SecurePage.appLogo).toBeExisting ();
            await inventoryPage.hamXTest();
            // await InventoryPage.openmenu();
            // await InventoryPage.addingItem();
            // await expect(InventoryPage.closeButton).toBeExisting ();
            // await InventoryPage.closemenu();
        })
})

describe('Sauce Demo menu overlay', () => {
    for (const user of users) { 
        it ('Should be able of interacting with menu being displayed', async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, user.password);
            await expect(SecurePage.appLogo).toBeExisting ();
            await InventoryPage.openmenu();
            await expect(InventoryPage.removeItem).toBeClickable ();
            await expect(InventoryPage.cartbutton).toBeClickable ();
        })
    }
})

describe ('Sauce Demo menu functionality', () => {
    for (const user of users) { 
        it ('Each menu option is working as intended', async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, user.password);
            await expect(SecurePage.appLogo).toBeExisting ();
            await InventoryPage.openmenu();
            await MenubtnPage.inventory();
            await expect(SecurePage.appLogo).toBeExisting();
            await expect(MenubtnPage.about).toHaveHref('https://saucelabs.com/');
            await MenubtnPage.logoutbtn();
            await browser.pause (1000); //so i can see whats happening
            await LoginPage.login(user.username, user.password);
            await expect(SecurePage.appLogo).toBeExisting ();
            await InventoryPage.openmenu();
            await MenubtnPage.resetbtn();
            await browser.pause (1000); //so i can see whats happening
            await expect(InventoryPage.removeItem).toBeExisting ();;
            await expect(InventoryPage.cartBadge).not.toBeExisting();
        })
    }
})

describe ('Sauce Demo add item to cart reflects in cart badge', () => {
    for (const user of users) { 
        it ('Adding an item to the cart does reflect in the cart badge', async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, user.password);
            await expect(SecurePage.appLogo).toBeExisting ();
            await InventoryPage.addingItem();
            await browser.pause (1000); //so i can see whats happening
            await expect(InventoryPage.cartBadge).toHaveText('1');
            await InventoryPage.addingItem2();
            await browser.pause (1000); //so i can see whats happening
            await expect(InventoryPage.cartBadge).toHaveText('2');
        })
    }
})

describe ('Sauce Demo correct cart page redirection with correct item', () => {
    for (const user of users) { 
        it ('Clicking on the cart button redirects to the cart page with the correct item added', async () => {
            await LoginPage.open();
            await LoginPage.login(user.username, user.password);
            await expect(SecurePage.appLogo).toBeExisting ();
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
})
