exports.config={
    framework:'jasmine',
   seleniumAddress: 'http://localhost:4444/wd/hub',
   // directConnect:'true',
    specs:['odev4Spec.js'],
    capabilities: {'browserName':'chrome'},
    //  mutiCapabilities:[
    //         {browserName:'chrome'},
    //         {browserName:'firefox'}
    //     ],
    jasmineNodeOpts:{
        showColors:true,
       defaultTimeoutInterval:60000
    }
}