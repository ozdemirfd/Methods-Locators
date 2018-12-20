describe('Dropdown handling',function(){
    
    function Drop(locator,select){
    element.all(by.css(locator)).first().all(by.cssContainingText("option",select)).click()
    }

it('should choose an option',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.skout.com/');
   Drop(".col-xs-3.col-md-2.birthdate-space>select","1982")
   browser.sleep(1000)
   Drop(".col-xs-5.col-md-3.birthdate-space>select","October")
   browser.sleep(1000)
});

it('should choose an option',function(){
    browser.get('http://juliemr.github.io/protractor-demo/');

   Drop(".form-inline.ng-pristine.ng-valid>select","*")
   browser.sleep(3000)
});

it('should find the exact element from a list',function(){
	browser.waitForAngularEnabled(false);
    browser.get("https://www.amazon.com/");
    Drop("#searchDropdownBox","Alexa Skills")
    browser.sleep(1000)

});
   
it('should find the exact element from a list',function(){
	browser.waitForAngularEnabled(false);
    browser.get("https://www.copaair.com/en/web/us");
    Drop("#flightBooking_adults","4")
    browser.sleep(2000)
    Drop("#flightBooking_children","5")
    browser.sleep(2000)
    Drop("#flightBooking_infants","3")
    browser.sleep(2000)

});
it('should find the exact element from a list',function(){
	browser.waitForAngularEnabled(false);
    browser.get("https://www.tdbank.com/net/selectstate.aspx?ref=/personal/personalunsecuredloan.html");
    Drop("select[id='state']","Florida")
    browser.sleep(2000)
    Drop("select[id='city']","Brandon")
    browser.sleep(2000)

});
it('should find the exact element from a list',function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/customer');
    browser.sleep(3000)
    Drop('#userSelect','Harry Potter')
    browser.sleep(3000)
 
 });

});




