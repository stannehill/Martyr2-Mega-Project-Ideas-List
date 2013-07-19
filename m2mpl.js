// Martyr2’s Mega Project List
// http://www.dreamincode.net/forums/topic/78802-martyr2s-mega-project-ideas-list/

// Reverse a String
"abcdefg".split("").reverse().join("");


// Pig Latin Generator
function pigLatinizer(sentence){
	var words = sentence.split(' '),
	wlen = words.length,
	firstLetter,
	output = '',
	substring;

	for(var i = 0; i < wlen; i++){
		firstLetter = words[i].toLowerCase().charAt(0);
		if(checkIfVowel(firstLetter)){
			output += words[i] + 'way ';
		}else{
			substring = words[i].slice(1);
			output += back + firstLetter + 'ay ';
		}
	}

	return output;
}

function checkIfVowel(input){
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	for(var k = 0; k < vowels.length; k++){
		index = input.indexOf(vowels[k]);
		if(index > -1){
			return true;
		}
	}
	return false;
}

//Usage: pigLatinizer('There once was a man from Nantucket');