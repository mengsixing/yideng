var webdriver = require('selenium-webdriver'),
By = webdriver.By,
until = webdriver.until;

var driver = new webdriver.Builder()
.forBrowser('firefox')
.build();

driver.get('http://localhost:5000/index/index');
var button = driver.wait(until.elementLocated(By.css('.hand')), 10000);


var times=10;
var a= setInterval(function(){
	times--;
	if(times<=0){
		clearInterval(a);
		driver.quit();
	}else{
		button.click();
	}
},1200);
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
// button.click();
