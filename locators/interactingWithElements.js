describe('interacting Elements Suite',function(){
    it('isPresent method',function(){
        browser.get('https://www.bhtp.com/');

        element(by.id('cta-button')).isPresent().then(function(result){
            if(result==true){
                console.log('get Quote button test passed')

            }else{
                console.log('test not passed')
            }
            
        })
    })

//         element(by.id('cta-button')).isDisplayed().then(function(result){
//             if(result==true){
//                 console.log('get Quote button displayed correctly')

//             }else{
//                 console.log('test not displayed')
//             }
            
//         })
   

//     it('should bheave....',function(){
//         browser.waitForAngularEnabled(false);
//         browser.get('https://www.amazon.com/');

//         element(by.css('.nav-logo-link')).isDisplayed().then(function(result){
//         if(result==true){
//             console.log('get logo displayed correctly')

//         }else{
//             console.log('test not displayed')
//         }
        
//     })

// })

it('Task-2', () => {
    browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login");
    element(by.id('username')).sendKeys('Esra');
    element(by.id('password')).sendKeys('12345');
    element(by.id('formly_1_input_username_0')).sendKeys('Esra');
    $('.btn-danger').isEnabled().then((result)=>{
        console.log(result);
    })
});

it('should check logo', function() {
    // browser.waitForAngularEnabled(false);
     browser.get('http://www.way2automation.com/angularjs-protractor/registeration/#/login');
    $('#username').sendKeys("mevlude")
    $('#password').sendKeys("1234")
    $('#formly_1_input_username_0').sendKeys("mevlude")
     $(".btn-danger").isEnabled()
     .then((result) => {
 
     console.log(result)            
     });
 });

});


