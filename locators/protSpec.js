describe('protractor laocators',function(){
// function Add(a,b,operator){
//     element(by.model("first")).sendKeys(a);
//     element(by.model("second")).sendKeys(b);
//     element(by.model("operator")).sendKeys(operator);
//     element(by.id("gobutton")).click();
//     browser.sleep(3000)
// }; 



    it('buttonText example @tarnferwise',function(){
        browser.get('https://transferwise.com/us/');
        element(by.buttonText('Compare price')).click();
        browser.sleep(3000)
    });

    it('buttonText example @ Upwork', () => {
        browser.get("https://www.upwork.com/");
        element(by.buttonText('Get Started')).click();
        browser.sleep(2000);
    });

    it('should behave...', () => {
        browser.waitForAngularEnabled(false);
        browser.get('https://www.netflix.com/');
        element(by.buttonText('JOIN FREE FOR A MONTH')).click();
        browser.sleep(3000);
    });
    it('Button Text Example @Transferwise', () => {
        browser.get("https://transferwise.com/us/");
        element(by.partialButtonText('pare p')).click();
        browser.sleep(5000);
    });

    it('Button Text Example @Transferwise', () => {
        browser.get("https://transferwise.com/us/");
        element(by.css('.btn.btn-success.btn-success.ng-binding')).click();
        browser.sleep(5000);
    });

    it('containing Text Example @Transferwise', () => {
        browser.get("https://transferwise.com/us/");
        element(by.cssContainingText('.text-inverse ','bye')).getText().then(function(text){
            console.log(text);
        });
        browser.sleep(5000);
    });
    it('containing Text Example @Transferwise', () => {
        browser.get("https://transferwise.com/us/");
        element(by.cssContainingText('.h4 ','safe')).getText().then(function(text){
            console.log(text);
        });
        browser.sleep(5000);
    });

    it('by.model examples',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('5');
        browser.sleep(2000);
        element(by.model('second')).sendKeys('10');
        browser.sleep(2000);
        element(by.id('gobutton')).click()
        browser.sleep(2000);
        element(by.model('first')).sendKeys('55');
        browser.sleep(2000);
        element(by.model('second')).sendKeys('105');
        browser.sleep(2000);
        element(by.id('gobutton')).click()
        browser.sleep(6000);
    })


    function Add(a,b,operator){
        element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
       element(by.model("operator")).sendKeys(operator);
        element(by.css(".btn")).click();
        browser.sleep(3000)
    }; 

    fit('by.model examples',function(){
        browser.get('http://juliemr.github.io/protractor-demo/');
     Add(5,6,"*");
      Add(100,200,"/")
     Add(3,5,"+");
     browser.sleep(2000);
     

   
});

   it('by.model oparator examples',function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('5');
    element(by.css("option:nth-of-type(4)")).click();
    browser.sleep(2000);
    element(by.model('second')).sendKeys('10');
    browser.sleep(2000);
   
});

function Add(a,b){
    element(by.model("first")).sendKeys(a);
    element(by.model("second")).sendKeys(b);
    element(by.css(".btn")).click();
    browser.sleep(3000)
}; 

fit('by.model examples',function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.css("option:nth-of-type(4)")).click();
    Add(20,20);
    Add(4,5)
    element(by.css("option:nth-of-type(5)")).click();
    Add(20,20);
    Add(260,20);
    browser.sleep(2000);
    element(by.css("option:nth-of-type(1)")).click();
    Add(20,20);
    Add(260,20);
    browser.sleep(2000);
 
 element.all(by.repeater('result in memory')).getText().then(function(text){
    console.log(text[4]+" / " + text[5]);

 
})
element.all(by.css('option[value]')).getText().then(function(text){
    console.log(text);

});
});
 });