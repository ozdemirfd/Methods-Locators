describe("Navigate rediff.com",function(){
  
    fit('should show all price',function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://www.rediff.com/')
    
        element(by.css(".homesprite.shopicon")).click()
        browser.sleep(2000)
        element(by.css(".listbox>:nth-child(6) a")).click();
        browser.sleep(2000)
        element(by.css('.div_trending_slider>:nth-child(1)')).click();
        browser.sleep(2000)
        element.all(by.css('.f14.bold>:nth-child(2)')).getText().then(function(price){
            var max=0
          for(let a=0;a<price.length;a++){
         console.log((a+1)+". product : "+"$"+price[a]);
             element=parseInt(price[a])
             if(element>max){
                 max=element
             }
            }
            console.log("The highest laptop price on the page is Rs. "+ max)

            });

            browser.sleep(2000)

        });

      
        var max=0;
        xit('should select the higest price', () => {
            browser.waitForAngularEnabled(false);
            browser.get('http://www.rediff.com/');
            browser.sleep(5000);
            $('.divicon.relative').click();
            $('.hmcolumn1 :nth-child(6)').click();
            $('a[href="//shopping.rediff.com/categories/cat/cat-7620?sc_cid=ushome_icon|topnav_computers|browse"]').click();
            $$('.alignC>span:nth-child(2)>span:nth-child(2)').getText()
            .then((priceList) => {
    
                priceList.forEach(element => {
                    element=element.replace(",","");
                    console.log(element)
                    element=parseFloat(element);
                    console.log(element)
                    if(element>max){
                        max=element;
                    }
                })
                console.log("The highest laptop price on the page is Rs. "+ max);
            });
          
        })
       
  
        xit('should show all price',function(){
            browser.waitForAngularEnabled(false);
            browser.get('https://www.facebook.com/');
            element(by.css('#month>option:nth-child(11)')).click()
            element(by.xpath("//*[@name='firstname']")).sendKeys("Feride")
            element(by.xpath("//*[@name='lastname']")).sendKeys("Ozdemir")
            element(by.xpath("//*[@name='reg_email__']")).sendKeys("ozdemirfd@gmail.com")
            element(by.xpath("//*[@name='reg_email_confirmation__']")).sendKeys("ozdemirfd@gmail.com")
        
            element(by.xpath("//*[@name='reg_passwd__']")).sendKeys("Ayfa2007");
           
            element.all(by.css('#month>option')).getText().then(function(month){
                console.log(month)
            })
            element(by.css('#day>option:nth-child(32)')).click()
            element.all(by.css('#day>option')).getText().then(function(day){
                    console.log(day)

            element(by.css("#year")).sendKeys("1982");        
            element(by.xpath("//label[text()='Female']")).click()  
             browser.sleep(3000)  
             element(by.css("#reg_form_box>:nth-child(9) button")).click()
             browser.sleep(3000) 
            })
            browser.sleep(5000) 
        });





    });