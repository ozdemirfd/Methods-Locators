describe('byoption method',()=>{
    it('dropdowns',()=>{
        browser.get("http://juliemr.github.io/protractor-demo/");
       // browser.manage().window().maximize();
        var allOptions=element.all(by.options('value for (key, value) in operators'));
        allOptions.each(function(option){
            option.getText().then(function(optionText){
                console.log(optionText);
            })
        })

    })


it('ng-options', () => {
    browser.get("http://juliemr.github.io/protractor-demo/");
    var allOptions = element.all(by.options("value for (key, value) in operators"));
    allOptions.get(3).getText().then(function(option3Text){
        console.log(option3Text);
    });
});


it ('ng-options', ()=>{
    browser.waitForAngularEnabled(false);
    browser.get('http://juliemr.github.io/protractor-demo/');

    var allOptions = element.all(by.options('value for (key, value) in operators'))
;    allOptions.get(2).getText().then(function(text){
            console.log(text);
    })

});

it("ng-options skout", () => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.skout.com");
   // getting all elements from dropdown
    element.all(by.model("user.birthday.month")).first()
    .all(by.tagName("option")).getText().then(function(txt){
        console.log(txt);
    });
    //select item with cssContainingText method
    element.all(by.model("user.birthday.month")).first()
    .all(by.cssContainingText('option','May')).click();
    browser.sleep(3000)
    //Select element by text
    element(by.model("user.birthday.month"))
    .element(by.xpath('option[.="April"]')).click();
    browser.sleep(3000);
    //select element by its value
    element(by.model("user.birthday.month"))
    .element(by.css('option[value="7"]')).click();
    browser.sleep(3000);

   

});


it("ng-options skout", () => {
    browser.waitForAngularEnabled(false);
    browser.get("https://www.skout.com");
    element.all(by.id('birthday-month')).first().all(by.tagName('option'))
    .getText().then(function(text){
        console.log(text)
    })

});

it('ng-options ,select month',function(){
    browser.waitForAngularEnabled(false);
  browser.get('https://www.skout.com/');
 element.all(by.options('month.value as month.label for month in date.months')).first()
 .all(by.cssContainingText('option','April')).click()
 browser.sleep(5000)

 element.all(by.options('month.value as month.label for month in date.months')).getText().then(function(txt){
    console.log(txt);
});

element.all(by.options("month.value as month.label for month in date.months")).get(4).getText().then(function(txt){
    console.log(txt);
})

element.all(by.options("month.value as month.label for month in date.months")).get(4).click()


var months = element.all(by.options("month.value as month.label for month in date.months"));
        var mymonth = months.get(5);
        mymonth.click();


})

fit('ng-options ,select month',function(){
    browser.waitForAngularEnabled(false);
  browser.get('https://www.skout.com/');
element.all(by.model('user.birthday.year')).first()
.all(by.css('option[value="36"]')).click();
browser.sleep(2000)

element.all(by.model('user.birthday.year')).first()
.all(by.cssContainingText('option','1982')).click()

browser.sleep(2000)


var allYears = element.all(by.options("day for day in date.years"));
        var myYear = allYears.get(39);
        myYear.click();


})
})
