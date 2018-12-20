describe('salesforce app',function(){
    it('sould be shown error',function(){
        browser.waitForAngularEnabled(false);
        browser.get("https://login.salesforce.com/");
        browser.sleep(1000);
        element(by.xpath("//*[@id='username']")).sendKeys("Mike")
        browser.sleep(1000);
        element(by.xpath("//*[@id='password']")).sendKeys("Smith")
        browser.sleep(1000);
        element(by.xpath("//*[@id='Login']")).click();
        browser.sleep(1000);
        element(by.xpath("//*[@id='error']")).getText().then(function(error){
           console.log(error)
           browser.sleep(2000);
       })
    })
})