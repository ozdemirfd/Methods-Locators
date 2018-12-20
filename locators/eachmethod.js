describe('use each.method',function(){
    it('should get items with each method',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.bhtp.com')

    element(by.css('#top-nav-down')).all(by.tagName('span')).each(function(item){
   item.getText().then(function(text){
       console.log(text)
   })
   })
       
    })


it('should get items with each method',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.staples.com')

  element.all(by.css('.section-menu>div')).each(function(item){
  item.getText().then(function(text){
   console.log(text)
})

})
})

    it('should get items with each method',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.staples.com')

      element.all(by.css('.section-menu>div')).each(function(item){
      item.getText().then(function(text){
       console.log(text)
   })

   })
})

    it('Task 1', () => {
            browser.waitForAngularEnabled(false);
            browser.get("https://www.staples.com/");
            $('.section-menu').all(by.css(".section-icon-label.hide-below-sm")).each((item)=>{
                item.getText().then((text)=>{
                    console.log(text);
                })
            })
        });
   
    it('should get items with each method',function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://www.bbc.com')

      element.all(by.css('#orb-nav-links>ul>li')).each(function(item){
      item.getText().then(function(text){
          if(text!==""){
            console.log(text)
          }
      
   })

   })

})

it('should get items with each method',function(){
    browser.waitForAngularEnabled(false);
    browser.get('https://www.bbc.com')

    element.all(by.css('#orb-nav-links>ul>li')).each(function(item,index){
      
    item.getText().then(function(text){
    if(text==="Shop"){
        console.log(text + " "+ index)
    }
  
})

})
})
it('each method',()=>{
    browser.waitForAngularEnabled(false);
    browser.get('https://www.bbc.com');
    $$('#orb-nav-links').all(by.className('orb-nav-shop orb-w')).each(function(item){
        item.getText().then(function(text){
            console.log(text);
        })
    })

})



it('by.model oparator examples',function(){
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('5');
    element(by.css("option:nth-of-type(4)")).click();
    element(by.model('second')).sendKeys('10');
    element(by.id("gobutton")).click();
   element(by.binding('late')).getText().then(function(result){
    console.log(result)
       if(result==50){
console.log("pass")
       }else{
           console.log("not pass")
       }
   })
   element.all(by.repeater('result in memory')).getText().then(function(text){
       var a=text.toString()
      console.log(a.split(" ").slice(5))
       console.log(a)
});

})

fit('by.repeater', () => {
    browser.get('http://juliemr.github.io/protractor-demo/');
      
    element(by.model('first')).sendKeys('5');
    element(by.model('second')).sendKeys('6');
    element(by.id('gobutton')).click();
    
    element(by.model('first')).sendKeys('7');
    element(by.model('second')).sendKeys('7');
    element(by.id('gobutton')).click();

    element(by.model('first')).sendKeys('55');
    element(by.model('second')).sendKeys('66');
    element(by.id('gobutton')).click();

    browser.sleep(4000);
    
    // element.all(by.repeater("result in memory")).each(function(item){
    //     item.getText().then(function(rowData){
    //     console.log(rowData);
    // })

    element.all(by.repeater('result in memory')).getText().then(function(text){
        var a=text.toString()
        console.log(a.split(" "))
        console.log(a)
 });

 element.all(by.repeater("result in memory")).each(function(item){
        item
        .element(by.css("td:nth-child(3)"))
        .getText().then(function(columnData){
        console.log(columnData);
    })


})

element.all(by.repeater("result in memory").row(1)).each(function(text){
    text.getText().then(function(text){
    console.log(text)
});

})

element.all(by.repeater("result in memory").column("result.operator")).each(function(text){
    text.getText().then(function(text){
    console.log(text)
});

})



})
})