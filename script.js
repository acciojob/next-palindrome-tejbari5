function nextPalindrome(num) {
  //your JS code here.
	let n=parseInt(num)
	++n
	while(!isPalindrome(n)){
		++n
	}

	return n;

}

function isPalindrome(num){
	return num.toString() === num.toString().split('').reverse().join('');
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));
