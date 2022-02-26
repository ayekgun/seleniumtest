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
    
    // click search button
    async function search(){
        let src = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[2]/div/a/i/span"));
        await driver.executeScript("arguments[0].click();", src);
    }
    
    // type Buku
    async function typeIpt(){
        let typ = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[2]/div/form/input")).sendKeys('Buku', Key.ENTER);
    }
    
    //re-type Pensil
    async function typeIpt2(){
        let typ = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[2]/div/form/input"));
        await typ.clear();
        await typ.sendKeys('Pensil', Key.ENTER);
    }
    // click back button
    async function backBtn(){
        let bck = await driver.findElement(By.xpath("//div[@id='__layout']/div/div[2]/div/div/a/i/span")).click();
    }
    setTimeout(closePopup,10000);
    setTimeout(search,12000);
    setTimeout(typeIpt,16000);
    setTimeout(typeIpt2,20000);
    setTimeout(backBtn,22000);
})();




//note : is not a valid expression biasanya salah penulisan pada alamat xpath