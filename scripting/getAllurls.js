/* Filename: url.js
 * Created by: Sean Zhong 
 * Email Address: sean.zhong@locarise.com
 * Date: Aug 19 2015
 * Description: This program accesses the list of brand urls provided by brand.js and get the url 
 * 		of every product. This is a second-level scraping. 
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var brands = JSON.parse(fs.readFileSync("brands.txt"));
console.log("brands length:" + brands.length);
fs.writeFileSync("urls.txt", JSON.stringify([]));
writeAllUrls(brands, 0);

//used for keeping track of the script process, write urls into txt file
function writeAllUrls(brands, index){
  if(index < brands.length){
    getAllUrls(brands[index],function(urls){
        urls.push(brands[index]);
        console.log(urls);
        var allUrls = JSON.parse(fs.readFileSync("urls.txt"));
        allUrls = allUrls.concat(urls);
        fs.writeFileSync("urls.txt", JSON.stringify(allUrls));
        index ++;
        writeAllUrls(brands, index);
        });
  }
}

//get all the urls of all the products
function getAllUrls(brand, callback) {
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

