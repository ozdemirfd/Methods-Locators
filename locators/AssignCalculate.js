
describe('test suit about calculation',function(){
  function calculation(a,b,oparator){
    element(by.model("first")).sendKeys(a);
    element.all(by.model('operator')).first().element(by.cssContainingText('option',oparator)).click()
    element(by.model("second")).sendKeys(b)
    element(by.id("gobutton")).click();

  }
it('should calculate',function(){
   // browser.waitForAngularEnabled(false);
    browser.get("http://juliemr.github.io/protractor-demo/");
    calculation(5,6,"*");
    calculation(100,200,"/")
    calculation(40,5,"+");
    calculation(89,15,"-");
    calculation(23,75,"+");
    calculation(55,5,"*");
    calculation(44,4,"/");
    calculation(30,15,"+");
    calculation(200,4,"/");
    calculation(60,25,"*");

     element.all(by.css('.ng-scope>td:nth-child(3)')).getText().then(function(text){
            console.log(text);
           var sum=0;
            for(let a of text){
              sum=sum+parseFloat(a) 
            }
            console.log("total: "+sum)
           })

})
})

// describe('test suit about calculation',function(){
//    function calculation(a,b,oparator){
//         element(by.model("first")).sendKeys(a);
//         element(by.model("operator")).sendKeys(oparator);
//         element(by.model("second")).sendKeys(b)
//         element(by.id("gobutton")).click();
      
//        browser.sleep(3000)
//    }
// it('should calculate',function(){
//    // browser.waitForAngularEnabled(false);
//     browser.get("http://juliemr.github.io/protractor-demo/");
//     calculation(5,6,"*");
//     calculation(100,200,"/")
//     calculation(40,5,"+");
//     calculation(89,15,"-");
//     calculation(23,75,"+");
//     calculation(55,5,"*");
//     calculation(44,4,"/");
//     calculation(30,15,"+");
//     calculation(200,4,"/");
//     calculation(60,25,"*");

//      element.all(by.css('.ng-scope>td:nth-child(3)')).getText().then(function(text){
//             console.log(text);
//            var sum=0;
//             for(let a of text){
//               sum=sum+parseFloat(a) 
//             }
//             console.log("total: "+sum)
//            })

// })
// })

// describe('Task',()=>{
//     function calculate(num1,num2,oprt){
//         if(oprt=="+"){
//             oprt=1;
//         }else if(oprt=="/"){
//             oprt=2;
//         }else if(oprt=="%"){
//             oprt=3;
//         }else if(oprt=="*"){
//             oprt=4;
//         }else if(oprt=="-"){
//             oprt=5;
//         }
//         element(by.model('first')).sendKeys(num1);
//         element(by.model('second')).sendKeys(num2);
//         element(by.model('operator')).element(by.css("option:nth-of-type("+oprt+")")).click()
//         element(by.id('gobutton')).click();
//         browser.sleep(3000);
//         element.all(by.css("tr[class='ng-scope']>:nth-child(3)")).getText().then(function(array){
//             var sum=0;
//             for(let i=0;i<array.length;i++){
//                 sum=sum+parseInt(array[i]);
//             }
//             console.log('the sum is '+sum);
//         })   
//     }
//     it('task1',()=>{
        
//         browser.manage().window().setSize(1500,900);
//         browser.get('http://juliemr.github.io/protractor-demo/');
//         browser.sleep(2000);
//         calculate(3,5,"+")
//         calculate(13,4,"*")
//         calculate(22,7,"/")
//         calculate(54,8,"-")
//         calculate(40,8,"%")
//     })
// });

// describe('Super',function(){
//     var sum=0;
//     function send(num1,num2,oper){
        
//         browser.sleep(1000);
//         element.all(by.css('select option')).getText().then(function(result){
//              var o=result.indexOf(oper)+1;
//         element(by.model('first')).sendKeys(num1);
//         element(by.model('second')).sendKeys(num2);
//         element(by.css('option:nth-child('+o+')')).click();
//         element(by.id('gobutton')).click();

//         });
//         browser.sleep(1000);
//     };

//     it('Calculator',()=>{
//         browser.waitForAngularEnabled(false);
//         browser.get("http://juliemr.github.io/protractor-demo/");
//         browser.manage().window().maximize();
//         send(5,6,"*");
//         send(5,3,"+");
//         send(10,2,"/");
//         send(7,5,"%");
//         send(5,6,"-");
//         send(5,3,"+");
//         send(10,2,"-");
//         send(7,5,"%");
//         browser.sleep(1000);
//        element.all(by.css('td:nth-child(3)')).getText().then(function(arr){
//            for(let i in arr){
//                sum=sum+Number(arr[i]);
//            }
//            console.log("Sum is "+sum);
//        })
//        browser.sleep(3000);
  
//     })
    

// });


// describe('Funny Tests', () => {
//     it('Youtube', () => {
//         browser.waitForAngularEnabled(false);
//         browser.get("https://www.youtube.com/");
//         browser.sleep(2000);
//         element(by.xpath("//*[@name='search_query']")).sendKeys("happy");
//         browser.sleep(2000);
//         element(by.xpath("//button[@id='search-icon-legacy']")).click();
//         browser.sleep(2000);
//         element(by.xpath("//*[@id='video-title' and @title='Pharrell Williams - Happy (Video)']")).click();
//         browser.sleep(1800000);
//     });
// });