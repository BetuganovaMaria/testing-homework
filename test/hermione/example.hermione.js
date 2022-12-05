const { assert } = require('chai');

describe('github', async function() {
    it('Тест, который пройдет', async function() {
        await this.browser.url('https://github.com/BetuganovaMaria/shri_simple_template');
        await this.browser.assertView('plain', '#readme', {
            compositeImage: true,
        });

        const title = await this.browser.$('#readme h1').getText();
        assert.equal(title, 'readme');
    });
});