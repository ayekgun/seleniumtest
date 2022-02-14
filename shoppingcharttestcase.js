let {Builder, By, Key, until} = require('selenium-webdriver');
// let chrome = require('selenium-webdriver/chrome');

require('chromedriver');
async function helloSelenium(td) {
    let driver = await new Builder().forBrowser('chrome').build();


    await driver.get('https://evermos.com/login');
    // login = driver.findElement(By.linkText('Masuk'));
    // await login.click();
    inputs1 = driver.findElement(By.xpath("//input[@value='']")).sendKeys(td.username);
    inputs2 = driver.findElement(By.xpath("(//input[@value=''])[2]")).sendKeys(td.password);
    btnLogin = driver.findElement(By.xpath("//button[@type='button']"));
    // new Promise(r => setTimeout(r, 5000));
    setTimeout(() => {
        btnLogin.click();
    }, 20000);
    
    // await driver.quit();
};

async function order(){
    pick1 = driver.findElement(By.xpath("//img[contains(@src,'https://evermos-production.s3.ap-southeast-1.amazonaws.com/brand/kajianmu/product/image/611cbcc8b8fc8-256.jpg')]"));
    await pick1.click();
}


let testData = [
    {
        'username':'6281223334444',
        'password':'password'
    },
]

testData.map(async function(td){
    await helloSelenium(td);
    await order();
})