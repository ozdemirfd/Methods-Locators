describe('Test Suite Name', function(){

	it('Test Case Name', function(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        
		element(by.model("first")).sendKeys("5");
		browser.sleep(3000);

		element(by.model("second")).sendKeys("1");
		browser.sleep(3000);
		// element(by.model("operator")).sendKeys("/");
		// browser.sleep(3000);

		element(by.id("gobutton")).click();
		browser.sleep(6000);
		
	});
});