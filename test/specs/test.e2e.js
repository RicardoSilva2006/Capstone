import { browser } from '@wdio/globals'

describe('Fast automated scroll + click interactions on Elden Ring Wiki', () => {

    it('performs rapid, bot-like clicking and scrolling', async () => {
        await browser.url('https://boondocks.com/');
        await browser.setWindowSize(1800, 1200)
        await $('[href="https://boondocks.com/draper/"].hfe-menu-item').moveTo()
        const fun = await $('[href="https://boondocks.com/draper/fun/"].hfe-sub-menu-item')
        await fun.waitForClickable({ timeout: 2000})
        await fun.click()
        await browser.pause(1500)
        await expect(browser).toHaveUrl('https://boondocks.com/draper/fun/')
        const laserTag = await $('//h2[text()="Laser Tag"]')
        await laserTag.waitForExist()
        await laserTag.scrollIntoView()
        await browser.pause(1500)
        await laserTag.moveTo({timeout: 2000})
        // await $('(//h2[contains(text(), "Requirements")])[4]').waitForDisplayed({ timeout: 2000})
        const arcadePlayShop = await $('[href="https://draperboondocks.centeredgeonline.com/retail/item/378"]')
        await arcadePlayShop.scrollIntoView()
        await browser.pause(1500)
        await arcadePlayShop.click()
        await expect(browser).toHaveUrl('https://draperboondocks.centeredgeonline.com/retail/g/saleitems/arcademadness')
    })
})