describe('Keybord and Mouse action Suite',function(){
    it ('clear method',function(){
        browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login')
        element(by.id('username')).sendKeys("cybertek");
        browser.sleep(3000)
        element(by.id('username')).clear()
        browser.sleep(3000)
        element(by.id('username')).sendKeys("angular");
        browser.sleep(3000)
    })

    //sendkeys
    it('using keybord buttons',function(){
        browser.get('https://flow.microsoft.com/en-us/')
        element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input")).sendKeys('dropboxb')
        browser.sleep(3000)
        element(by.css(".c-search.homepage-search.ng-pristine.ng-valid>input"))
        .sendKeys(protractor.Key.BACK_SPACE)
        .sendKeys(protractor.Key.ENTER)
        browser.sleep(3000)
    })
    it('get attribute method',function(){
        browser.get('https://flow.microsoft.com/en-us/')
        element(by.css(".ms-logo")).getAttribute("class").then(function(titleattribute){
            console.log(titleattribute)
        })
       
        browser.sleep(3000)
        element(by.css(".ms-logo")).getAttribute("title").then(function(titleattribute){
            console.log(titleattribute)
        })
       
        browser.sleep(3000)
    })

    it('get attribute method',function(){
        browser.waitForAngularEnabled(false)
        browser.get('https://www.staples.com/')
        element(by.id("staples-logo-hdr")).getAttribute("title").then(function(titleattribute){
            console.log(titleattribute)
        })
       
        browser.sleep(3000)
    })
        it('getcss Value method',function(){
            browser.get('https://flow.microsoft.com/en-us/')
            element(by.id("home-video-button")).getCssValue("color").then(function(color){
                console.log(color)
            })
            element(by.id("home-video-button")).getCssValue("font-size").then(function(font){
                console.log(font)
            })
          
        })

        it('get attribute method',function(){
            browser.waitForAngularEnabled(false)
            browser.get('https://www.staples.com/')
            element(by.id("section-cart")).getCssValue("color").then(function(color){
                console.log(color)
            })
            element(by.id("section-cart")).getCssValue("font-size").then(function(size){
                console.log(size)
            })
            element(by.id("section-cart")).getCssValue("margin-bottom").then(function(size){
                console.log(size)
            })
            element(by.id("section-cart")).getLocation().then(function(location){
                console.log(location)
                var x = location.x;
                var y = location.y;
                console.log(x+'  -----  '+y)
            })
            browser.sleep(3000)
        })

        it('get attribute method',function(){
            browser.waitForAngularEnabled(false)
            browser.get('https://www.bhtp.com/')
            
            element(by.linkText("START A CLAIM")).getLocation().then(function(location){
                console.log(location)
                var x = location.x;
                var y = location.y;
                console.log(x+'  -----  '+y)
            })
            browser.sleep(3000)
        })

        it('mouse hover over example',function(){
            browser.waitForAngularEnabled(false);
            browser.get('http://the-internet.herokuapp.com/')
            element(by.linkText("Hovers")).click()
            browser.sleep(3000)
            browser.actions().mouseMove($$('.figure>img').get(1)).perform();
            browser.sleep(3000)
            element(by.linkText("View profile")).click()
           browser.actions().mouseMove($$('.figure>img').get(2)).perform();
           
            element(by.linkText("View profile")).click()
        })

        fit('mouseMove',()=>{
            browser.waitForAngularEnabled(false);
            browser.get('http://the-internet.herokuapp.com/hovers');
            browser.manage().window().maximize();
            browser.sleep(1000);
        for(let i=0; i<3; i++){
            browser.actions().mouseMove($$('.figure>img').get(i)).perform();
            browser.sleep(1000);
            element(by.linkText('View profile')).click();
            browser.sleep(1000); 
            browser.navigate().back();
            browser.sleep(1000);    
        }
    
           })
//3rd party drag and drop solution
it('Drag and drop', () => {
    var dragAndDrop= require('html-dnd').code;

    browser.waitForAngularEnabled(false);
    browser.get("http://the-internet.herokuapp.com/drag_and_drop");
    browser.sleep(3000);
    browser.executeScript(dragAndDrop,element(by.id("column-a")),element(by.id("column-b")),0,0);
    browser.sleep(5000);
});

    //Scrolling down to an element
    it('Scrool down to an element', () => {
        browser.get("https://www.bhtp.com/");
        browser.sleep(3000);
        browser.executeScript("arguments[0].scrollIntoView();",element(by.linkText("START A CLAIM")))
            .then(function(){
                browser.sleep(3000);
                element(by.linkText("START A CLAIM")).click();
            })
   
});
//Scrolling down to the end of the page
it('Scrool down to an element', () => {
        

    browser.get("https://www.bhtp.com/");
    browser.sleep(3000);
    browser.executeScript("window.scrollTo(0,document.body.scrollHeight)")
        .then(function(){
            browser.sleep(3000);
            element(by.linkText("START A CLAIM")).click();
        })
});
    });
