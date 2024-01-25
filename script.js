function nextPalindrome(num) {
  //your JS code here.
	parseInt(num);
	num++;
	while(true){
		if(num.toString()==num.toString().split("").reverse().join("")){
			return num;
		}else{
			parseInt(num);
			num++
		}
	}
}

const input = prompt("Enter a palindrome number");
alert(nextPalindrome(input));{

}