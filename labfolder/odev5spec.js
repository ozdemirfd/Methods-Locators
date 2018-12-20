describe("task 1: ng-repeater",function(){
   // it('should behave....',function(){
     //  browser.get('http://www.way2automation.com/angularjs-protractor/webtables/')
    //    var array= element.all(by.repeater("dataRow in displayedCollection"))
    //    array.each(function(element){
    //         element.getText().then(function(row){
    //             console.log(row)
    //         })
    //     }) // All data



        // element.all(by.css('tbody>tr:nth-child(3)>td:nth-child(2)')).getText().then(function(name){
        //     console.log(name)
        // })//  [novak]

        //     element(by.repeater("dataRow in displayedCollection").row(2)).element(by.css("td:nth-child(2)")).getText()
        //.then(function(text){
        //         console.log(text)
        //     });
            
        // })  // novak



        //     element.all(by.css('tbody>tr>td:nth-child(2)')).each(function(element){
        //         element.getText().then(function(secondColumn){
        //             console.log(secondColumn)
        //         })
        // })// secon column



        // element.all(by.repeater("dataRow in displayedCollection").row(1)).each(function(text){
        //     text.getText().then(function(text){
        //     console.log(text)
        // });
        
        // }) //2.row tamami



   

//        var second=element.all(by.repeater("dataRow in displayedCollection").row(3));
//        second.each(function(item){
//         item
//         .element(by.css("td:nth-child(7)"))
//         .getText().then(function(columnData){
//         console.log(columnData);            // 3.row 7.eleman
//     })

// })
//  })

// element.all(by.repeater('dataRow in displayedCollection')).all(by.tagName("td:nth-child(2)")).get(2).getText().then(function(text){
//     console.log(text)
// })
//     }) //Novak
   

    // fit('Task 1',()=>{
    //     browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    //    var mytable=element.all(by.repeater('dataRow in displayedCollection'));
    //     mytable.each(function(row){
    //     row.getText().then(function(result){
    //     console.log(result);
    //     })
    // })
    
    //     var arr2=mytable.all(by.tagName("td:nth-child(2)"));
    //     arr2.each(function(row){
    //         row.getText().then(function(col){
    //             console.log(col);
    //         })
    //     })
        
    //     arr2.get(2).getText().then(function(cell){
    //         console.log(cell);
    //     })
     
    
    // }

//}) ; 





// it('Task 2',()=>{
//     browser.waitForAngularEnabled(false);
//    browser.get('https://www.etsy.com/?ref=lgo');
//    browser.sleep(1000);
//    element(by.id('catnav-primary-link-10923')).click();
//    browser.sleep(1000);
//    var dropDown=$$('#ship_to_select');

//    dropDown.each(function(result){
//        result.getText().then(function(countryList){
//            console.log(countryList);
//        })
//    })

//    var countries=$$('#ship_to_select optgroup option');

//    countries.getText().then(function(array){
//        for(let i=0; i<100; i++){
//            console.log(array[i]);
//        }
//    })
   
//     browser.executeScript('arguments[0].scrollIntoView();',element(by.id('ship_to_select'))).then(function(){
//     browser.sleep(3000);
//     element(by.id('ship_to_select')).element(by.css('option[value="TR"]')).click();
// })
// })



}) ;