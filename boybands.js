let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
let loopCount = 1;

//Set Counter
let i = 0;

// Keep track of which band we're on in the loop
let currentBand = bands[i];

// Keep track of which veggie we're on in the loop
let currentVeggie = vegetables[i];

// Get a reference to the appropriate DOM element for bands
let bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
let veggieElement = document.getElementById("vegetables");;

// Start looping
for (let loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
  
  // Add the band names into the correct <div>
  for (let i in bands) {
  	console.log("The band is ", bands[i]);
  	  	bandElement.innerHTML +=
  	  	`
			<ul>
				<li>${bands[i]}</li>
			</ul>
  		`
  }

  
  // Add the veggie names into the correct <div>
  for (let i in vegetables) {
  	console.log("The vegetable is ", vegetables[i]);
  	veggieElement.innerHTML += 
		`	<ul>
				<li>${vegetables[i]}</li>
			</ul>
  		`
  }

}
