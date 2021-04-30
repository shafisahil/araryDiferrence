//////////////////string concat////////
let fruitsName = "Mango , banana , grap";
let fruitsPrice = "200 , 120 , 250";
console.log(fruitsName);
console.log(fruitsPrice);
console.log(fruitsName.concat("  " +fruitsPrice));

/////////////////////////array concat//////////////////////
 let booksName = ["English" , "Urdu" , "Math" , "Sscience"];
 let booksPrice =[ 130 , 140 , 150 ,160];
 console.log(booksName);
 console.log(booksPrice);
 console.log(booksName.concat(booksPrice))

 //////////////////////////////multi dimension aray concat///////////////
 let countries = [
     ["Pakistan" , "karachi" , "islamabad" , "lahore" , "balochistan"] ,[ "IRAN" , "Tahran" , "Qoom"]
 ]
 console.log(countries);
 ////////////////////index using brackt/////////////////////
let contries = ["pakistan" , "iran" , "india" , "china"];
let cities = ["Gilgit" , "baltistan" , "lahore"];
console.log(contries.indexOf("iran"))
console.log(cities.indexOf("lahore"))
/////////////////////////////dmodifying data///////////////
let country = ["pakistan" , "iran" , "india" , "china"];
console.log(country);
country[3] = "America";
console.log(country)
country[2] = "canada";
console.log(country)
//////////////////////////////adding array/////////
country[3,3] = "karachi";
console.log(country);
country[1,1] = "sindh";
console.log(country);
///////////////////////////////push array////////adding /////////////
country.push("punjab","sialkot");
console.log(country)
country.push("baharat" , "usa");
console.log(country);
/////////////////////////pop aray/////last remove right side ////////////
country.pop();
console.log(country);
country.pop();
console.log(country);
////////////////////////////////////shift array ////////////////remove left side////
country.shift();
console.log(country);
country.shift();
console.log(country);
///////////////////////////////unshift array//////////////add left side/////////
country.unshift( "apple" ,"mang0");
console.log(country);
country.unshift( 32 ,33 ,12, 0,8 ,4 ,100 ,"potato" ,"onion");
console.log(country);
/////////////////////////sort array///////////////////incremental form///
/////
country.sort();
console.log(country)
////////////////////////reverse array/////////////////
country.reverse();
console.log(country);
country.splice(3 , 1 , "hindustan");
console.log(country);
country.splice(0 , 1 , "bangladash");
console.log(country);
////////////////////splice//////////////////
country.splice(1,5); 
console.log(country);
country.splice(3 , 6);
console.log(country);