const { Buildewr , Capabilities , By } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get(' http://localhost:5500/exercises/automation/movieList/index.html')
})

afterAll(async () => {
await driver.quit()
})

test('Add a movie' , async () => {
    await addMovie(driver)

    let searchBar = await driver.findElement(By.xpath('//input'))

    await driver.sleep(5000)
})