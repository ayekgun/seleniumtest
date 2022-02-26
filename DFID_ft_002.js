const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
let driver = new Builder().forBrowser('chrome').build();

(async function login() {

    await driver.get('https://evermos.com/catalog');
    try {

        let inputUsr = await driver.findElement(By.xpath("//input[@value='']")).sendKeys('6281223334444');
        let inputPass = await driver.findElement(By.xpath("(//input[@value=''])[2]")).sendKeys('password');
        let btnLogin = await driver.findElement(By.xpath("//button[@type='button']")).click();
    } catch (error) {
        console.log('LIHAT INI ' + error);
    }

    //close the popup messages
    async function closePopup(){
        let pop = driver.findElement(By.xpath("//div[@id='slidedown-footer']/button[2]"));
        driver.executeScript("arguments[0].click();", pop);

    }
    
    // click notification button
    async function notifBtn(){
        let ntf = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[2]/div/a[3]/i/span"));
        await driver.executeScript("arguments[0].click();", ntf);
    }
    
    // choose berikhtiar tab
    async function ikhTab(){
        let tab = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[3]/a[2]/span")).click();
    }
    
    // click list
    async function ikhList(){
        let bck = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[6]/div[2]/div/div[2]")).click();
    }
    setTimeout(closePopup,10000);
    setTimeout(notifBtn,12000);
    setTimeout(ikhTab,16000);
    setTimeout(ikhList,20000);
})();




//note : is not a valid expression biasanya salah penulisan pada alamat xpath
