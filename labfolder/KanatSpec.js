describe("Navigate rediff.com",function(){
    it('should show all price',function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://www.rediff.com/')
        browser.manage().window().setSize(1300,800)
        element(by.css(".homesprite.shopicon")).click()
        browser.sleep(2000)
        element(by.css(".listbox>:nth-child(6) a")).click();
        browser.sleep(2000)
        element(by.css('.div_trending_slider>:nth-child(1)')).click();
        browser.sleep(2000)
        element(by.css('#lowprice')).sendKeys("11000");
        browser.sleep(2000)
        element(by.css('#highprice')).sendKeys("14000");
        browser.sleep(2000)
        element(by.css('.pr_rangebtn')).click()
        browser.sleep(2000)
        element.all(by.css('.f14.bold>:nth-child(2)')).getText().then(function(price){
            for(let a=0;a<price.length;a++){
                console.log((a+1)+". product : "+"$"+price[a]);
            }
            });
            browser.sleep(2000)
        });
    });