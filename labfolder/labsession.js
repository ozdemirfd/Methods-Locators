describe('lab-3 exercise',function(){
    it('first exercise',function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        element(by.buttonText('Customer Login')).click()
        element(by.css(".form-group>label")).getText().then(function(text){
            if(text=="Your Name :"){
                console.log("passed")
            }else{
                console.log("not passed")
            }
        })
        browser.sleep(2000)

    var a= element.all(by.repeater("cust in Customers"));
    var choose=a.get(1).click()
    choose.getText().then(function(name){
        console.log(name)
    })
    browser.sleep(2000)

    element(by.buttonText('Login')).click()
    browser.sleep(2000)
    element(by.css('.btn.logout')).click()
    browser.sleep(2000)
})



    it('second exercise',function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/login")
        element(by.partialButtonText('Bank Mana')).click()
        browser.sleep(2000)
    })



    it('third exercise',function(){
        browser.get("http://www.way2automation.com/angularjs-protractor/registeration/#/login")
        element(by.model('Auth.user.name')).sendKeys('Mike')
        browser.sleep(2000)
        element(by.model('Auth.user.password')).sendKeys('abcd')
        browser.sleep(2000)
        element(by.model('model[options.key]')).sendKeys('Mike')
    })

    fit('.all() method', () => {
        browser.waitForAngularEnabled(false);
        browser.get("http://www.espn.com/soccer/standings/_/league/eng.1");
        // element.all(by.css('.standings-row')).getText().then((array)=>{
        //     console.log(array);
        // });

//         element.all(by.css('.standings-row')).getText().then((array)=>{
//             console.log(array.length);    // -> 20
//         });

//         element.all(by.css('.standings-row')).count().then((totalRow)=>{
//             console.log(totalRow);        // -> 20
//         });

//         element.all(by.css('.standings-row td')).count().then((totalData)=>{
//             console.log(totalData);       // -> 180
//         });

//     var tabela=element.all(by.css('.standings-row td'));
//     tabela.get(8).getText().then(function(data){
//     console.log(data)
// })

//     var tabela=element.all(by.css('.standings-row td'));
//     tabela.each(function(element){
//     element.getText().then(function(data){
//         console.log(data)
// })

// var tabela=element.all(by.css('.standings.has-team-logos>tbody>tr'));
// tabela.get(15).getText().then(function(data){
// console.log(data)
// })
// element.all(by.css('.standings.has-team-logos>tbody>tr')).get(15).getText().then(function(data){
// console.log(data)
// })
// element.all(by.css('.standings.has-team-logos>tbody>tr')).each(function(data){
//     data.getText().then(function(data){
//   console.log(data)

// })

// element.all(by.css('.standings.has-team-logos>tbody>tr>td')).getText().then(function(data){
//     console.log(data)
// })


})
})






   



