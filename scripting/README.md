# Web Scraping

make sure to download node.js from nodejs.org    
git clone   
node getBrands.js  
node getAllUrls.js  
node getPhones.js  
node writeExcel.js  

Two excel files will be generated in a seperate file
# address-collector

##DESCRIPTION
  This Node.js program basically does a 3-level scraping from the website gsmarena.com. On first level
it collectes the url of every brand form the brand summary page and saves it into a .txt file for the 
usage of the next level scraping. After getting the txt file, continue to second level scraping by 
calling url.js which accesses every url from the txt file and again collects the urls of each of the 
products. Lastly, with the url of every product of every brand, we access all of it and get the 
information we need, including release date, product type, name, technology, popularity, etc. 

##HOW TO RUN
  First, open the terminal and cd to the corresponding directory. Then type in the following sequentially:
  node getBrands.js
  node getAllUrls.js
  node getPhones.js
  node writeExcel.js
  It should take a while to get the result.

##NORMAL OUTPUT
  Output is printed by console.log().
  1.The normal output for brand.js should be:
Seans-MacBook-Pro:phone seanzhong$ node brand.js
[ 'acer-phones-59.php',
  'alcatel-phones-5.php',
  'allview-phones-88.php',
  'amazon-phones-76.php',
   ... ]
  2.The normal output for url.js should be:
Seans-MacBook-Pro:phone seanzhong$ node url.js
brands length:103
[ 'acer-phones-f-59-0-p2.php', 'acer-phones-59.php' ]
[ 'alcatel-phones-f-5-0-p2.php',
  'alcatel-phones-f-5-0-p3.php',
  'alcatel-phones-f-5-0-p4.php',
  'alcatel-phones-f-5-0-p5.php',
  'alcatel-phones-f-5-0-p6.php',
  'alcatel-phones-f-5-0-p7.php',
  'alcatel-phones-f-5-0-p8.php',
  'alcatel-phones-5.php' ]
  3. The normal output for excel.js shoube be:
{"wifi":"Yes","name":"BenQ-Siemens C31","type":"Phone","Manufactuer":"BenQ-Siemens","technology":"GSM","announced":"200706","popularity":"","hit":"57058","Is_Portable":1}
get num 719...


