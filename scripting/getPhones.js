/* Filename: phone.js
 * Created by: Sean Zhong 
 * Email Address: sean.zhong@locarise.com
 * Date: Aug 19 2015
 * Description: This program collects all the urls of each product page by accessing the product  
 * summury page provided by url.js
*/
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var urls = JSON.parse(fs.readFileSync("urls.txt"));
console.log("urls length:" + urls.length);
fs.writeFileSync("phones.txt", JSON.stringify([]));
writeAllPhones(urls, 0);

//access urls for brands page and generate a txt file containing all phone names
function writeAllPhones(urls, index){
	if(index < urls.length){
		getAllPhones(urls[index],function(phones){
			console.log(phones);
			var allPhones = JSON.parse(fs.readFileSync("phones.txt"));
			allPhones = allPhones.concat(phones);
			fs.writeFileSync("phones.txt", JSON.stringify(allPhones));
			index ++;
			writeAllPhones(urls, index);
		});
		
	}

}

//function for acessing a single phone page and return the url
function getAllPhones(brandUrl, callback) {
	request("http://www.gsmarena.com/" + brandUrl, function (error, res, body) {
		if (!error && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var phones = [];
			$(".makers").find("a").each(function () {
				phones.push($(this).attr("href"));
			});
			console.log(phones);
			callback(phones);
		}
	});
}
