describe('keybord assignment',function(){
    function name(a,b,c){
    
            element(by.css('*[id="username"]')).sendKeys(a)
         //   .sendKeys(protractor.Key.ENTER)
            browser.sleep(2000)
           
            element(by.css('*[id="password"]')).sendKeys(b)
         //   .sendKeys(protractor.Key.ENTER)
            browser.sleep(2000)
            
            element(by.id('formly_1_input_username_0')).sendKeys(c)
          //  .sendKeys(protractor.Key.ENTER)
            browser.sleep(2000)
           
        
           if(a.length<3 || b.length<3 || c.length<3 ){
            element(by.css('.help-block.ng-active div')).isDisplayed().then(function(error){
                console.log(error + "Error message displayed " )
            })
            element(by.css(".help-block.ng-active div")).getCssValue("color").then(function(color){
                console.log(color)
            })
             element(by.css('.btn.btn-danger')).isEnabled().then(function(login){
             console.log('login button enabled');
         })
            
        }else if(a.length==0 || b.length==0){
            element(by.css('.ng-scope')).isDisplayed.then(function(text){
                console.log('You did not enter username message displayed : ' +text)
            })
            element(by.css('.ng-scope')).getCssValue('color').then(function(text){
                console.log('You did not enter username message displayed : ' +text)
            })
            element(by.css('.btn.btn-danger')).isEnabled().then(function(login){
                console.log('login button abled'+ login);
            })
               
        }

        
    }
     
it('should displayed',function(){
    browser.waitForAngularEnabled(false);
    name( 'kt','de','dsda')

})



})