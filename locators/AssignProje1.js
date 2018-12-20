describe('first group test suite',function(){
    it('should navigate amazon',function(){
       browser.waitForAngularEnabled(false)
       //1
       browser.get('https://www.amazon.com/');

       //2
       var expectedTitle="Amazon.com: Online Shopping for Electronics, Apparel, Computers, Books, DVDs & more"
       browser.getTitle().then(function(actualResult){
           if(expectedTitle==actualResult){
               console.log("Title succesfully displayed")
           }else{
               console.log("failed")
           }
           
       })
       //3
       var expectedurl="https://www.amazon.com/"
        browser.getCurrentUrl().then(function(actualUrl){
            if(expectedurl==actualUrl){
                console.log("Get URL,test passed")
            }else{
                console.log('test failed')
            }
      })
      //4
            element(by.css(".nav-logo-link")).isPresent().then((isPresent)=>{
                    if(isPresent){
                        console.log("Logo succesfully displayed");  // -> Passed
                    }else{
                        console.log("Logo doesnot displayed, Test Failed");
                    }
                })

                

element(by.id("twotabsearchtextbox")).sendKeys("laptop");
element(by.css(".nav-search-submit.nav-sprite")).click()
element(by.css(".a-section.a-spacing-small.a-spacing-top-small")).getText().then(function(text){
var array=text.split(" ")

if(array[2]!="over"){
    if(array[2]> 300){
        console.log("Wow tere are more than 300 but less than 1000")
    }else if(array[2]> 1000){
       console.log("Wow tere are more than 1000 but less than 10000")
    }else{
       console.log("number of laptop result: " +array[2])
    }

}else if(array[3]!="over"){
    if(array[3] > 300){
        console.log("Wow tere are more than 300 but less than 1000")
    }else if(array[3]> 1000){
       console.log("Wow tere are more than 1000 but less than 10000")
    }else{
       console.log("number of laptop result: " + array[3])
    }
}
 

})

//7
var expectedArray=['Electronics','Computers & Accessories','Computers & Tablets','Laptops']
element.all(by.css('#s-result-count span>a')).getText().then(function(newArr){
    newArray=newArr;
    var count=0;
    if(newArray.length==expectedArray.length){
        for(var i=0; i<newArray.length; i++){
            if(newArray[i]==expectedArray[i]){
                count++;
            }
        }
        if(count==newArray.length){
            console.log("New Array and Expected Array categories are same");
        };
        
    }else{
        console.log("New Array and Expected Array categories are not same");
    }
  

    })


        var checkboxName=element(by.css("#leftNavContainer  h4:nth-of-type(4)"))
         checkboxName.isDisplayed().then(function(text){
            console.log(text)
          if(text){
            checkboxName.getText().then(function(text){
        console.log("Checkbox name : " + text)
            })
              }
       
        })
        var checkbox=element(by.css("#leftNavContainer  ul:nth-of-type(5)"))
        checkbox.isDisplayed().then(function(text){
            console.log(text)
        if(text){
            element(by.css("#leftNavContainer  ul:nth-of-type(5)")).getText().then(function(text){
                console.log(text)
            })
        }

       
        })

        var linkCount= element.all(by.css("#leftNavContainer  ul:nth-of-type(5) li")).count();
        linkCount.then(function(data){
        console.log("total number of checkbox : " +data)
        })


        element(by.css('#leftNavContainer  ul:nth-of-type(5) li:nth-of-type(3) ')).click();
        browser.sleep(2000)
        element(by.id('low-price')).sendKeys("400");
        element(by.id('high-price')).sendKeys("700");
        element(by.css('.a-button.a-spacing-top-mini.s-small-margin-left>span')).click()

        browser.sleep(2000)
        element(by.id("s-result-count")).getText().then(function(result){
            var a=result.split(" ")
            if(a[2]!="over"){
                console.log("Result "+a[2])
            }else{
                console.log("Result " +a[3])
            }
         
})
    })
})




//6.requirement

// $('#twotabsearchtextbox').sendKeys('laptop');
//         $('.nav-search-submit.nav-sprite>:nth-child(2)').click();
//         browser.sleep(3000);
//         $(".a-section.a-spacing-small.a-spacing-top-small").getText().then((txt)=>{
//             if(txt.includes("over")==true){  // 1-16 of over [40,000]
//                 var txtOver = txt.split(" ").slice(3,4).toString();   
//             }else{   // 1-24 of 325
//                 var txtOf = txt.split(" ").slice(2,3).toString();
//             }
    
//         if(txtOf>=300 && txtOf<1000 || txtOver>=300 && txtOver<1000 ){
//             console.log("You have more than 300 but less than 1000 searches for laptop");
//         }else if(txtOf>=1000 && txtOf<10000 ||txtOver>=1000 && txtOver<10000){
//             console.log("You have more than 1000 but less than 10,000 searches for laptop");
//         }else if(txtOf<300){
//             console.log(`Your total search result is ${txtOf}`);
//         }else{
//             console.log(`Your total search result is ${txtOver}`);
//         }

//     });