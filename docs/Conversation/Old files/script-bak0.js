              const CharlesOptions = [
            	["hi"],
                ["Hello everyone"],
                ["This is a random message."],
                "Have a great day!",
                ["JavaScript is fun."],
                ["Explore the possibilities."]
            ];
            const CamillaOptions = [
            	[""],
                ["Hello, Dick"],
                ["This is a random message."],
                ["Have a great day!"],
                ["JavaScript is fun."],
                ["Explore the possibilities."]
            ];
            const CatherineOptions = [
            	[""],
                ["Hi"],
                ["This is a random message."],
                ["Have a great day!"],
                ["JavaScript is fun."],
                ["Explore the possibilities."]
            ];
            const WilliamOptions = [
            	[""],
                ["Hi dad!"],
                ["This is a random message."],
                ["Have a great day!"],
                ["JavaScript is fun."],
                ["Explore the possibilities."]
            ];
            
     let i = 0;         

  
  function displayRandomText() {
  
  		const button = document.getElementById('button');
  		button.addEventListener('click', SayHello);
  		
            // Generate a random index within the bounds of the array
            const CharlesSays = Math.floor(Math.random() * CharlesOptions.length);
            const CamillaSays = Math.floor(Math.random() * CamillaOptions.length);
            const CatherineSays = Math.floor(Math.random() * CatherineOptions.length);
            const WilliamSays = Math.floor(Math.random() * WilliamOptions.length);
            	
            // Get the text at the random index             
            const CharlesSaysRand = CharlesOptions[CharlesSays];
            const CamillaSaysRand = CamillaOptions[CamillaSays];
            const CatherineSaysRand = CatherineOptions[CatherineSays];
            const WilliamSaysRand = WilliamOptions[WilliamSays];

            // Display the random text in the p element
            document.getElementById("CharlesSays").innerHTML = CharlesSaysRand;
            document.getElementById("CamillaSays").innerHTML = CamillaSaysRand;
            document.getElementById("CatherineSays").innerHTML = CatherineSaysRand;
            document.getElementById("WilliamSays").innerHTML = WilliamSaysRand;
            
            
              function SayHello(){
          	// Get the text at the index
          
          	    const CharlesSaysRand = CharlesOptions[i];
          		document.getElementById("CharlesSays").innerHTML = CharlesSaysRand;
 
          	   	const CamillaSaysRand = CamillaOptions[i];
          		document.getElementById("CamillaSays").innerHTML = CamillaSaysRand;

          	   	const CatherineSaysRand = CatherineOptions[i];
          		document.getElementById("CatherineSays").innerHTML = CatherineSaysRand;

          	    const WilliamSaysRand = WilliamOptions[i];
          		document.getElementById("WilliamSays").innerHTML = WilliamSaysRand;


          	}
			  	i++;
  				if (i=7){i=0;}

                        	
        }
            // Display initial random text when the page loads
        
        displayRandomText(i);
        	setInterval(displayRandomText, 10000);
        	
            
	
