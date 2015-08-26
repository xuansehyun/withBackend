/* Filename: brand.js
 * Created by: Sean Zhong 
 * Email Address: sean.zhong@locarise.com
 * Date: Aug 19 2015
 * Description: This program visits the website that contains a list of phone brands and collect  
 * the url of every brand which leads to the product summary page. At the same time it creates
 * an excel file "brands.xls" which is a list of all the brands name.
*/
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");
getAllBrands();

//get all brands on the website
function getAllBrands() {
	request("http://www.gsmarena.com/makers.php3", function (error, res, body) {
		if (!error && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var $tables = $("#specs-list table");
			var brands = [];
			//put all urls in brands[] array 
			$(".st-text").find("a").each(function (i) {
				if(i % 2 == 0){
					brands.push($(this).attr("href"));
				}
			});
			console.log(brands);
			fs.writeFileSync("brands.txt", JSON.stringify(brands));
			//create excel file 	
			for (var i = 0; i <brands.length; i++) {
				var single_brand = brands[i].substring(0, brands[i].indexOf("-"));
				var cap_first_letter = single_brand.charAt(0).toUpperCase() + 
							single_brand.slice(1);
				cap_first_letter = cap_first_letter.replace( "_", " ");
				cap_first_letter = cap_first_letter.replace( "_", "");
				console.log(cap_first_letter);
				fs.appendFileSync( "brandsList.xls", cap_first_letter + "\n");
			};
		}
	});
}
