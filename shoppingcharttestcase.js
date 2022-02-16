let { Builder, By, Key, until } = require('selenium-webdriver');
const by = require('selenium-webdriver/lib/by');
// let chrome = require('selenium-webdriver/chrome');

require('chromedriver');
let driver = new Builder().forBrowser('chrome').build();

async function helloSelenium(user, pass) {
    await driver.get('https://evermos.com/catalog');
    inputs1 = driver.findElement(By.xpath("//input[@value='']")).sendKeys(user);
    inputs2 = driver.findElement(By.xpath("(//input[@value=''])[2]")).sendKeys(pass);
    btnLogin = driver.findElement(By.xpath("//button[@type='button']"));
    btnLogin.click();
};


async function shoppingchart() {
    const cat1 = "//div[@id='__layout']/div/div[5]/div[2]/div/div[7]/a/img";

    pick1 = await driver.findElement(By.xpath(cat1));
    await driver.executeScript("arguments[0].click();", pick1);
    setTimeout(async function st() {
        const cat2 = "//div[@id='__layout']/div/div[4]/div/div/div[5]/div/div[2]/div/a";
        pick2 = await driver.findElement(By.xpath(cat2));
        await driver.executeScript("arguments[0].click();", pick2);
    }, 3000);
    setTimeout(async function st() {
        const cat3 = "//div[@id='__layout']/div/div[3]/div[3]/div[22]/div/div[2]/a";
        pick3 = await driver.findElement(By.xpath(cat3));
        await driver.executeScript("arguments[0].click();", pick3);
    }, 5000);
    setTimeout(async function st() {
        const cat4 = "//input[@name='pickedAddressId']";
        pick4 = await driver.findElement(By.xpath(cat4));
        await driver.executeScript("arguments[0].click();", pick4);
    }, 8000);
    setTimeout(async function st() {
        const cat4 = "//div[5]/div/div[2]/div[2]/div/button[2]";
        pick4 = await driver.findElement(By.xpath(cat4));
        await driver.executeScript("arguments[0].click();", pick4);
    }, 9000);
    setTimeout(async function st() {
        const cat4 = "//div[@id='__layout']/div/div[5]/div/div[3]/button";
        pick4 = await driver.findElement(By.xpath(cat4));
        await driver.executeScript("arguments[0].click();", pick4);
    }, 15000);
}

async function runs() {
    await helloSelenium('6281223334444', 'password');
    setTimeout(async function st() {
        await shoppingchart();
    }, 3000);
}
runs();
