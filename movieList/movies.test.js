const {Builder, Capabilities, By} = require('selenium-webdriver');
require('chromedriver');
const driver = new Builder().withCapabilities(Capabilities.chrome()).build();


beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('That I can delete a movie', async () => {
    let movieEntry = await driver.findElement(By.xpath('(//input)'))
    await movieEntry.sendKeys('Forrest Gump\n')

    await driver.sleep(2000)

    let addedMovie = await driver.findElement(By.id('ForrestGump'))
    await addedMovie.click()

    await driver.sleep(3000)
})

test('That I can strike through a movie title', async () => {
    let movieEntry = await driver.findElement(By.xpath('(//input)'))
    await movieEntry.sendKeys('Blazing Saddles\n')

    await driver.sleep(2000)

    let addedMovie = await driver.findElement(By.xpath(`//span`))
    await addedMovie.click()
    addedMovie.getText()
    await driver.sleep(3000)
})

test('That I can strike through a movie title', async () => {
    let movieEntry = await driver.findElement(By.xpath('(//input)'))
    await movieEntry.sendKeys('Blazing Saddles\n')

    // await driver.sleep(2000)

    let addedMovie = await driver.findElement(By.xpath(`//span`))
    await addedMovie.click()
    await driver.sleep(100)

    let message = await driver.findElement(By.id('message'))
    expect(await message.getText()).toContain('Blazing Saddles')

    await driver.sleep(2000)
})
