const{Builder, By, Key, util} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get(" https://stage.clientvenue.com/login");
    await driver.findElement(By.name("email")).sendKeys("agency@gmail.co.in");
    await driver.findElement(By.name("password")).sendKeys("1234567");
    await driver.findElement(By.className("MuiButton-label")).click();

    await driver.findElement(By.xpath("//*[@id='root']/div/div/div[1]/div[2]/div[1]/div[2]/a[5]/svg/path")).click();

}
example();