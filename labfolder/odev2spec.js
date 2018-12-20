describe('test suite',function(){
    it('should navigate to http',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.newegg.com/');
        browser.sleep(3000);
        browser.getTitle().then(function(title){
            let a=title.split(",");
            let eggTitle= a.slice(0,3);
             console.log(eggTitle)

        for(let i of eggTitle){
         browser.get('https://www.google.com/')
         browser.sleep(2000);
          element(by.xpath('//input[@name="q"]')).sendKeys(i) ;
          browser.sleep(2000);
          element(by.xpath('//input[@name="btnK"]')).click();
          browser.sleep(3000);
         element(by.id("resultStats")).getText().then(function(result){
             let output=result.split(" ")
             console.log(i + " : " + output[1]  +output[2]+" found ")
             });
       
            
          };
          browser.sleep(3000);
    });
    
    });

});
