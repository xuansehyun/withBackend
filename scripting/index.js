var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

getAllBrand(function (brands) {
	for (var i = 0; i < brands.length; i++) {
		var brand = brands[i];
        getAllUrl(brand, function (urls) {
        	urls.push(brand);
        	console.log(urls);
        	for (var j = 0; j < urls.length; j++) {
        		getAllPhone(urls[j], function (phones) {
        			go(phones, 0);
                });
        	}
        });
    }
});

//递归调用
function go(phones, index){
	if(index < phones.length){
		getData(phones[index],function(){
			index ++;
			go( phones, index);
		});
		
	}

}

//获取所有的品牌
function getAllBrand(callback) {
	request("http://www.gsmarena.com/makers.php3", function (error, res, body) {
		if (!error && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var brands = [];
			$(".st-text").find("a").each(function (i) {
				if(i % 2 == 0){
					brands.push($(this).attr("href"));
				}
			});
			console.log(brands);
			callback(brands);
		}
	});
}

//获取所有url
function getAllUrl(brand, callback) {
	request("http://www.gsmarena.com/" + brand, function (error, res, body) {
		if (!error && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var urls = [];
			$(".nav-pages").find("a").each(function () {
				urls.push($(this).attr("href"));
			});
			callback(urls);
		}
	});
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

//爬数据
function getData(nameKeyword, callback) {
	var url = "http://www.gsmarena.com/" + nameKeyword;
	request(url, function (error, res, body) {
		if (!error && res.statusCode == 200) {
			var $ = cheerio.load(body);
			var $tables = $("#specs-list table");
			var technology = $tables.eq(0).find(".link-network-detail").text();
			var announced = $tables.eq(1).find("td").eq(1).text();
			var popularity = $(".help-popularity").find("strong").text();
			var hit = $(".help-popularity").find("span").text();
			var obj = {
				name: nameKeyword,
				technology: technology,
				announced: announced,
				popularity: popularity,
				hit: hit
			}
			var data = JSON.stringify(obj);
			console.log(data);
           var row = nameKeyword + "\t" + technology + "\t" + announced + "\t" + popularity + "\n";
           fs.appendFileSync("Info.xls", row);
           callback();
       } else {
       		console.log(error);
       		getData(nameKeyword, callback);
       }
   });
}
