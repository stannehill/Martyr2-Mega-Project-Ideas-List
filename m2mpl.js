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


// Vowel Counter
function vowelCounter(input){
	var currentchar, counter, va, ve, vi, vo, vu; 
	counter = va = ve = vi = vo = vu = 0;
	var chars = input.split('');
	for(var i = 0; i < chars.length; i++) {
		currentchar = chars[i].toLowerCase();
		if(checkIfVowel(currentchar)){
			counter++;
			switch(currentchar) {
				case 'a':
					va++;
					break;
				case 'e':
					ve++;
					break;
				case 'i':
					vi++;
					break;
				case 'o':
					vo++;
					break;				
				case 'u':
					vu++;
					break;
			}
		}
	}

	return {
		"counter": counter,
		"a": va,
		"e": ve,
		"i": vi,
		"o": vo,
		"u": vu
	}
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
//Usage: vowelCounter("There once was a man from Nantucket");


// Check if palindrome (for words and phrases)
function palindromeDetector(input){
	var isPalindrome = false;
	input = input.toLowerCase().replace(/\s+/g, '');
	input = input.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"") // strip punctuation, why not?
	var reversed = input.split('').reverse().join('');

	input === reversed ? alert('Yep!') : alert('Nope!');
}
//Usage: palindromeDetector('Nurses run');

