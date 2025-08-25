              const CharlesOptions = [
               [ "hi" ],
               
               [ "A dick has it rough." ],
               [ "Not only are his closest friends nuts, but his backdoor neighbor’s an asshole. And..."],
               [ "if that weren’t enough, he regularly takes a beating." ],
               
               [ "How do you compliment someone on performing a circumcision?" ],
               [ "Tell ’em to keep the tip." ],
               [ "Well done girl!" ],
               
               [ "So, I asked Camilla to tell me something that would make me both happy and sad at the same time." ],
               [ "She said, 'You have the biggest penis out of all your friends.'" ],
               [ "She said, 'You have the biggest penis out of all your friends.'" ],
               
               [ "What’s the insensitive part at the end of the penis called again?" ],
               [ "A man!" ],
               [ "A man!" ],
               
               [ "" ],//told by catherine
               [ "" ], //blank camilla finishes it off
               [ "Thats why I love you" ], 
               
               [ "You tell one Camilla" ],
               [ "" ], 
               [ "Are you sure we're not related?" ], 
               
               [ "What did the penis say to the vagina?" ],
               [ "Don’t make me cum in there!" ],
               [ "Don’t make me cum in there!" ],
               
               [ "Awe common I have cancer!" ],
               [ "Awe common I have cancer!" ],
               [ "Blow me, William!" ],
               
               [ "What happened to the man who built a penis out of LEGOs?" ],
               [ "He got cock blocked." ],
               [ "He got cock blocked." ],
               
               [ "Tell another one Camilla!" ],
               [ "" ],//camilla tells joke
               [ "" ], //blank catherine and camilla finishes it off
               [ "That's right girls!" ], 
               
               [ "Life is like a dick." ],
               [ "It gets hard for no reason, and it is much too short." ],
               [ "It gets hard for no reason, and it is much too short." ]
               
           ];
            
           const CamillaOptions = [
              [ "hi" ],
               
               [ "" ],
               [ ""],
               [ "" ],
               
               [ "" ],
               [ "" ],
               [ "You dirty man!" ],
               
               [ "" ],
               [ "" ],
               [ "You do!" ],
               
               [ "" ],
               [ "" ],
               [ "My man!" ],
               
               [ "" ],
               [ "How do you breathe through that thing?" ], //camilla finishes it off
               [ "How do you breathe through that thing?" ], //camilla finishes it off
               
               [ "Why do doctors smack babies on the butt after they are born?" ],
               [ "" ], //blank catherine finishes it off
               [ "You got it sister!" ], 
               
               [ "" ],
               [ "" ],
               [ "Encouragable!" ],
               
               [ "" ],
               [ "I'm just sick" ],
               [ "I'm just sick" ],
               
               [ "" ],
               [ "" ],
               [ "How do you feel, William?" ],
               
               [ "" ],
               [ "What did Cinderella do when she got to the ball?" ],
               [ "" ], //blank catherine finishes it off
               [ "" ], //blank catherine finishes it off
               
               [ "" ],
               [ "" ],
               [ "I love you William." ] 
               
           ];
           
           const CatherineOptions = [
               [ "hi" ],
               
               [ "" ],
               [ ""],
               [ "" ],
               
               [ "" ],
               [ "Tell ’em to keep the tip." ],
               [ "" ],
               
               [ "" ],
               [ "" ],
               [ "I believe it!" ],
               
               [ "" ],
               [ "" ],
               [ "William!" ],
               
               [ "What did the elephant say to the naked man?" ],//told by catherine
               [ "" ], //blank camilla finishes it off
               [ "" ], //blank camilla finishes it off
               
               [ "" ],
               [ "To knock the dicks off of the smart ones." ], //blank catherine finishes it off
               [ "To knock the dicks off of the smart ones." ], //blank catherine finishes it off
               
               [ "" ],
               [ "" ],
               [ "You dirty bastard!" ],
               
               [ "" ],
               [ "I have cancer too!" ],
               [ "I have cancer too!" ],
               
               [ "" ],
               [ "" ],
               [ "Asshole!" ],
               
               [ "" ],
               [ "" ],
               [ "She choked" ], //blank catherine and camilla finishes it off
               [ "She choked" ], //blank catherine and camilla finishes it off
               
               [ "" ],
               [ "" ],
               [ "" ]  
           ];
           
           const WilliamOptions = [
               [ "hi" ],
               
               [ "" ],
               [ ""],
               [ "" ],
               
               [ "" ],
               [ "" ],
               [ "Thank god I am not circumsized." ],
               
               [ "" ],
               [ "" ],
               [ "Behave mom." ],
               
               [ "" ],
               [ "" ],
               [ "Thank you." ],
               
               [ "" ],
               [ "" ], //blank camilla finishes it off
               [ "" ], //blank camilla finishes it off
               
               [ "" ],
               [ "" ], //blank catherine finishes it off
               [ "" ], //blank catherine finishes it off
               
               [ "" ],
               [ "" ],
               [ "Seriously dad, enough!" ],
               
               [ "" ],
               [ "You don't have cancer dad!" ],
               [ "We're all going to prison!" ],
               
               [ "" ],
               [ "" ],
               [ "I feel like my wedding was a cock block!" ],
               
               [ "" ],
               [ "" ],
               [ "" ], //blank catherine and camilla finishes it off
               [ "" ], //blank catherine and camilla finishes it off
               
               [ "" ],
               [ "" ],
               [ "I love you dad." ]
           ];
            
            
            let i=0;
            
		function displayRandomText() {
  		
            // Get the text at the random index             
            //const CharlesSaysRand = CharlesOptions[CharlesSays];
			const CharlesSaysRand = CharlesOptions[i];
			const CamillaSaysRand = CamillaOptions[i];
			const CatherineSaysRand = CatherineOptions[i];
			const WilliamSaysRand = WilliamOptions[i];

            // Display the random text in the p element
            document.getElementById("CharlesSays").innerHTML = CharlesSaysRand;
            document.getElementById("CamillaSays").innerHTML = CamillaSaysRand;
            document.getElementById("CatherineSays").innerHTML = CatherineSaysRand;
            document.getElementById("WilliamSays").innerHTML = WilliamSaysRand;
    
			i++;
			if(i>34){i=0;}
                        	
        }
            // Display initial random text when the page loads
        
        displayRandomText();
        	setInterval(displayRandomText, 5000);
        	
            
	
