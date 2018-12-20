describe ('element.all practice suite', () => {
    it('task 1: brilliant earth', () => {
        browser.get('https://www.brilliantearth.com/');
        browser.sleep(2000);
        $('#join-our-newsletter .iconfont-close1').click();
        browser.sleep(2000);
        $('.king-site-logo').click();
        browser.sleep(2000);
        var topMenu = $('.king-navgation').all(by.tagName('li'));
        topMenu.count().then(function(c){
            console.log(`The top menu has ${c} elements`);
        });
        topMenu.each(function(item, index){
            item.getText().then(function(text){
                if (text != "") {
                    console.log(index+ " " + text);
                }
            });
        });
        topMenu.get(21).getText().then(function(text){
            console.log(`The second visible element on top menu is ${text}`);
        });
        topMenu.first().click();
        browser.sleep(3000);
        $$('.subnav-content.dropdown-menu .col-sm-3').last().isDisplayed().then(function(result){
            if (result) {
                console.log("image is displayed");
            } else {
                console.log("image is not displayed");
            }
        });
    });
//KADRIYENIN ODEVI 

    fit('Task 3',()=>{
        browser.get("https://www.copaair.com/en/web/us");

        var allOptions=element.all(by.options('item for item in range(0, defaults.travelers.adults.max) track by item')); 
        allOptions.getText().then((textArray)=>{
                textArray.reverse();
                console.log(textArray);
        })

        var fifthOption=allOptions.get(4);
        fifthOption.getText().then((text)=>{
            console.log(text);
        })
        
     

    })  

});