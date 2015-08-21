/* Filename: excel.js
 * Created by: Sean Zhong 
 * Email Address: sean.zhong@locarise.com
 * Date: Aug 19 2015
 * Description: This program takes on the phone list (url list) and executes each one of them, and 
 * then scrape the data from each url. The data includes the name of the phone, announcement date, 
 * technology, popularity, etc.
 */
var request = require("request");
var cheerio = require("cheerio");
var fs = require("fs");

var phones = JSON.parse(fs.readFileSync("phones.txt"));
console.log("phones length:" + phones.length);
fs.writeFileSync("Info.xls","");
go(phones, 0);


//keep track of the process in console
function go(phones, index){
  console.log("get num " + index + "...");
  if(index < phones.length){
    getData(phones[index],function(){
        index ++;
        go( phones, index);
        });

  }

}

//get data from collected urls
function getData(nameKeyword, callback) {
  var url = "http://www.gsmarena.com/" + nameKeyword;
  request(url, function (error, res, body) {
      if (!error && res.statusCode == 200) {
      var $ = cheerio.load(body);
      var $tables = $("#specs-list table");
      var wifi = $tables.eq(8).find(".nfo").text();
      //get today's date 
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() +1;
      var yyyy = today.getFullYear();

      if (dd<10) {
      dd = '0' +dd; }
      if (mm<10) {
        mm = '0' +mm; }
      today = yyyy + mm + dd;

      //get device name
      var name = $("title").text();
      var type;
      //detect if its a phone or tablet and make modification on name
      if (name.indexOf( "tablet" ) != -1) { 
        type = "Tablet";
        name = name.replace(" - Full tablet specifications", "");
      }
      else if (name.indexOf( "phone" ) != -1) {
        type = "Phone";
        name = name.replace(" - Full phone specifications", "");
      }
      if ( type == "Phone" || type == "Tablet" )	
        var is_portable = 1;
      else
        var is_portable = 0;
      //get manufactuer
      var manu = name.substr(0, name.indexOf(' '));

      //initialize and modify technology
      var technology = $tables.eq(0).find(".link-network-detail").text();	
      if (technology.indexOf( "cellular connectivity") != -1) 
        technology = "";
      technology = technology.replace( "/", "," );
      technology = technology.replace( /\s/g, "");

      //initialize and modify announced date
      var announced = $tables.eq(1).find("td").eq(1).text(); 
      if (announced.indexOf( "Released" ) != -1 ) 
        announced = announced.substring(0, announced.indexOf("R")-1);
      if (announced.indexOf( "official" ) != -1) {
        announced = "";
      if (announced.indexOf( "Jan" ) != -1) {
        announced = announced.replace( "January", "01" ); }
      else if (announced.indexOf( "Feb") != -1) {
        announced = announced.replace( "February", "02" ); }
      else if (announced.indexOf( "Mar") != -1) {
        announced = announced.replace( "March", "03" ); }
      else if (announced.indexOf( "Apr") != -1) {
        announced = announced.replace( "April", "04" ); }
      else if (announced.indexOf( "May") != -1) {
        announced = announced.replace( "May", "05" ); }
      else if (announced.indexOf( "June") != -1) {
        announced = announced.replace( "June", "06"); }
      else if (announced.indexOf( "July") != -1) {
        announced = announced.replace( "July", "07" ); }
      else if (announced.indexOf( "Aug") != -1) {
        announced = announced.replace( "August", "08" ); }
      else if (announced.indexOf( "Sep") != -1) {
        announced = announced.replace( "September", "09" ); }
      else if (announced.indexOf( "Oct") != -1) {
        announced = announced.replace( "October", "10" ); }
      else if (announced.indexOf( "Nov") != -1) {
        announced = announced.replace( "November", "11" ); }
      else if (announced.indexOf( "Dec") != -1) {
        announced = announced.replace( "December", "12" ); }
      announced = announced.replace ( ".", "");
      announced = announced.replace ( ",", "");
      announced = announced.replace ( /\s/g, "" ); 
      //initialize and modify popularity	
      var popularity = $(".help-popularity").find("strong").text();
      if (popularity.indexOf( "N/A")!= -1) {
        popularity = "";
      }
      popularity = popularity.replace("%", "");
      popularity = popularity.replace( /\s/g, "");
      //initialize and modify number of hits
      var hit = $(".help-popularity").find("span").text();	
      hit = hit.replace( "hits", "");
      hit = hit.replace( /,/g, "");
      hit = hit.substring( 0, hit.length-1 );	
      if (wifi != "No" ) {
        wifi = "Yes"; }
      var obj = {
      wifi: wifi,
      name: name,
      type: type,
      Manufactuer: manu,
      technology: technology,
      announced: announced,
      popularity: popularity,
      hit: hit,
      Is_Portable: is_portable
      }
      var data = JSON.stringify(obj);
      console.log(data);
      if (wifi.indexOf( "No" ) != -1 ) {
        callback();
        return;
      }
      else
        wifi = "yes";
      var row = name + "\t" +type + "\t" + manu + "\t" + technology + "\t" + announced + "\t" 
        + popularity + "\t" + hit + "\t" + today + "\t" + is_portable + "\n";
      //write in excel file 
      fs.appendFileSync("Info.xls", row);
      callback();
      } else {
        console.log(error);
        getData(nameKeyword, callback);
      }
  });
}
