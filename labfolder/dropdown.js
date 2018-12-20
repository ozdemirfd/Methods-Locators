describe('task 2',function(){
    it("dropdown list",function(){
        browser.waitForAngularEnabled(false)
        browser.get('https://www.etsy.com/?ref=lgo');
        element(by.id('catnav-primary-link-10923')).click()
        browser.sleep(1000)
        element.all(by.css('#ship_to_select option')).each(function(country){
          country.getText().then(function(list){
              console.log(list)
          })
      })
//   element.all(by.css('#ship_to_select optgroup option')).getText().then(function(array){
//         for(let i=0; i<100; i++){
//             console.log(array[i]);
//         }
//     })
browser.executeScript('arguments[0].scrollIntoView();',element(by.id('ship_to_select'))).then(function(){
    browser.sleep(3000);
    element.all(by.id('ship_to_select')).first().all(by.cssContainingText('option','Turkey')).click()  

})
browser.sleep(1000)
})   

it('task 3',function(){
    browser.waitForAngularEnabled(false)
      browser.get('https://www.porsche.com/usa/')
      browser.executeScript('arguments[0].scrollIntoView();',element(by.linkText('Select a region'))).then(function(){
        browser.sleep(3000);
        element.all(by.css('.gui-drop-down-label.sel-dd-continent select')).first().all(by.cssContainingText('option','Europe')).click()
      browser.sleep(3000);
      element.all(by.css('.gui-drop-down-label.sel-dd-country select')).first().all(by.cssContainingText('option','France')).click()
      browser.sleep(3000);
    })

    browser.getTitle().then(function(title){
    console.log(title) 
    
})
})
})

// EYUP COZUM



// describe('Task-3 Selector',()=>{
//     function select(region,country){
//         element.all(by.cssContainingText('.select2-chosen','Select a region')).click();
//         element.all(by.cssContainingText('#select2-drop li',region)).click();
//         browser.sleep(2000);

//         element.all(by.cssContainingText('.select2-chosen','Select a country')).click();
//         element.all(by.cssContainingText('#select2-drop li',country)).click();
//         browser.sleep(2000);
//     }
    
//     it('Task-3 --> Porsche',()=>{
//         browser.waitForAngularEnabled(false);
//         browser.get('https://www.porsche.com/usa/')

//         //Select Region and Country
//         select('Europe','France');
        
        //Get the title and verify if we are on the correct page
//         browser.getTitle().then(function(title){
//             console.log(title);
//         });
        
//     }) 
// })




