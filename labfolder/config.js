exports.config = {

    //address of our selenium server    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    //which browser would you want to use for your tests?
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: [
                '--start-fullscreen'
            ]
        }
    },

    // muticapabilities:[
    //     {browserName:'chrome'},
    //     {browserName:'firefox'}
    // ],
    
    //the name of your test scripts file
    specs: ['dropdown.js'],
    
    //which BDD framework we're going to uses
    framework: 'jasmine2',
    
    jasmineNodeOpts: {
        showColors: true,
       defaultTimeoutInterval: 300000
    
    },

//    onPrepare: function(){
//         browser.manage().window().maximize();
//     },
    
    };