// // element

// // WebElement: input. link. image, 


// //element
// function ericElement(locator){
// 	//search mechanism inside the function.
// 	// a lot of code
	
// 	var foundWebElement= "Wow I've found the element with the locator: ";
// 	return foundWebElement;
	
// 	}
	
// 	console.log(ericElement("//div[@name='something'"));
// 	//element function returns an object.click/sendKeys
	
	
// 	// name inputtext
// 	function ericElementAll(locator){
// 	//code to find all the items in the page and put it in an array
	
// 		var AllTheItemsIveFoundWithGivenLocator = [];
	
// 		AllTheItemsIveFoundWithGivenLocator[0]="inputbox on the left";
// 		AllTheItemsIveFoundWithGivenLocator[1]="inputbox on the right"
	
// 		return AllTheItemsIveFoundWithGivenLocator;
	
// 	}
	
// 	console.log(ericElementAll("notuniqueone"));

describe("All method example",()=>{
	it('element.all garb all the links in google.com',()=>{
		browser.waitForAngularEnabled(false);
		browser.get("https://www.google.com/");
		element.all(by.tagName("a")).getText().then(function(textArray){
			console.log(textArray)
			for(let i=0;i<textArray.length;i++){
				console.log(textArray[i]);
			}
		})
	})
it('grab from a list',function(){
	browser.waitForAngularEnabled(false);
	browser.get("https://www.bbc.com/");

	$$('html li').getText().then(function(textArray){
		console.log(textArray)
	
	})
	// element.all(by.tagName("li")).getText().then(function(textArray){
	// 	console.log(textArray)
	
	// })
})
it('grab from a list',function(){
	browser.waitForAngularEnabled(false);
	browser.get("https://www.bbc.com/");

	$$("#orb-nav-links>ul>li").getText().then(function(textArray){
		console.log(textArray)
	
	})
	//element(by.css("#orb-nav-links")).all(by.tagName("li")).getText().then(function(text))
	//$$("html header")
	 //$$("div#orb-header")
	 // $$('.orb-nav-pri-container.b-r.b-g-p')
	// element.all(by.css('#orb-nav-links>ul>li'))
})
it('grab from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");

	var result = $$(".item-title-and-infos>h2>a");
	result.getText().then(function(ElementArray){
		console.log(ElementArray.slice(0,4).toString())

	})

})
it('should count total element from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");
	//with veriable
	var resultCount = $$(".item-title-and-infos>h2>a").count();
	resultCount.then(function(totalTitle){
		console.log("total count in the page is: "+ totalTitle)

	})

//without veriable
	$$(".item-title-and-infos>h2>a").count().then(function(totalTitle){
		console.log("witout veriab letotal count in the page is: "+ totalTitle)
	})

})
it('should find the first element from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");

	//without variable
	$$(".item-title-and-infos>h2>a").first().getText().then(function(text){
		console.log(text)
	})
   

	//with veriable

	let firsttext=$$(".item-title-and-infos>h2>a").first();
	firsttext.getText().then(function(text){
		console.log(" your first title is: "+ text)
	})
})

it('should find the last element from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");

	//without variable
	$$(".item-title-and-infos>h2>a").last().getText().then(function(text){
		console.log(text)
	})
   

	//with veriable

	let lasttext=$$(".item-title-and-infos>h2>a").last();
	lasttext.getText().then(function(text){
		console.log(" your last title is: "+ text)
	})
})

it('should find the exact element from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");
	let  item=$$(".item-title-and-infos>h2>a");
	let sixthItem=item.get(5)
	let tenthItem=item.get(9)
	sixthItem.getText().then(function(textsixth){
		console.log("6th item of the array is: "+textsixth );
	})
	tenthItem.getText().then(function(texttenth){
		console.log("10th item of the array is: "+texttenth );
	})
})

it('grab from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");

	var result = $$(".item-title-and-infos>h2>a").first()
	result.getText().then(function(ElementArray){
		console.log(ElementArray)
   var item=$$(".item-infos.list-inline>li:nth-child(3)").first();
   item.getText().then(function(text){
	   console.log(text)
   })
	})
})




it('Task', () => {
	browser.get("https://hn.algolia.com/");

	var items = $$(".item-title-and-infos>h2>a");
	var dates = $$(".item-infos.list-inline>:nth-child(3) .date.ng-binding");

	var tenthItem = items.get(9);
	var tenthDate = dates.get(9);

	tenthItem.getText().then((text)=>{
		console.log(text);
		tenthDate.getText().then((tenth)=>{
		
			console.log(tenth);
		})
	})
});


it('grab from a list',function(){
	//browser.waitForAngularEnabled(false);
	browser.get("https://hn.algolia.com");

	var result = $$(".item-title-and-infos>h2>a")
	eigthresult=result.get(4)
	eigthresult.getText().then(function(ElementArray){
		console.log(ElementArray)
	 	})
   var month=$$(".item-infos.list-inline>:nth-child(3) .date.ng-binding");
   var sixthmonth=month.get(7)
   sixthmonth.getText().then(function(text){
	   console.log(text)
   

})
})
fit('should find the exact element',function(){
	browser.get('https://hn.algolia.com');
	var parentElems =  $$('.item-title-and-infos');
	var resultTitle = parentElems.$$('h2>a');
	var resultDate = parentElems.all(by.partialLinkText("ago"));
	var itemDate=resultDate.get(8)
	itemDate.getText().then(function(text){
		console.log(text)
	})
	resultTitle.getText().then(function(text){
		console.log(text);
	});
	resultDate.getText().then(function(text){
		console.log(text);
	})
	//$$('.item-title-and-infos').all(by.partialLinkText("ago")).getText().then(function(text){
	//	console.log(text)
//	})

});

})