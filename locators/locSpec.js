describe('Selinium locators',function(){

it('by.id locator example',function(){

browser.waitForAngularEnabled(false);

browser.get('https://skyid.sky.com/signup');
element(by.id('firstname')).sendKeys('Michael');
browser.sleep(4000)
element(by.id('lastname')).sendKeys('Smith');
browser.sleep(4000)
});


it('by.id locator example',function(){

    browser.waitForAngularEnabled(false);
    
    browser.get('https://www.facebook.com/');
    element(by.id('email')).sendKeys('ozdemirfd@gmail.com');
    browser.sleep(2000)
    element(by.id('pass')).sendKeys('Ayfa');
    browser.sleep(2000)
    element(by.id('loginbutton')).click(); 
    browser.sleep(2000)
    });

    it('by.id locator example',function(){

        browser.waitForAngularEnabled(false);
        
        browser.get('https://www.facebook.com/');

        element(by.name('firstname')).sendKeys('Feride');
        browser.sleep(4000);
        element(by.name('lastname')).sendKeys('Ozdemir');
        browser.sleep(4000);
        element(by.name('reg_email__')).sendKeys('ozdemirfd@gmail.com');
        browser.sleep(4000);
         element(by.name('reg_passwd__')).sendKeys('Ayfa2007');
    
        browser.sleep(4000);
        
    
   });


   it('should get by id locator',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://skyid.sky.com/signup');
    element(by.id('title')).$('[value="Mr"]').click();
    browser.sleep(2000);
    element(by.id('firstname')).sendKeys('Mike');
    browser.sleep(2000);
    element(by.name('lastname')).sendKeys('Smith');
    browser.sleep(2000);
    element(by.id('email')).sendKeys('msmith@gmail.com');
    browser.sleep(2000);
    element(by.id('confirmEmail')).sendKeys('msmith@gmail.com');
    browser.sleep(2000);
    element(by.id('password')).sendKeys('mkidtr1234');
    browser.sleep(2000);
    element(by.id('confirmPassword')).sendKeys('mkidtr1234');
    browser.sleep(2000);
    element(by.id('termsAndConditions')).click();
    browser.sleep(2000);
    element(by.id('marketingOptOut')).click();
    browser.sleep(2000);
    element(by.id('submitButton')).click();
    browser.sleep(4000);
});





it('by.classNAme locater examples',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://skyid.sky.com/signup');
    element(by.className('page-header-two')).getText().then(function(text){
        if(text=="Create your Sky iD"){
            console.log("test passed")
        }else{
            console.log("test failed")
        }
        console.log("here is your text : " + text)
    })
    browser.sleep(2000)
});






it('by.id locator example',function(){

    browser.waitForAngularEnabled(false);
    
    browser.get('https://www.facebook.com/');
// calismadi bircok class oldugu icin//
    element(by.className('inputtext')).sendKeys('Feride');
    browser.sleep(2000)
});


it ("by tag name locater",function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://skyid.sky.com/signup');
    // element(by.tagName('button')).click();
    // browser.sleep(3000);

    element(by.id('submitButton')).click();
    browser.sleep(4000);
 });

 it("by.tagName Locator", function(){
    browser.waitForAngularEnabled(false);
    browser.get("https://skyid.sky.com/signup");

    // This is good for just if there is just one specific tag name.
    element(by.tagName('button')).click();
    browser.sleep(3000);
});




 it('should get by id locator',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com/');
    element(by.name('q')).sendKeys('what is html');
    browser.actions().sendKeys(protractor.Key.ENTER).perform();
    browser.sleep(4000);
           
})

it('should get by id locator',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://skyid.sky.com/signup');
element(by.linkText('Privacy & Cookies Notice')).click();
browser.sleep(4000);
});

it('should get by another page locator',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://facebook.com');
    element(by.linkText('Forgot account?')).click();
    browser.sleep(4000);


});
fit('should get by another page locator',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://google.com');
 
    browser.sleep(4000);


}); 
 }); 