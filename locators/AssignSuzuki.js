describe('Suziki project',function(){
    it('Suzuki test case',function(){
        browser.waitForAngularEnabled(false);
        browser.get('http://www.suzukicycles.com');
        browser.sleep(1000)
        browser.getTitle().then(function(title){
            if(title=='Suzuki Cycles'){
                console.log('passed')
            }
           
        })
       element(by.css('#suzuki>:nth-child(1)')).isPresent().then(function(text){
         console.log(text)
       })

    
     element(by.id('cycles')).click();
     var expect = [];
     element.all(by.css('.catName a')).getText().then(function(text){
         var a;
         
         for(let x=0;x<text.length;x++){
             a = text[x].split("\n");
            expect.push(a[0]);
           
         }
     
        })
        element(by.css('#body_0_rptYears_yearItem_1')).click();
        var motoTypes2018 = [];
         element.all(by.css('.catName a')).getText().then(function(types2018){
             var a;
             for(let x=0;x<types2018.length;x++){
                a =types2018[x].split("\n");
                motoTypes2018.push(a[0]);
              
            }
      
       // var bool = false;
        if(motoTypes2018.length==expect.length){
            var count=0;
        for(var i=0; i<expect.length; i++){
            if(expect[i] == motoTypes2018[i]){
                count++;
            }
        }
    }
        if(count==expect.length){
            console.log("Moto types 2018 -> Passed");
        } else{
            console.log("Moto types 2018 -> Failed");
        }
    })
        element(by.id('body_0_rptYears_yearItem_3')).click();
       var motoTypes2016 = [];
       element.all(by.css('.catName a')).getText().then(function(types2016){
        var a;

        for(let x=0;x<types2016.length;x++){
            a =types2016[x].split("\n");
            motoTypes2016.push(a[0]);
          
        }
     
   
if(motoTypes2016.length==expect.length){
    var count=0;
   for(var i=0; i<expect.length; i++){
       if(expect[i] == motoTypes2016[i]){
           count++;
       }
   }
}
   if(count==expect.length){
       console.log("Moto types 2016 -> Passed");
   } else{
       console.log("Moto types 2016 -> Failed");
   }

})
    
    })
})






// describe('Suzuki Assignment', () => {
//     it('Test Case 1', () => {
//         // Navigate to Suzuki
//         browser.waitForAngularEnabled(false);
//         browser.get("http://www.suzukicycles.com/");

//         // Verify the title of the page
//         browser.getTitle().then((title)=>{
//             console.log(title);   // -> Suzuki Cycles
//         })

//         // Verify Suzuki icon is present on top left
//         element(by.id('suzuki')).isPresent().then((isPresent)=>{
//             if(isPresent){
//                 console.log("Suzuki icon is present -> Passed");  // -> Passed
//             }else{
//                 console.log("Suzuki icon is NOT present -> Failed");
//             }
//         });

//         element(by.id('suzuki')).isDisplayed().then((isDisplayed)=>{
//             if(isDisplayed){
//                 console.log("Suzuki icon is present on top left -> Passed"); // -> Passed
//             }else{
//                 console.log("Suzuki icon is NOT present on top left -> Failed");
//             }
//         });


//         // Click on MOTORCYCLES
//         element(by.id('cycles')).click();


//         // Verify the following motorcycle options exist by comparing text of the following expected types names:
//         var exceptOptions = ['SPORTBIKE', 'CRUISER','TOURING', 'STANDARD', 'ADVENTURE', 'DUALSPORT','SUPERMOTO','MOTOCROSS','OFF ROAD'];
//         var motoTypes2018 = [];
//         element.all(by.css('.catName a')).getText().then((text)=>{
//             var a;
//             for(let x of text){
//                 a = x.split("\n");
//                 motoTypes2018.push(a[0]);
//             }

//             var bool = false;
//             for(var i=0; i<exceptOptions.length; i++){
//                 if(exceptOptions[i] == motoTypes2018[i]){
//                     bool = true;
//                 }
//             }

//             if(bool){
//                 console.log("Moto types 2018 -> Passed");
//             } else{
//                 console.log("Moto types 2018 -> Failed");
//             }
//         });

//         element(by.id('body_0_rptYears_yearItem_3')).click();

//         var motoTypes2016 = [];
//         element.all(by.css('.catName a')).getText().then((text)=>{
//             var a;
//             for(let x of text){
//                 a = x.split("\n");
//                 motoTypes2016.push(a[0]);
//             }

//             var bool = false;
//             for(var i=0; i<exceptOptions.length; i++){
//                 if(exceptOptions[i] == motoTypes2016[i]){
//                     bool = true;
//                 }
//             }

//             if(bool){
//                 console.log("Moto types 2016 -> Passed");
//             } else{
//                 console.log("Moto types 2016 -> Failed");
//             }
//         });

        
//     });

    
// });