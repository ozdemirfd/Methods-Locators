describe('Browser Method Suite',function(){

it('Browser get method',function(){
       //  if non-angular websites we use this keywords
       // browser.ignoreSyncronization = true;

browser.waitForAngularEnabled(false);

        //opening a webpage with the url
 browser.get('https://www.google.com');


 browser.sleep(4000);

 });


it('Navigate to Staples.com',function(){

browser.waitForAngularEnabled(false);
browser.get('http://www.staples.com');
browser.sleep(4000);
browser.getCurrentUrl().then(function(resolve){
    console.log(resolve)
});


 });
        
     
it('Browser refresh method',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.bbc.com/');
    browser.sleep(4000);
    browser.refresh();
    browser.sleep(4000);
});


fit('Browser back/forward method',function(){
    browser.waitForAngularEnabled(false);

    browser.get('https://www.bbc.com/');
    browser.sleep(2000);
    browser.get('https://www.google.com/');
    browser.sleep(2000);
    browser.navigate().back();
    browser.sleep(4000);
    browser.navigate().forward();
    browser.sleep(4000);
});


it('Browser maximize method',function(){
    browser.waitForAngularEnabled(false);

    browser.get('https://www.google.com/');
    browser.sleep(2000);
    browser.manage().window().maximize();
    browser.sleep(2000);


});

it('Browser maximize set method',function(){
    browser.waitForAngularEnabled(false);

    browser.get('https://www.google.com/');
    browser.sleep(3000);
    browser.manage().window().maximize();
    browser.sleep(3000);
    browser.manage().window().setSize(1080,800);
    browser.sleep(3000);

});

it('Browser get URL method',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com');
    browser.sleep(3000);
    browser.getCurrentUrl().then(function(resolve){
        console.log(resolve)
    });
    



});
    
it('Browser get tittle method',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.google.com');
    browser.sleep(4000);
browser.getTitle().then(function(title){
    console.log(title)
});



});
});