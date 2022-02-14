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

    setTimeout(() => {
        btnLogin.click();
    }, 20000);
    // await driver.quit();
};


let testData = [
    {
        'username':'usernamesalah',
        'password':'password'
    },
    {
        'username':'6281223334444',
        'password':'passwordsalah'
    },
    {
        'username':'6281223334444',
        'password':'password'
    },
]

testData.map(async function(td){
    await helloSelenium(td)
})