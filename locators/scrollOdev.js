describe('keybord assignment',function(){
function name(a){

        element(by.id('username')).sendKeys(a)
        browser.sleep(2000)
         element(by.id("username"))
        .sendKeys(protractor.Key.BACK_SPACE)
        .sendKeys(protractor.Key.ENTER)
    
    
      if(a.length<3){
        element(by.css('.help-block.ng-active div')).getText().then(function(error){
            console.log(error)
        })
        element(by.css(".help-block.ng-active div")).getCssValue("color").then(function(color){
            console.log(color)
        })
     
        element(by.id("username")).clear()
    }
}


    it('should displayed correctly',function(){
    browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login')

      name('ai')

      name('Omer')
      name('gul')

    })
})