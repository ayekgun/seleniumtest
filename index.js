let {Builder, By, Key, until} = require('selenium-webdriver');
// let chrome = require('selenium-webdriver/chrome');


require('chromedriver');
async function helloSelenium(user, pass) {
    let driver = await new Builder().forBrowser('chrome').build();


    await driver.get('https://evermos.com/login');
    // login = driver.findElement(By.linkText('Masuk'));
    // await login.click();
    inputs1 = driver.findElement(By.xpath("//input[@value='']")).sendKeys(user);
    inputs2 = driver.findElement(By.xpath("(//input[@value=''])[2]")).sendKeys(pass);
    btnLogin = driver.findElement(By.xpath("//button[@type='button']"));
    btnLogin.click();
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

async function runs(){
    await helloSelenium('salah', 'password');
    await helloSelenium('6281223334444', 1234);
    await helloSelenium('6281223334444', 'password');
}
runs();
