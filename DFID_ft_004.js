let { Builder, By, Key, until, promise } = require('selenium-webdriver');
const by = require('selenium-webdriver/lib/by');
// let chrome = require('selenium-webdriver/chrome');

require('chromedriver');
let driver = new Builder().forBrowser('chrome').build();

(async function helloSelenium() {
    await driver.get('https://evermos.com/catalog');
    inputs1 = driver.findElement(By.xpath("//input[@value='']")).sendKeys('6281223334444');
    inputs2 = driver.findElement(By.xpath("(//input[@value=''])[2]")).sendKeys('password');
    btnLogin = driver.findElement(By.xpath("//button[@type='button']"));
    btnLogin.click();

    const cat1 = "//div[@id='__layout']/div/div[5]/div[2]/div/div[7]/a/img";
    let fw1 = await driver.wait(until.elementLocated(By.xpath(cat1)), 20000, 'Timed out after 20 seconds', 5000);
    pick1 = await driver.findElement(By.xpath(cat1));
    await driver.executeScript("arguments[0].click();", pick1);

    // close the popup
    let pop = "//div[@id='slidedown-footer']/button[2]";
    let fwPop = await driver.wait(until.elementLocated(By.xpath(pop)), 22000, 'Timed out after 25 seconds', 5000);
    pick0 = await driver.findElement(By.xpath(pop));
    await driver.executeScript("arguments[0].click();", pick0);

    //click one product category by position
    const cat2 = "//div[@id='__layout']/div/div[4]/div/div/div[5]/div/div[2]/div/a";
    let fw2 = await driver.wait(until.elementLocated(By.xpath(cat2)), 25000, 'Timed out after 25 seconds', 5000);
    pick2 = await driver.findElement(By.xpath(cat2));
    await driver.executeScript("arguments[0].click();", pick2);

    //submit button of beli sekarang
    const cat3 = "Beli Sekarang";
    let fw3 = await driver.wait(until.elementLocated(By.linkText(cat3)), 26000, 'Timed out after 26 seconds', 5000);
    pick3 = await driver.findElement(By.linkText(cat3)).click();

    //pick one of alamat pengiriman
    const cat4 = "//div[@id='__layout']/div/div[5]/div/div[2]/div/div[2]/div/label/div/input";
    let fw4 = await driver.wait(until.elementLocated(By.xpath(cat4)), 27000, 'Timed out after 27 seconds', 5000);
    pick4 = await driver.findElement(By.xpath(cat4)).click();

    //submit pilih alamat button
    const cat5 = "//div[@id='__layout']/div/div[5]/div/div[2]/div[2]/div/button[2]";
    let fw5 = await driver.wait(until.elementLocated(By.xpath(cat5)), 29000, 'Timed out after 29 seconds', 5000);
    pick5 = await driver.findElement(By.xpath(cat5)).click();

    //submit lanjut belanja button
    const cat6 = "//div[@id='__layout']/div/div[5]/div/div[3]/button";
    let fw6 = await driver.wait(until.elementLocated(By.xpath(cat6)), 30000, 'Timed out after 30 seconds', 5000)
    pick4 = await driver.findElement(By.xpath(cat6));
    await driver.executeScript("arguments[0].click();", pick4);

    // reload the page to prove that shopping cart icon is increased by one
    setTimeout(() => {
        driver.navigate().refresh();
    }, 3000);
})();
