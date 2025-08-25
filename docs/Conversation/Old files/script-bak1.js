              const CharlesOptions = [
            	["hi"],
                ["Hello everyone"],
                ["This is a random message."],
                "Have a great day!",
                ["JavaScript is fun."],
                ["Explore the possibilities."]
            ];
            
		function displayRandomText() {
  		
            // Generate a random index within the bounds of the array
            const CharlesSays = Math.floor(Math.random() * CharlesOptions.length);

            	
            // Get the text at the random index             
            const CharlesSaysRand = CharlesOptions[CharlesSays];


            // Display the random text in the p element
            document.getElementById("CharlesSays").innerHTML = CharlesSaysRand;
    

                        	
        }
            // Display initial random text when the page loads
        
        displayRandomText(i);
        	setInterval(displayRandomText, 10000);
        	
            
	
