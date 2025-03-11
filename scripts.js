function validateForm()
{
    let name = document.getElementById("name").value; //string variable for holding/storing name entered.
    let userName = document.getElementById("username").value; //string variable for holding/storing username entered.
    let password = document.getElementById("password").value; //string variable for holding/storing password entered.
    let age = document.getElementById("age").value; //string variable for holding/storing age entered.
    let bio = document.getElementById("bio").value; //string variable for holding/storing short bio entered.
    let firstLetterOfName = name.charAt(0); //string variable for holding/storing frist letter of name entered.
    let validation = true; //boolean variable for holding/storing the intial value of true, which will change
                                       //to false when the form validation fails.
    let outputResult = ""; //string variable for holding/storing the entire messages displayed to the form user.
    
	
	
	if(firstLetterOfName !== firstLetterOfName.toUpperCase() || name.length < 1){
	validation = false;		
	outputResult = outputResult + "First letter is not valid. <br>";
	}
	else{
	outputResult = outputResult + "First letter is " + firstLetterOfName + " <br>";	
	}
	if(name.length < 5){
		validation = false;		// makes sure name is longer than 5
		outputResult = outputResult + "Name is too short. <br>";
	}
	else{
		outputResult = outputResult + "Name is " + name + " <br>";
	}
	if(password < 6){
		validation = false;
		outputResult = outputResult + "Password is too short. <br>";
	}
	else{
		outputResult = outputResult + "Password has " + password.length + " characters <br>";
	}
	if(age < 1){
		validation = false;
		outputResult = outputResult + "Age is too young. <br>";
	}
	else{
		outputResult = outputResult + "Age is " + age + " <br>";
	}
	if(bio.toUpperCase().includes("FSU") || bio.toUpperCase().includes("FLORIDA STATE")){
		// purely just so i can else it, i didnt want to not the already weird condition
		outputResult = outputResult + "Your Bio is: " + bio + " <br>";
	}
	else{
		validation = false;
		outputResult = outputResult + "Must have fsu or florida state in bio. <br>";
	}
	// the dogs part is delt with later. 

	if(validation == false){
		console.log(outputResult); // purely for me. 
    // Add appropriate error notification to the string stored/held in the outputResult variable.
    // set the value of the boolean variable validationIsSuccessful to false.
	}
	else{
    //if all the data that the user entered is valid.
        let genderCode = document.getElementsByName("gender"); //this string variable holds the gender code used in the form.
        let likeDogCertify = document.getElementById("udogs").checked; //this boolean variable holds the value of true or false, depending
                                   //on whether the "I certify that I like dogs" checkbox is checked or not.
        let gender; //this is a string variable that stores/holds any of the four gender choices.
        genderCode = Array.from(genderCode).find((radio) => radio.checked).value;
		switch(genderCode){
			case "xx":
			gender = "Female";
			break;
			case "xy":
			gender = "Male";
			break;
			case "oth":
			gender = "Other";
			break;
			case "pns":
			gender = "Prefer not to say";
			break;
			default:
			gender = genderCode;
			// hopefully doesnt happen. 
			break;
		}
		
		outputResult = outputResult + "Gender is: " + gender + "<br>";
        //if the "I certify that I like dogs" check box is checked
		if(likeDogCertify){
			outputResult = outputResult + "You certify you like dogs <br>";
		}
		else{
			outputResult = outputResult + "You certify you dont like dogs <br>";
		}
            let favoriteDogBreedCode = document.getElementById("topdog").value; //this string variable holds the favorite dog breed code used in the form.
            let favoriteDogBreed = ""; //this is a string variable that stores/holds any of the six favorite dog breed choices.
            
			switch(favoriteDogBreedCode){
				case "0":
				favoriteDogBreed = "I did not say I like dogs";
				break;
				case "1":
				favoriteDogBreed = "Labrador";
				break;
				case "2":
				favoriteDogBreed = "Golden Retreiver";
				break;
				case "3":
				favoriteDogBreed = "Corgi";
				break;
				case "4":
				favoriteDogBreed = "Chihuahua";
				break;
				case "5":
				favoriteDogBreed = "Other";
				break;
				default:
				favoriteDogBreed = favoriteDogBreedCode;
				// hope and pray this doesnt happen. 
				break;
			}
            
			outputResult = outputResult + "Favorite dog breed is: "+ favoriteDogBreed + "<br>";
			
        
    }
    
    let outputContainer = document.getElementById("output"); //variable that holds/stores the object that represents the output or results container element.
    /*
    (5.) Assign the string value of outputResult variable to the innerHTML property or variable of the outputContainer object.
	*/
	outputContainer.innerHTML = "<p>" + outputResult + "</p>";
	if(validation == false){
		//if the data that the user entered is invalid.
        //Change the color of the text contents of the results container element to red.
		outputContainer.style.color = "red";
    }
	else{
		// change color back if valid
		outputContainer.style.color = "blue";
	}
}

function selectFavoriteDogBreed()
{
	let likeDogCertify = document.getElementById("udogs").checked;
	let dogList = document.getElementById("topdog");
	
	if(likeDogCertify == true){
		// works as intended
		dogList.options[1].disabled = false;
		dogList.options[2].disabled = false;
		dogList.options[3].disabled = false;
		dogList.options[4].disabled = false;
		dogList.options[5].disabled = false;
		dogList.value = "1";
		dogList.options[0].disabled = true;
	}
	else{
		// only did not select avalible
		dogList.options[0].disabled = false;
		dogList.value = "0";
		dogList.options[1].disabled = true;
		dogList.options[2].disabled = true;
		dogList.options[3].disabled = true;
		dogList.options[4].disabled = true;
		dogList.options[5].disabled = true;
		
	}
}

document.getElementById("submit-btn").onclick = validateForm;
document.getElementById("udogs").onclick = selectFavoriteDogBreed;
//Add an event listener to the selectFavoriteDogBreed() function.
window.onload = selectFavoriteDogBreed;
//^^ so it loads on page start. 