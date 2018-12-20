describe('Learning different browser methods',function(){
    it ('should open a webpage',function(){
        browser.get('https://www.jetblue.com/');
        browser.get('https://www.lego.com/en-us')
    });

    it ('should refresh a webpage',function(){
        browser.get('https://www.jetblue.com/');
        browser.sleep(2000);
        browser.get('https://www.lego.com/en-us');
        browser.refresh();
    });
    it ('should navigate a webpage',function(){
        browser.get('https://www.jetblue.com/');
        browser.sleep(2000);
        browser.get('https://www.lego.com/en-us');
        browser.navigate().back();
        browser.navigate().forward();
    });

    it ('should get Url webpage',function(){
        browser.get('https://www.jetblue.com/');
        browser.sleep(2000);
        browser.getCurrentUrl().then(function(resolve){
            console.log(resolve);
        });
        
        
    });

    it ('should verify title webpage',function(){
        browser.get('https://www.jetblue.com/');
        browser.sleep(3000);
        browser.getTitle().then(function(title){
            console.log(title)
        });

    });


    fit ('should verify title webpage',function(){
        
        var brs = [

        {br : "https://www.jetblue.com/", actualtitle:"Airline Tickets, Flights & Airfare: Book Direct - Official Site | JetBlue"},
        {br : "https://www.lego.com/en-us", actualtitle:"LEGO.com US - Inspire and develop the builders of tomorrow"},
        {br : "https://www.eat24.com/", actualtitle:"Eat24 Food Delivery | Order Online | Restaurants Delivery"},
        {br : "https://www.cvs.com/", actualtitle:"CVS - Online Drugstore, Pharmacy, Prescriptions & Health Information"},
      
    ]

     for(let i =0;i<brs.length;i++){
       browser.waitForAngularEnabled(false);
        browser.get(brs[i].br);
        browser.getTitle().then(function(title){
            if( brs[i].actualtitle == title){
                console.log("passed");
            }else{
                console.log("not passed");
            }
            
        });
    
};
    
});

it('should test sales force app',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://login.salesforce.com/');
    element(by.id('username')).sendKeys('John');
    browser.sleep(2000);
    element(by.name('pw')).sendKeys('mike123');
    browser.sleep(4000);
    element(by.id('Login')).click();
    browser.sleep(4000);
});	


});


