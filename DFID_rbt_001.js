const { Builder, By, Key, until } = require('selenium-webdriver');
require('chromedriver');
let driver = new Builder().forBrowser('chrome').build();

(async function login() {

    await driver.get('https://berikhtiar.com/huhuhuh.ce6');

    // choose brand
    async function chBrand(){
        let brd = driver.findElement(By.xpath("//li[@id='splide01-slide02']/div/div"));
        driver.executeScript("arguments[0].click();", brd);
    }

    // choose produk
    async function chProd(){
        let prd = driver.findElement(By.xpath("//div[@id='__layout']/div/div[3]/div/div/a"));
        driver.executeScript("arguments[0].click();", prd);
    }

    // checkout
    async function checkOut(){
        let ckt = driver.findElement(By.xpath("//div[@id='__layout']/div/div[6]/div/button/span"));
        driver.executeScript("arguments[0].click();", ckt);
    }

    // show cart
    async function showCart(){
        let sct = driver.findElement(By.xpath("//div[@id='__layout']/div/div[7]/div/div[3]/button"));
        driver.executeScript("arguments[0].click();", sct);
    }
    
    // add address
    async function addAddress(){
        let adrs = driver.findElement(By.xpath("//div[@id='__layout']/div/div[2]/button[2]"));
        driver.executeScript("arguments[0].click();", adrs);
    }

    // save address
    async function saveAddress(){
        let sdrs = driver.findElement(By.xpath("//div[@id='__layout']/div/div[3]/div/div/div[3]/div/button"));
        driver.executeScript("arguments[0].click();", sdrs);
    }

    setTimeout(chBrand,5000); 
    setTimeout(chProd,8000); 
    setTimeout(checkOut,10000); 
    setTimeout(showCart,15000); 
    setTimeout(addAddress,18000); 
    setTimeout(saveAddress,19000);
})();




//note : is not a valid expression biasanya salah penulisan pada alamat xpath
