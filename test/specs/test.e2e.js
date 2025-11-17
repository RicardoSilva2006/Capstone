import { browser } from '@wdio/globals'

describe('Fast automated scroll + click interactions on Elden Ring Wiki', () => {

    it('performs rapid, bot-like clicking and scrolling', async () => {
        await browser.url('https://eldenring.wiki.fextralife.com/Buffs+and+Debuffs');
        const btnComments = await $('#btnComments')
        await btnComments.click()
        await browser.pause(2000)
        await browser.scroll(0, -100000)
        await browser.pause(2000)
        // const revisions = await $('#btnPageHistory')
        // await revisions.click()
        const lightmode = await $('#btnThemeLight')
        await lightmode.click()
        await browser.pause(2000)
        const darkmode = await $('.glyphicon glyphicon-adjust')
        await darkmode.clicl()
        await browser.pause(2000)
    })
})