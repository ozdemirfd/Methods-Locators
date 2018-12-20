describe('Selinium CSS locators',function(){
it('should behave ...',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://skyid.sky.com/signup')
    element(by.css('input#firstname')).sendKeys('Feride');
    browser.sleep(2000);
    element(by.css('input#lastname' )).sendKeys('Ozdemir');
    browser.sleep(2000);
    element(by.css('input#email')).sendKeys('OzdemirFeride@.gfd.com');
    browser.sleep(2000);
    $('#confirmEmail').sendKeys('OzdemirFeride@.gfd.com');
    browser.sleep(2000);
    $('#password').sendKeys('12345');
    browser.sleep(2000);
    $('#confirmPassword').sendKeys('12345');
    browser.sleep(2000);
    element(by.css('#captcha')).sendKeys("aerqwe12");
    browser.sleep(2000);
    element(by.css('button.skyBtn.cta')).click();
    browser.sleep(2000);
})
it('should go to browser',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.staples.com/')
    browser.sleep(2000);
   // $('div.button__button.button__outline.button__white  ').click();
    element(by.css("div[class='button__button button__outline button__white ']")).click();
    browser.sleep(2000);
});

it('should go to browser',function(){
    browser.waitForAngularEnabled(false);
browser.get('https://accounts.google.com/signin/v2/identifier?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin')
browser.sleep(2000);
$(' #identifierId ').sendKeys("odsaf")
browser.sleep(2000);


});
it('should go to browser',function(){
    browser.waitForAngularEnabled(false);
    browser.navigate().to('https://google.com/')
    browser.get('https://angularjs.org/')
    browser.navigate().back();
    browser.navigate().forward();
    browser.manage().window().setSize(1050,700)
    browser.sleep(2000);
});
fit('should go to browser',function(){
    
    browser.driver.get('https://ebay.com/');
    browser.driver.getCurrentUrl().then(function(url){
        console.log(url)
    });
    browser.driver.getTitle().then(function(title){
        console.log(title)
    });
});




});