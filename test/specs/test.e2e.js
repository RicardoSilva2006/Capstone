import { browser } from '@wdio/globals'

describe('Boondocks', () => {

    it('performs rapid, bot-like clicking and scrolling', async () => {
        await browser.url('https://boondocks.com/');
        // await browser.setWindowSize(1800, 1200)
        await $('[href="https://boondocks.com/about-us/"]').moveTo()
        await $('[href="https://boondocks.com/about-us/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('[href="https://boondocks.com/kaysville/"]').moveTo()
        await $('[href="https://boondocks.com/kaysville/fun/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('[href="https://boondocks.com/northglenn/"]').moveTo()
        await $('[href="https://boondocks.com/northglenn/fun/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('[href="https://boondocks.com/parker/"]').moveTo()
        await $('[href="https://boondocks.com/parker/fun/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('[href="https://boondocks.com/contact-us/"].hfe-menu-item').moveTo()
        // await $('[href="https://boondocks.com/contact-us/"].hfe-menu-item').waitForClickable({timeout:2000})
        await $('[href="https://boondocks.com/contact-us/"].hfe-menu.item').click()
        await browser.back()

        // await $('[href="https://boondocks.com/about-us/"]').moveTo()
        // await $('[href="https://boondocks.zenapply.com/apply#!/culture"]').click()
        // await browser.back()

        await $('[href="https://boondocks.com/draper/"].hfe-menu-item').moveTo()
        const fun = await $('[href="https://boondocks.com/draper/fun/"].hfe-sub-menu-item')
        await fun.waitForClickable({ timeout: 2000})
        await fun.click()
        await expect(browser).toHaveUrl('https://boondocks.com/draper/fun/')
        const laserTag = await $('//h2[text()="Laser Tag"]')
        await laserTag.waitForExist()
        await laserTag.scrollIntoView()
        await laserTag.moveTo({timeout: 2000})

        // const arcadePlayShop = await $('[href="https://draperboondocks.centeredgeonline.com/retail/item/378"]')
        // await arcadePlayShop.scrollIntoView()
        // await arcadePlayShop.click()
        // await expect(browser).toHaveUrl('https://draperboondocks.centeredgeonline.com/retail/g/saleitems/arcademadness')
        // const addCart = await $('[aria-label="Increase Quantity"]')
        // for (let i = 0; i < 50; i++){
        //     await addCart.click()
        // }
        // await $('[aria-label="Add to cart"]').click()
        // await $('.icon ion-ios-cart').click()
        // await expect(browser).toHaveUrl('https://draperboondocks.centeredgeonline.com/cart')
        // await browser.back()
    })
})