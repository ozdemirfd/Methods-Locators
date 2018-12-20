// describe('toBeTruthy', function() {
//     it('passes if subject is true', function() {
//         expect(true).toBeTruthy();
//         expect(false).not.toBeTruthy();
//     });
    
//     it('passes if subject is a non empty string', function() {
//         expect('Should pass').toBeTruthy();        
//     });
    
//     it('passes if subject is a number not equal 0', function() {
//         expect(1).toBeTruthy();        
//     });

//     it('fails if subject is an empty string', function() {
//         expect('').not.toBeTruthy();
//     });

//     it('fails if subject is false', function() {
//         expect(false).not.toBeTruthy();
//     });
    
//     it('fails if subject is 0', function() {
//         expect(0).not.toBeTruthy();
//     });

//     it('toBeTrue', function() {
//         //expect(1).toBeTrue();
//         expect(1).not.toBe(true);
//     });


// });
describe('Validating the Calculator app', () => {

    var expectedText;

    beforeEach(function(){
        browser.get('http://way2automation.com/angularjs-protractor/calc/');
    });
    
    afterEach(function(){
        browser.sleep(3);
        console.log('This is printing after it block');
    });
    
        it('validate 7 + 7 = 14', () => {      
            element(by.model("first")).sendKeys(7);
            element(by.model('second')).sendKeys(7);
            element(by.buttonText('Go!')).click();
            expectedText= element(by.binding('latest')).getText();
              expectedText.then(function(text){
                expect(parseInt(text)).toBe(14);
              });
        });

        it('validate 7+7 !=10',function(){
            element(by.model("first")).sendKeys(7);
            element(by.model('second')).sendKeys(7);
            element(by.buttonText('Go!')).click();
            expectedText= element(by.binding('latest')).getText();
              expectedText.then(function(text){
                expect(parseInt(text)).not.toBe(10);
              });
        });



        it('validate 7+7 =13',function(){
            element(by.model("first")).sendKeys(7);
            element(by.model('second')).sendKeys(7);
            element(by.buttonText('Go!')).click();
            expectedText= element(by.binding('latest')).getText();
              expectedText.then(function(text){
                expect(parseInt(text)).toBe(12);
              });
        });


    });
	describe('toBeDefined', function() {    
    
        it('passes if subject and expectation are equivalent', function() {      
            expect('Hello World!').toEqual('Hello World!');      
            expect('Hello World!').not.toEqual('Goodbye!');      
            expect([1, 2, 3]).toEqual([1, 2, 3]);      
            expect("1").toEqual(1);      
            expect({ foo: 1 }).toEqual({ foo: 1 });    
        });
        
        
        
        it('passes if subject is not undefined', function() {      
        expect({}).toBeDefined();      
        expect(undefined).not.toBeDefined();    
        });
    
        it('passes if subject is null', function() {      
            expect(null).toBeNull();      
            expect(undefined).not.toBeNull();      
            expect({}).not.toBeNull();    
        });
    
        it('passes if subject is false', function() {      
            expect(false).toBeFalsy();      
            expect(true).not.toBeFalsy();    
        });
    
        it('checks that the expected item is equal to the actual item up to a given level of decimal precision ',
         function() {      
            expect(1.223).toBeCloseTo(1.22);      
            expect(1.233).not.toBeCloseTo(1.22);      
            expect(1.23326).toBeCloseTo(1.23324, 3);    
        });
    
        it('passes if the expected item is an element in the actual array, or a substring of string', function() {      
            expect([1, 2, 3]).toContain(2);      
            expect([1, 2, 3]).not.toContain(4);    
        });
        /*  To summarize 2 use cases for contain():
            To check if item is an element of an array. 
            To check if item is a a substring of a string.
        */
    
       it('passes if the actual value is greater than the expected value', function() {      
           expect(347).toBeGreaterThan(300);    
        });
    
        it('passes if the actual value is less than the expected value', function() {      
            expect(2).toBeLessThan(3);    });
    
    });
    