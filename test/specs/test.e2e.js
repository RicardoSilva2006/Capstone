import { browser } from '@wdio/globals'

describe('Boondocks', () => {

    it('performs rapid, bot-like clicking and scrolling', async () => {
        await browser.url('https://boondocks.com/');
        await browser.setWindowSize(1800, 1200)
        await $('[href="https://boondocks.com/about-us/"]').moveTo()
        await $('[href="https://boondocks.com/faq/"].hfe-sub-menu-item').waitForClickable({timeout:2000})
        await $('[href="https://boondocks.com/faq/"].hfe-sub-menu-item').click()
        await $('[href="#collapse-bfcf07c691ccc31b4a2f"]').click()
        await browser.pause(1500)
        await browser.url('https://boondocks.com/');


        await $('[href="https://boondocks.com/kaysville/"]').moveTo()
        await browser.pause(1500)
        await $('[href="https://boondocks.com/kaysville/fun/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('[href="https://boondocks.com/northglenn/"]').moveTo()
        await browser.pause(1500)
        await $('[href="https://boondocks.com/northglenn/fun/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('[href="https://boondocks.com/parker/"]').moveTo()
        await $('[href="https://boondocks.com/parker/fun/"].hfe-sub-menu-item').waitForClickable({timeout:2000})

        await $('a[href="https://boondocks.com/contact-us/"].hfe-menu-item').moveTo()
        await $('a[href="https://boondocks.com/contact-us/"].hfe-menu-item').click()

        await browser.back()

        // const handles = await browser.getWindowHandles();
        await $('[href="https://boondocks.com/about-us/"]').moveTo()
        await browser.pause(1500)
        await $('[href="https://boondocks.zenapply.com/apply#!/culture"]').click()
        await expect(browser).toHaveUrl('https://boondocks.com/')
        await browser.url('https://boondocks.com/');
        // const firstTab = (await $$('.tab.tab-default.ng-scope'))[0];

        // await firstTab.waitForClickable({ timeout: 2000 });
        // await firstTab.click();
        // // await browser.switchToWindow(handles[handles.length - 1]);
        // await browser.pause(2000)
        // await browser.url('https://boondocks.com/');


        await $('[href="https://boondocks.com/draper/"].hfe-menu-item').moveTo()
        const fun = await $('[href="https://boondocks.com/draper/fun/"].hfe-sub-menu-item')
        await fun.waitForClickable({ timeout: 2000})
        await fun.click()
        await expect(browser).toHaveUrl('https://boondocks.com/draper/fun/')
        const laserTag = await $('//h2[text()="Laser Tag"]')
        await laserTag.waitForExist()
        await laserTag.scrollIntoView()
        await laserTag.moveTo({timeout: 2000})

        

    })
})