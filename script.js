/*
//FETCH ALL 
let query1URL = "https://api.nasa.gov/mars-photos/api/v1//manifests/curiosity/?api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"

//"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=2648&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"

//"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2005-11-14&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"

//"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=172&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"

//"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=mast&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"

//"https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"

let query1URL = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m"


fetch(query1URL)
.then((response) => {
	return response.json()
})
.then((data) => {
	console.log(data)
	
})
.catch((err) => {
	console.log(err)
	
})
/*
	//function getRandomInt(){

	//return Math.floor(Math.random() * 3000);
	//}

	//getRandomInt(3000);
	//console.log(getRandomInt(3000));
	//let dateValue = getRandomInt(3000);
	/*while (dateValue <= 3000){
		console.log(dateValue);
		dateValue = dateValue + 1;
	}
	
//Fetch image   
	
	//let dateValue;
	//dateValue = Math.floor((Math.random() * 3000));

	
let queryURL = "https://byabbe.se/on-this-day/11/11/events.json"
	
	fetch(queryURL)
	
	.then((response) => {
	return response.json()
	})
	
	.then((data) => {
	console.log(data)
	})
*/


let mars = {
			
	//"date": dateValue,
	//this.date
	
	//Call Mars image API
	fetchImage: function(camera) {
	fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=" + (Math.floor(Math.random() * 3000)) + "&camera=" + camera + "&api_key=0Of8Sap5P4FtN4s167Fxxrp7lgvdRZfLhVdZSa4m")
	.then ((response) => response.json())
	.then ((data) => this.displayImage(data))
	//.catch ((err) => document.querySelector(".errorImage").src = "https://media.tenor.com/PNI5TJkleloAAAAM/bugs-bunny.gif")
	.catch ((err) => document.querySelector(".errorMessage").innerHTML = "Oh, drat these computers! No image found.<br>Try again.  <br><img src=https://media.tenor.com/PNI5TJkleloAAAAM/bugs-bunny.gif> ")	
	},
	
	/*Call On This Day API
	fetchDay: function() {
	fetch("https://byabbe.se/on-this-day/10/11/events.json")
		
	.then ((response) => response.json())
	.then ((onDay) => this.displayEarth(onDay))
	//.then ((onDay) => console.log(onDay))
		
	},*/
	
	//Display image 
	displayImage: function(data) {
		
		const { name, full_name } = data.photos[0].camera;
		const { img_src, sol, earth_date, id} = data.photos[0];
		const { landing_date } = data.photos[0].rover;
		console.log(name, full_name, img_src, sol, earth_date, id, landing_date);//landing_date,
		
		//let date = (data.photos[0].sol) +1;
		//console.log(date);
		
		let img1Id = id;
		if (img1Id != 0){
		console.log("hello");
		}
		
				
		document.querySelector(".pic").src = img_src;
		//document.querySelector(".pic2").src = img_src;
		//document.querySelector(".pic3").src = img_src;
		document.querySelector(".camera").innerText = full_name;
		document.querySelector(".dateTaken").innerHTML = "<b>Martian rotation (sol):   &nbsp;</b>" + sol; 
		document.querySelector(".earthDate").innerHTML = "<b>Earth date when photo was taken:   &nbsp;</b>" + earth_date;
		//document.querySelector(".landingDate").innerText = "Rover landing date:   " + landing_date;
		
		//date format yyyy-mm-dd
		let earthYear = earth_date;
		let result1 = earthYear.substr(0,4);
		console.log(result1); //typeof
	
		let earthMonth = earth_date;
		let result2 = earthMonth.substr(5,2) * 1;  //multiply by 1 to remove zero 
		console.log(result2); 
	
		let earthDay = earth_date;
		let result3 = earthDay.substr(8, 2) * 1; //multiply by 1 to remove zero 
		console.log(result3);
		
		let queryURL = "https://byabbe.se/on-this-day/" + result2 + "/" + result3 + "/events.json"
		fetch(queryURL)
	
		.then ((response) => response.json())
		.then ((onDay) => this.displayEarth(onDay))

	},
	
	//Display on this day fact
	displayEarth: function(onDay) {
		const { date } = onDay;
		const { description, year } = onDay.events[0];
		console.log(description, year, date);
		document.querySelector(".earth").innerHTML = "<b>On the same day in year " + year + ": &nbsp;</b>" + description;
		
	},
	
	search: function(){
		
		const dropdownElement = document.querySelector("#dropdown");
		dropdownElement.value;
		//console.log(getRandomInt(3000));		
		//this.fetchImage(document.querySelector(".search-bar").value);
		this.fetchImage(dropdownElement.value);			
	},
	
};

	//trigger
	//mars.fetchImage('NAVCAM');
	//Trigger onclick
	document.querySelector(".search button").addEventListener("click", function() {
		mars.search();
		document.querySelector(".errorMessage").innerHTML = " "; //clears error 
		document.querySelector(".pic").src = null;
		document.querySelector(".camera").innerText = "";
		document.querySelector(".dateTaken").innerText = "";
		document.querySelector(".earthDate").innerText = "";
		document.querySelector(".earth").innerText = "";
		document.querySelector(".placeholder").innerText = "";
		//document.querySelector(".landingDate").innerText = "";
	});
	//Trigger on keyup
	document.querySelector("#dropdown").addEventListener("keyup", function(event){
	if (event.key == "Enter"){
		mars.search();
		document.querySelector(".errorMessage").innerText = " "; //clears error 
		document.querySelector(".pic").src = 
		document.querySelector(".camera").innerText = "";
		document.querySelector(".dateTaken").innerText = "";
		document.querySelector(".earthDate").innerText = "";
		document.querySelector(".earth").innerText = "";
		//document.querySelector(".landingDate").innerText = "";
	}
	});
			
	//function refreshPage(){
		//window.location.reload();
	//};
	
	let quotes = [`"You're on Mars?  Isn't that lovely?"`, `"Isn't this a nice assignment?"`, `"Oh, drat these computers. They’re so naughty and so complex. I could pinch them."`, `"I think man is the most interesting insect on Earth. Don't you? There is a growing tendency to think of man as a rational thinking being, which is absurd."`, `"I’m just about to solve the Earth’s fuel problem. I’m going to blow it up!"`, `"Nevertheless, no Earth creature is going to contaminate my atmosphere."`, `"Please, sir. Do not interrupt my chain of thought. I'm a busy Martian."`, `"Brace yourself for immediate disintegration."`, `"Being disintegrated makes me very angry! Very angry indeed!"`, `"I claim this planet in the name of Mars. Isn't that lovely?"`, `"Oh, goodie! My Illudium Q-36 explosive space modulator."`] 
	function newQuote (){
		let randomNumber = Math.floor(Math.random() * (quotes.length));
		console.log(quotes);
		document.querySelector('#quote').innerHTML = quotes[randomNumber] + " - <i> Marvin the Martian</i> ";
		
	}
	newQuote();
	//window.addEventListener('load', newQuote, true);
	