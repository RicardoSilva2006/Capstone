import { browser } from '@wdio/globals'

describe('Fast automated scroll + click interactions on Elden Ring Wiki', () => {

    it('performs rapid, bot-like clicking and scrolling', async () => {
        await browser.url('https://boondocks.com/');
        await $('[href="https://boondocks.com/draper/"].hfe-menu-item').moveTo()
        await browser.pause(2000)
        const fun = await $('[href="https://boondocks.com/draper/fun/"].hfe-sub-menu-item')
        await fun.waitForClickable({ timeout: 3000})
        await fun.click()
        await browser.url('https://boondocks.com/draper/fun/')
    })
})