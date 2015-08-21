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
go(urls, 0);

//递归调用
function go(urls, index){
	if(index < urls.length){
		getAllPhone(urls[index],function(phones){
			console.log(phones);
			var allPhones = JSON.parse(fs.readFileSync("phones.txt"));
			allPhones = allPhones.concat(phones);
			fs.writeFileSync("phones.txt", JSON.stringify(allPhones));
			index ++;
			go(urls, index);
		});
		
	}

}

//获取所有手机
function getAllPhone(brandUrl, callback) {
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
