// Craig Austgen
// I fixed Will's program that we did in class
// Ch.3 bean test



function countChars(words,letter) {		          // modified it so that you can input and character 					
	var count = 0;			                  // keeps track of number of times the letter appears
	for (var i = 0; i < words.length; i++) {
		var x = words.charAt(i);                  // stores each character as x 
		                                  
		if ((x == letter.toUpperCase()) ||	  // sets character to uppercase
			(x == letter.toLowerCase())) {    // sets character to lowercase
			count++;			  // increments number of times the character appears
		}
	}
	return count;					  // returns count
	
}

console.log(countChars(("Be the best you can Be"),'b'));  

